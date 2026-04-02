import { IconType } from "react-icons";
import { HiHome, HiUser, HiCode, HiMail, HiFolder } from "react-icons/hi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export interface NavItem {
    label: string;
    href: string;
    icon: IconType;
}

export const navItems: NavItem[] = [
    { label: "Home", href: "/", icon: HiHome },
    { label: "About", href: "/#about", icon: HiUser },
    { label: "Projects", href: "/#projects", icon: HiFolder },
    { label: "Skills", href: "/#skills", icon: HiCode },
    { label: "Contact", href: "/#contact", icon: HiMail },
];

export const socialItems: NavItem[] = [
    { label: "GitHub", href: "https://github.com/JakubMotyl", icon: FaGithub },
    {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/jakubmotyl",
        icon: FaLinkedin,
    },
];
