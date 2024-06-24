"use client";
import { cn } from "@/lib/utils";
import { useAtom } from "jotai";
import { useRef } from "react";
import { useClickInside, useClickOutside } from "@/app/hooks/hooks";
import { diffText, isTyping } from "@/data/state";

export default function DiffText() {
    const [diff] = useAtom(diffText);
    const [typing, setTyping] = useAtom(isTyping);
    const ref = useRef<HTMLDivElement>(null);
    useClickInside(ref, () => {
        document.getElementById("hidden-input")?.focus();
        setTyping(true);
    });
    useClickOutside(ref, () => {
        setTyping(false);
    });
    return (
        <div
            className="md:text-3xl text-white/50 font-mono leading-relaxed tracking-wide overflow-x-hidden scroll mx-auto max-w-screen-lg"
            ref={ref}>
            {diff.diff.map((item, index) => (
                <span
                    key={index}
                    className={cn(
                        item.type === "correct" && "text-white",
                        item.type === "extra" &&
                            "text-red-500/50 underline decoration-red-500/50 decoration-wavy",
                        item.type === "missing" &&
                            "text-white/50 underline decoration-red-500 decoration-wavy",
                        item.type === "wrong" && "text-red-500"
                    )}>
                    {item.value}
                </span>
            ))}
        </div>
    );
}
