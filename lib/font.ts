import localFont from "next/font/local";

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

export { voska, voskaOutline };
