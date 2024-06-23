import React from "react";

export const useClickInside = (
    ref: React.RefObject<HTMLElement>,
    callback: () => void
) => {
    const handleClick = (e: MouseEvent) => {
        if (ref.current && ref.current.contains(e.target as Node)) {
            callback();
        }
    };
    React.useEffect(() => {
        document.addEventListener("click", handleClick);
        return () => {
            document.removeEventListener("click", handleClick);
        };
    });
};

export const useClickOutside = (
    ref: React.RefObject<HTMLElement>,
    callback: () => void
) => {
    const handleClick = (e: MouseEvent) => {
        if (ref.current && !ref.current.contains(e.target as Node)) {
            callback();
        }
    };
    React.useEffect(() => {
        document.addEventListener("click", handleClick);
        return () => {
            document.removeEventListener("click", handleClick);
        };
    });
};
