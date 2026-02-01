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

                            <div className="flex laptop:hidden relative group cursor-pointer h-11 items-center justify-center tablet:px-[20px] tablet:py-[12px] rounded-full text-white border border-[#57565F] bg-[linear-gradient(90deg,#1F1F21_0%,#3E3D4C_34%,#1F1F21_51%,#3E3D4C_72%,#1F1F21_100%)] shadow-[0_25px_45px_rgba(0,0,0,0.25)] overflow-visible">
                                <div className="pointer-events-none absolute inset-[-28px] rounded-full bg-white/8 blur-[40px] opacity-0 transition-opacity duration-300 group-hover:opacity-100"/>

                                <div className="relative z-10 flex items-center justify-center font-sans font-medium text-[12px] tablet:text-[15px] laptop:text-[17px] leading-[19.6%]">
                                    Try AI Assistant
                                </div>
                            </div>
                        </motion.div>
                    )
                }
            </AnimatePresence>
            {/* glow */}
            <div
                className="
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
