"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import Logo from "./logo/logo";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import Container from "@/components/ui/container";
import { HiMenuAlt3 } from "react-icons/hi";
import { Button } from "@/components/ui/button";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";

export default function Navbar() {
    const pathname = usePathname();
    const [open, setOpen] = useState(false);

    const isTextWhite = pathname === "/why-we-exist";

    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <nav
            className={cn(
                "top-0 z-50 sticky transition duration-300 ease-in-out",
                scrollY > 0 && "bg-white shadow-md"
            )}
        >
            <Container
                className="py-2 lg:py-4"
                childClassName={cn(
                    "flex flex-wrap justify-between items-center",
                    scrollY === 0 && isTextWhite && "text-white"
                )}
            >
                <Logo />

                <div className="block lg:hidden">
                    <Drawer open={open} onOpenChange={setOpen}>
                        <DrawerTrigger asChild>
                            <Button variant={"link"} className="px-0">
                                <HiMenuAlt3 size={28} />
                            </Button>
                        </DrawerTrigger>
                        <DrawerContent>
                            <div className="space-y-2 pt-6 pb-10">
                                <Links pathname={pathname} setOpen={setOpen} />
                            </div>
                        </DrawerContent>
                    </Drawer>
                </div>

                <div className="lg:flex items-center gap-8 hidden text-sm">
                    <Links pathname={pathname} setOpen={setOpen} />
                </div>
            </Container>
        </nav>
    );
}

function Links({
    pathname,
    setOpen,
}: {
    pathname: string;
    setOpen: (status: boolean) => void;
}) {
    return (
        <>
            <LinkItem href="/" pathname={pathname} setOpen={setOpen}>
                Home
            </LinkItem>
            <LinkItem
                href="/why-we-exist"
                pathname={pathname}
                setOpen={setOpen}
            >
                Why We Exist
            </LinkItem>
            <LinkItem
                href="/bin-for-business"
                pathname={pathname}
                setOpen={setOpen}
            >
                BIN For Business
            </LinkItem>
        </>
    );
}

function LinkItem({
    href,
    children,
    pathname,
    setOpen,
}: {
    href: string;
    children: React.ReactNode;
    pathname: string;
    setOpen: (status: boolean) => void;
}) {
    const [isHovered, setIsHovered] = useState(false);

    const isActive = pathname === href;

    return (
        <div
            className="flex flex-col justify-center items-center gap-1"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <Link
                href={href}
                className="block lg:inline-block mt-4 lg:mt-0"
                onClick={() => setOpen(false)}
            >
                {children}
            </Link>
            <span
                className={cn(
                    "bg-primary w-20 lg:w-full h-[3px] transition-transform duration-300 ease-in-out mx-auto rounded-full origin-center",
                    isHovered ? "scale-x-100" : "scale-x-0",
                    isActive && "scale-x-100"
                )}
            ></span>
        </div>
    );
}
