"use client";

import { useEffect, useState } from "react";
import { HiSun, HiMoon } from "react-icons/hi";
import { NavIcon } from "./NavIcon";

export function ThemeToggle() {
    const [isLight, setIsLight] = useState(false);

    useEffect(() => {
        setIsLight(document.documentElement.classList.contains("light"));
    }, []);

    const toggleTheme = () => {
        document.documentElement.classList.toggle("light");
        setIsLight(!isLight);
    };

    return (
        <NavIcon
            label="Toggle Theme"
            onClick={toggleTheme}
            icon={isLight ? HiMoon : HiSun}
        />
    );
}
