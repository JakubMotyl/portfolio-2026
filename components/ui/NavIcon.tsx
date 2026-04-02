import Link from "next/link";
import { IconType } from "react-icons";

export interface NavIconProps {
    href?: string;
    label: string;
    onClick?: () => void;
    icon: IconType;
}

export function NavIcon({ href, label, onClick, icon: Icon }: NavIconProps) {
    const content = (
        <div
            onClick={onClick}
            className="flex items-center shrink-0 justify-center md:w-11 w-10 aspect-square rounded-full bg-muted relative group transition-all duration-300 ease-out hover:scale-125 hover:mx-2 hover:-translate-y-2 hover:bg-accent cursor-pointer"
        >
            <span className="absolute left-1/2 -translate-x-1/2 xs:block hidden -top-10 md:text-xs text-[0.65rem] bg-bg text-foreground border border-muted px-2 py-1 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none rounded-md shadow-md font-medium">
                {label}
            </span>
            <Icon className="h-1/2 w-1/2 text-foreground transition-colors duration-300 group-hover:text-white" />
        </div>
    );

    return href ? (
        <Link
            href={href}
            {...(href.startsWith("http")
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
        >
            {content}
        </Link>
    ) : (
        content
    );
}
