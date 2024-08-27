import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { voska, voskaOutline } from "@/lib/font";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Brands In Nature",
    description: "Brands In Nature",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${inter.className} ${voska.variable} ${voskaOutline.variable}`}
            >
                {children}
            </body>
        </html>
    );
}
