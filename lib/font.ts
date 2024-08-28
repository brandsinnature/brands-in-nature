import localFont from "next/font/local";
import { Caveat, Inter } from "next/font/google";

const voskaOutline = localFont({
    src: [
        {
            path: "./fonts/VoskaOutline.otf",
            weight: "400",
            style: "normal",
        },
    ],
    display: "swap",
    variable: "--font-voska-outline",
});

const voska = localFont({
    src: [
        {
            path: "./fonts/Voska.otf",
            weight: "400",
            style: "normal",
        },
        {
            path: "./fonts/VoskaBold.otf",
            weight: "700",
            style: "bold",
        },
    ],
    display: "swap",
    variable: "--font-voska",
});

const caveat = Caveat({ subsets: ["latin"] });

const inter = Inter({ subsets: ["latin"] });

export { voska, voskaOutline, caveat, inter };
