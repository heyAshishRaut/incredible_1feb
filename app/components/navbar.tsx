"use client";

import {useState} from "react";
import {motion} from "framer-motion";

const items = [
    {name: "About", id: "about"},
    {name: "Assistant", id: "assistant"},
    {name: "Models", id: "models"},
    {name: "Affiliates", id: "affiliates"},
    {name: "Blog", id: "blog"},
    {name: "Contact", id: "contact"},
]

const Navbar = () => {
    const [hoveredId, setHoveredId] = useState<string | null>(null);

    return (
        <div
            className="
        font-grotesk
        hidden

        py-[12px]
        px-[12px]
        laptop:px-[16px]
        desktop:py-[15px]
        desktop:px-[18px]

        laptop:flex
        items-center

        tablet:gap-x-[12px]
        laptop:gap-x-[20px]
        desktop:gap-x-[26px]

        text-[15px]
        desktop:text-[21px]
        laptop:text-[17px]

        bg-[#F5F5F5]

        border border-[#F0F0F0]

        rounded-[9px]
        desktop:rounded-[11px]
        ">
            {
                items.map((item) => {
                    const isHovered = hoveredId === item.id;
                    const isDimmed = hoveredId !== null && !isHovered;

                    return (
                        <motion.div
                            key={item.id}
                            onMouseEnter={() => setHoveredId(item.id)}
                            onMouseLeave={() => setHoveredId(null)}
                            animate={{
                                color: isHovered
                                    ? "#363636"
                                    : isDimmed
                                        ? "#9CA3AF"
                                        : "#363636",
                            }}
                            transition={{
                                duration: 0.25,
                                ease: "easeInOut",
                            }}
                            className="cursor-pointer select-none"
                        >
                            {item.name}
                        </motion.div>
                    )
                })
            }
        </div>
    )
}

export default Navbar
