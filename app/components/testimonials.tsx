"use client"
import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import avatar from "@/public/avatar.png"
import Image from "next/image"

const DURATION = 5

const testimonials = [
    {
        text: "Using Incredible.one has been a game-changer. It helps me organize and execute tasks faster than ever. It's like having a super-intelligent co-worker who never misses a beat.",
        author: "Lia Michael",
        avatar: avatar
    },
    {
        text: "Incredible.one transformed the way our team works. Decisions are faster, clearer, and smarter.",
        author: "Alex Johnson",
        avatar: avatar
    },
    {
        text: "The accuracy and speed are unmatched. It feels like the future of productivity.",
        author: "Sarah Lee",
        avatar: avatar
    },
]

export default function Testimonial() {
    const [index, setIndex] = useState(0)

    useEffect(() => {
        const id = setTimeout(() => {
            setIndex((prev) => (prev + 1) % testimonials.length)
        }, DURATION * 1000)

        return () => clearTimeout(id);
    }, [index])

    const active = testimonials[index]

    return (
        <div className="w-full max-w-[366px] font-grotesk">

            {/* INDICATORS */}
            <div className="flex gap-x-2 mb-6">
                {testimonials.map((_, i) => (
                    <div key={i} onClick={() => setIndex(i)} className="cursor-pointer relative w-6 h-[3px] bg-white/20 rounded-full overflow-hidden">
                        {i === index && (
                            <motion.div
                                key={index}
                                initial={{ width: "0%" }}
                                animate={{ width: "100%" }}
                                transition={{ duration: DURATION, ease: "linear" }}
                                className="absolute left-0 top-0 h-full bg-white"
                            />
                        )}
                    </div>
                ))}
            </div>

            {/* CONTENT */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className={`h-[145px] flex flex-col gap-y-[17px]`}
                >
                    <p className="text-[#B2B2B2] text-[14px] font-grotesk tablet:text-[16px] leading-[150%] tracking-[-2%]">
                        {active.text}
                    </p>

                    <div className="flex items-center gap-x-3">
                        <Image src={avatar} height={32} width={32} alt={" "} className="w-8 h-8 rounded-full object-cover"/>
                        <span className="text-white font-grotesk text-[15px] tablet:text-[16px] leading-[150%] tracking-[-2%]">
              {active.author}
            </span>
                    </div>
                </motion.div>
            </AnimatePresence>
        </div>
    )
}
