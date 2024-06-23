import { atom } from "jotai";
import { diff } from "typer-diff";

let text =
    "typer-diff is a library to diff two strings, useful for showing for typing games (like monkeytype) or for showing differences between two strings. It is a simple library that is easy to use and has no dependencies. It is also very fast and lightweight.";
export let textAtom = atom({
    original: text,
    text: "",
});

export const diffText = atom((get) => {
    const text = get(textAtom);
    return diff(text.original, text.text);
});

export const allowModifications = atom((get) => {
    // incase you want to stop modifications (e.g. when the user has finished typing)
    // const diff = get(diffText);
    // return !diff.end;
    return true;
});

export const isTyping = atom(true);
