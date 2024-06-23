export type DiffItem = {
    // the value can be a character, a word, a string
    value: string;
    type: "correct" | "extra" | "missing" | "wrong" | "untouched" | "spacer";
};

export type DiffResult = {
    diff: DiffItem[];
    end: boolean;
};

export const diff = (originalText: string, typedText: string): DiffResult => {
    const correctWords = originalText.split(" ");
    const typedWords = typedText.split(" ");
    const currentWordIndex = typedWords.length - 1;
    const diff: DiffItem[] = [];

    // compare words BEFORE current word
    if (currentWordIndex > 0) {
        for (let i = 0; i < currentWordIndex; i++) {
            if (i >= correctWords.length) {
                break;
            }
            const correctWord = correctWords[i];
            const typedWord = typedWords[i];
            if (!correctWord || !typedWord) {
                continue;
            }
            const wordDiff = diffWord(correctWord, typedWord);
            diff.push(...wordDiff);
            diff.push({ value: " ", type: "spacer" });
        }
    }
    if (currentWordIndex >= correctWords.length) {
        return { diff, end: true };
    }
    // compare current word
    const correctWord = correctWords[currentWordIndex];
    const typedWord = typedWords[currentWordIndex];
    if (!correctWord || !typedWord) {
        return { diff, end: false };
    }
    const currentWordDiff = diffCurrentWord(correctWord, typedWord);
    diff.push(...currentWordDiff);

    // words AFTER current word are untouched
    if (currentWordIndex + 1 < correctWords.length) {
        for (let i = currentWordIndex + 1; i < correctWords.length; i++) {
            const correctWord = correctWords[i];
            if (!correctWord) {
                continue;
            }
            diff.push({ value: correctWord, type: "untouched" });
            diff.push({ value: " ", type: "spacer" });
        }
    }

    return { diff, end: false };
};

const diffWord = (originalWord: string, typedWord: string) => {
    const diff: DiffItem[] = [];

    // compare letters
    const correctLength = originalWord.length;
    const typedLength = typedWord.length;

    // if typed word is shorter than correct word: typed: "hel", correct: "hello"
    if (typedLength < correctLength) {
        // check until typedLength
        for (let i = 0; i < typedLength; i++) {
            let originalChar = originalWord[i];
            let typedChar = typedWord[i];
            if (!originalChar || !typedChar) {
                continue;
            }
            diff.push(diffChar(originalChar, typedChar));
        }
        // the rest are missing
        for (let i = typedLength; i < correctLength; i++) {
            let originalChar = originalWord[i];
            if (!originalChar) {
                continue;
            }
            diff.push({ value: originalChar, type: "missing" });
        }
    }

    // if typed word is longer than correct word: typed: "helloo", correct: "hello"
    if (typedLength > correctLength) {
        // check until correctLength
        for (let i = 0; i < correctLength; i++) {
            let originalChar = originalWord[i];
            let typedChar = typedWord[i];
            if (!originalChar || !typedChar) {
                continue;
            }
            diff.push(diffChar(originalChar, typedChar));
        }
        // the rest are extra
        for (let i = correctLength; i < typedLength; i++) {
            let typedChar = typedWord[i];
            if (!typedChar) {
                continue;
            }
            diff.push({ value: typedChar, type: "extra" });
        }
    }

    // if typed word is equal to correct word: typed: "hello", correct: "alloh"
    if (typedLength === correctLength) {
        for (let i = 0; i < correctLength; i++) {
            let originalChar = originalWord[i];
            let typedChar = typedWord[i];
            if (!originalChar || !typedChar) {
                continue;
            }
            diff.push(diffChar(originalChar, typedChar));
        }
    }

    return diff;
};

const diffChar = (originalChar: string, typedChar: string): DiffItem => {
    if (originalChar === typedChar) {
        return { value: originalChar, type: "correct" };
    }
    return { value: typedChar, type: "wrong" };
};

const diffCurrentWord = (correctWord: string, typedWord: string) => {
    const diff: DiffItem[] = [];
    const correctLength = correctWord.length;
    const typedLength = typedWord.length;

    // if typed word is shorter than correct word: typed: "hel", correct: "hello"
    if (typedLength < correctLength) {
        // check until typedLength
        for (let i = 0; i < typedLength; i++) {
            let originalChar = correctWord[i];
            let typedChar = typedWord[i];
            if (!originalChar || !typedChar) {
                continue;
            }
            diff.push(diffChar(originalChar, typedChar));
        }
        // the rest are untouched
        for (let i = typedLength; i < correctLength; i++) {
            let originalChar = correctWord[i];
            if (!originalChar) {
                continue;
            }
            diff.push({ value: originalChar, type: "untouched" });
        }
    }

    // if typed word is longer than correct word: typed: "helloo", correct: "hello"
    if (typedLength > correctLength) {
        // check until correctLength
        for (let i = 0; i < correctLength; i++) {
            let originalChar = correctWord[i];
            let typedChar = typedWord[i];
            if (!originalChar || !typedChar) {
                continue;
            }
            diff.push(diffChar(originalChar, typedChar));
        }
        // the rest are extra
        for (let i = correctLength; i < typedLength; i++) {
            let typedChar = typedWord[i];
            if (!typedChar) {
                continue;
            }
            diff.push({ value: typedChar, type: "extra" });
        }
    }

    // if typed word is equal to correct word: typed: "hello", correct: "alloh"
    if (typedLength === correctLength) {
        for (let i = 0; i < correctLength; i++) {
            let originalChar = correctWord[i];
            let typedChar = typedWord[i];
            if (!originalChar || !typedChar) {
                continue;
            }
            diff.push(diffChar(originalChar, typedChar));
        }
    }

    diff.push({ value: " ", type: "spacer" });

    return diff;
};
