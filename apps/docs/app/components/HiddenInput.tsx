"use client";
import { allowModifications, textAtom, isTyping } from "@/data/state";
import { useAtom } from "jotai";
import { useEffect, useRef } from "react";

export default function HiddenInput() {
    let inputRef = useRef<HTMLInputElement>(null);
    let [text, setText] = useAtom(textAtom);
    const [allow] = useAtom(allowModifications);
    const [typing] = useAtom(isTyping);

    const handleKeyDown = () => {
        if (!inputRef || !inputRef.current || !typing) {
            return;
        }
        inputRef.current.focus();
        let val = inputRef.current.value;
        inputRef.current.value = "";
        inputRef.current.value = val;
    };

    useEffect(() => {
        document.addEventListener("keydown", handleKeyDown);

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        };
    });

    return (
        <input
            ref={inputRef}
            type="text"
            className="fixed -top-95 opacity-0"
            value={text.text}
            onChange={(e) => {
                if (allow) {
                    setText((text) => {
                        return { ...text, text: e.target.value };
                    });
                }
            }}
        />
    );
}
