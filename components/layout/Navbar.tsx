"use client";

import { navItems, socialItems, NavItem } from "@/data/navigation";
import { NavIcon } from "@/components/ui/NavIcon";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

const Separator = () => (
    <div className="mx-1 h-8 w-px shrink-0 rounded-full bg-foreground/20 sm:mx-2 sm:h-10" />
);

export default function Navbar() {
    const renderItems = (items: NavItem[]) =>
        items.map((item) => (
            <NavIcon
                key={item.label}
                href={item.href}
                label={item.label}
                icon={item.icon}
            />
        ));

    return (
        <nav className="fixed bottom-4 left-1/2 z-50 max-w-[90vw] -translate-x-1/2 sm:bottom-6 sm:max-w-none">
            <div className="flex items-center md:gap-3 gap-2 md:px-4 px-3 py-2 rounded-2xl bg-dock backdrop-blur-md border border-white/10 shadow-2xl xs:overflow-visible overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                {renderItems(navItems)}
                <Separator />
                {renderItems(socialItems)}
                <Separator />
                <ThemeToggle />
            </div>
        </nav>
    );
}
