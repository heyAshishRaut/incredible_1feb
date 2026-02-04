"use client"
import { useState } from "react"
import {AnimatePresence, motion} from "framer-motion"

const items = [
    {name: "About", id: "about"},
    {name: "Assistant", id: "assistant"},
    {name: "Models", id: "models"},
    {name: "Affiliates", id: "affiliates"},
    {name: "Blog", id: "blog"},
    {name: "Contact", id: "contact"},
]

const Hamburger = () => {
    const [open, setOpen] = useState(false)

    return (
        <div
            onClick={() => setOpen(!open)}
            className="
            laptop:hidden
            relative group cursor-pointer
            aspect-square h-[44px]
            flex items-center justify-center
            rounded-full text-white
            border border-[#57565F]
            bg-[linear-gradient(90deg,#1F1F21_0%,#3E3D4C_34%,#1F1F21_51%,#3E3D4C_72%,#1F1F21_100%)]
            shadow-[0_25px_45px_rgba(0,0,0,0.25)]
            overflow-visible">

            <AnimatePresence>
                {
                    open && (
                        <motion.div
                            initial = {{
                                opacity: 0,
                                filter: "blur(5px)",
                                y: -5
                            }}
                            animate = {{
                                opacity: 1,
                                filter: "blur(0px)",
                                y: 0
                            }}
                            transition = {{
                                duration: 0.3,
                                ease: "easeIn"
                            }}
                            className={`shadow-[0_12px_20px_rgba(0,0,0,0.12)] z-20 absolute bg-white text-[#666] top-16 right-0 flex flex-col gap-y-4 w-[200px] p-5 rounded-3xl`}>
                            {
                                items.map((e, index) => (
                                    <div key={index} className={`font-grotesk font-medium text-[14px] tablet:text-[17px] text-center text-[#464646]/86 leading-[150%] tracking-[-2%] flex pl-3 hover:text-black ${index === 0 ? "mt-3" : ""}`}>{e.name}</div>
                                ))
                            }

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
    text-[14px] tablet:text-[15px]
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
                        </motion.div>
                    )
                }
            </AnimatePresence>
            {/* glow */}
            <div className="
                pointer-events-none absolute inset-[-28px]
                rounded-full bg-white/8 blur-[40px]
                opacity-0 transition-opacity duration-300
                group-hover:opacity-100
                "/>

            {/* ICON */}
            <div className="relative w-5 h-5">
                {/* TOP */}
                <motion.span
                    className="absolute left-0 top-1 h-[2px] w-full bg-white rounded"
                    animate={{
                        rotate: open ? 45 : 0,
                        y: open ? 6 : 0,
                    }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                />

                {/* MIDDLE (1/3 width) */}
                <motion.span
                    className="absolute left-0 top-2.5 h-[2px] bg-white rounded"
                    style={{ width: "50%" }}
                    animate={{
                        opacity: open ? 0 : 1,
                    }}
                    transition={{ duration: 0.2 }}
                />

                {/* BOTTOM */}
                <motion.span
                    className="absolute left-0 top-4 h-[2px] w-full bg-white rounded"
                    animate={{
                        rotate: open ? -45 : 0,
                        y: open ? -6 : 0,
                    }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                />
            </div>
        </div>
    )
}

export default Hamburger
