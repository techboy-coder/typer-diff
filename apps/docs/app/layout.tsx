import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "typer-diff",
    description:
        "typer-diff is a library to diff two strings, useful for showing for typing games or for showing differences between two strings. It is a simple library that is easy to use and has no dependencies. It is also very fast and lightweight.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`bg-black text-white font-mono h-screen overscroll-none px-10`}>
                <nav className="flex justify-center items-center space-x-4 text-white/75 pt-20 md:pb-20 pb-10">
                    <a
                        href="https://github.com/techboy-coder/typer-diff"
                        target="_blank">
                        github
                    </a>
                    <a
                        href="https://npmjs.com/package/typer-diff"
                        target="_blank">
                        npm
                    </a>
                </nav>
                {children}
            </body>
        </html>
    );
}
