"use client";

import Link from "next/link";
import React, { useState } from "react";
import Logo from "./logo/logo";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import Container from "../ui/container";

export default function Navbar() {
    const pathname = usePathname();

    const isTextWhite = pathname === "/why-we-exist";

    return (
        <nav className="relative z-50">
            <Container
                className="py-4"
                childClassName={cn(
                    "flex flex-wrap justify-between items-center",
                    isTextWhite && "text-white"
                )}
            >
                <Logo />

                <div className="block lg:hidden">
                    <button className="flex items-center px-3 py-2 border border-black hover:border-black rounded">
                        <svg
                            className="w-3 h-3 fill-current"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <title>Menu</title>
                            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                        </svg>
                    </button>
                </div>

                <div className="block lg:flex lg:items-center gap-8 w-full lg:w-auto text-sm">
                    <LinkItem href="/" pathname={pathname}>
                        Home
                    </LinkItem>
                    <LinkItem href="/why-we-exist" pathname={pathname}>
                        Why We Exist
                    </LinkItem>
                    <LinkItem href="/bin-for-business" pathname={pathname}>
                        BIN For Business
                    </LinkItem>
                </div>
            </Container>
        </nav>
    );
}

function LinkItem({
    href,
    children,
    pathname,
}: {
    href: string;
    children: React.ReactNode;
    pathname: string;
}) {
    const [isHovered, setIsHovered] = useState(false);

    const isActive = pathname === href;

    return (
        <div
            className="flex flex-col justify-center items-center gap-1"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <Link href={href} className="block lg:inline-block mt-4 lg:mt-0">
                {children}
            </Link>
            <span
                className={cn(
                    "bg-primary w-full h-[3px] transition-transform duration-300 ease-in-out mx-auto rounded-full origin-center",
                    isHovered ? "scale-x-100" : "scale-x-0",
                    isActive && "scale-x-100"
                )}
            ></span>
        </div>
    );
}
