"use client";

import {motion} from "framer-motion";

export default function TryAIAssistantButton() {
    return (
        <motion.div
            initial="rest"
            whileHover="hover"
            animate="rest"
            variants={{
                rest: {
                    boxShadow:
                        "6px 0px 18px rgba(30,34,41,0.22), 12px 0px 32px rgba(30,34,41,0.12)",
                    background:
                        "linear-gradient(90deg,#1F1F21 0%,#3E3D4C 34%,#1F1F21 51%,#3E3D4C 72%,#1F1F21 100%)",
                },

                hover: {
                    boxShadow:
                        "0px 8px 18px rgba(30,34,41,0.20), 0px 22px 40px rgba(30,34,41,0.12), 0px 44px 64px rgba(30,34,41,0.05)",
                    background:
                        "radial-gradient(585.23% 146.32% at 50% -450%, rgba(237,239,255,0.55) 0%, rgba(237,239,255,0) 100%), linear-gradient(104deg,#1F1F21 0%,#3E3D4C 34%,#1F1F21 51%,#3E3D4C 72%,#1F1F21 100%)",
                },

            }}
            transition={{
                duration: 0.45,
                ease: [0.22, 1, 0.36, 1],
            }}
            className="
    flex
    relative group cursor-pointer
    h-11 desktop:h-[53px]
    items-center justify-center
    px-[20px] py-[12px]
    font-sans font-medium
    text-[15px] tablet:text-[17px]
    rounded-full text-white
    border border-[#57565F]
    overflow-visible
    "
        >
            {/* Glow */}
            <motion.div
                variants={{
                    rest: {opacity: 0},
                    hover: {opacity: 1},
                }}
                transition={{duration: 0.35, ease: "easeOut"}}
                className="
    pointer-events-none
    absolute inset-[-28px]
    rounded-full
    bg-white/8
    blur-[40px]
    "
            />

            <span className="relative z-10 block">
        Try AI Assistant
    </span>
        </motion.div>
    );
}
