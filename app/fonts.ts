import localFont from "next/font/local";

export const bdoGrotesk = localFont({
    src: [
        {
            path: "../public/fonts/bdo-grotesk/BDOGrotesk-Regular.otf",
            weight: "400",
            style: "normal",
        },
        {
            path: "../public/fonts/bdo-grotesk/BDOGrotesk-Medium.otf",
            weight: "500",
            style: "normal",
        },
        {
            path: "../public/fonts/bdo-grotesk/BDOGrotesk-Bold.otf",
            weight: "700",
            style: "normal",
        },
    ],
    variable: "--font-bdo-grotesk",
    display: "swap",
})
