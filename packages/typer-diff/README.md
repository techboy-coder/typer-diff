# Typer Diff

![Typer Diff Demo](https://raw.githubusercontent.com/techboy-coder/typer-diff/main/assets/demo.png?token=GHSAT0AAAAAACSUZ6AC33WMWGPI4HJ5X47KZTYIUYQ)

`type-diff` is a library to diff two strings, useful for showing for typing games (like [monkeytype](https://monkeytype.com/)) or for showing differences between two strings. It is a simple library that is easy to use and has no dependencies. It is also very fast and lightweight.

## Usage

**Usage:**

```typescript
import { diff } from "typer-diff";

// ...
return diff(text.original, text.text);
// ...
```

**Types:**

```typescript
type DiffItem = {
    value: string;
    type: "correct" | "extra" | "missing" | "wrong" | "untouched" | "spacer";
};
type DiffResult = {
    diff: DiffItem[];
    end: boolean;
};
declare const diff: (originalText: string, typedText: string) => DiffResult;

export { type DiffItem, type DiffResult, diff };
```