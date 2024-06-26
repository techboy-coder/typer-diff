// sum.test.js
import { expect, test } from "vitest";
import { diff } from ".";

test("Test diff", () => {
    let d = diff(
        "Building mr concerns servants in he outlived am breeding.",
        "Building mr conc srvvants i he o am breed."
    );
    let expected = {
        diff: [
            { value: "B", type: "correct" },
            { value: "u", type: "correct" },
            { value: "i", type: "correct" },
            { value: "l", type: "correct" },
            { value: "d", type: "correct" },
            { value: "i", type: "correct" },
            { value: "n", type: "correct" },
            { value: "g", type: "correct" },
            { value: " ", type: "spacer" },
            { value: "m", type: "correct" },
            { value: "r", type: "correct" },
            { value: " ", type: "spacer" },
            { value: "c", type: "correct" },
            { value: "o", type: "correct" },
            { value: "n", type: "correct" },
            { value: "c", type: "correct" },
            { value: "e", type: "missing" },
            { value: "r", type: "missing" },
            { value: "n", type: "missing" },
            { value: "s", type: "missing" },
            { value: " ", type: "spacer" },
            { value: "s", type: "correct" },
            { value: "r", type: "wrong" },
            { value: "v", type: "wrong" },
            { value: "v", type: "correct" },
            { value: "a", type: "correct" },
            { value: "n", type: "correct" },
            { value: "t", type: "correct" },
            { value: "s", type: "correct" },
            { value: " ", type: "spacer" },
            { value: "i", type: "correct" },
            { value: "n", type: "missing" },
            { value: " ", type: "spacer" },
            { value: "h", type: "correct" },
            { value: "e", type: "correct" },
            { value: " ", type: "spacer" },
            { value: "o", type: "correct" },
            { value: "u", type: "missing" },
            { value: "t", type: "missing" },
            { value: "l", type: "missing" },
            { value: "i", type: "missing" },
            { value: "v", type: "missing" },
            { value: "e", type: "missing" },
            { value: "d", type: "missing" },
            { value: " ", type: "spacer" },
            { value: "a", type: "correct" },
            { value: "m", type: "correct" },
            { value: " ", type: "spacer" },
            { value: "b", type: "correct" },
            { value: "r", type: "correct" },
            { value: "e", type: "correct" },
            { value: "e", type: "correct" },
            { value: "d", type: "correct" },
            { value: ".", type: "wrong" },
            { value: "n", type: "untouched" },
            { value: "g", type: "untouched" },
            { value: ".", type: "untouched" },
            { value: " ", type: "spacer" },
        ],
        end: false,
    };
    expect(d).toStrictEqual(expected);
});
