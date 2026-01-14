"use client";

import { useTheme } from "next-themes";
import { HugeiconsIcon } from '@hugeicons/react';
import { Moon02Icon, Sun03Icon } from "@hugeicons/core-free-icons";
import { Button } from "./ui/button";

export function ThemeToggler() {
    const { theme, setTheme } = useTheme();
    const isDark = theme === "dark";

    return (
        <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(isDark ? "light" : "dark")}
            aria-label="Toggle theme"
        >
            <HugeiconsIcon
                icon={Sun03Icon}
                size={12}
                color="currentColor"
                strokeWidth={1.5}
                className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90"
            />
            <HugeiconsIcon
                icon={Moon02Icon}
                size={12}
                color="currentColor"
                strokeWidth={1.5}
                className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0"
            />
        </Button>
    );
}