"use client"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import useCase from "@/public/useCases.webp"
import useCaseSVG from "@/public/sectionIcons/useCasesSVG.webp"
import Image from "next/image"

const accordionItems = [
    {
        title: "Sales",
        description:
            "Incredible’s models can pull live data from HubSpot, spreadsheets, and hundreds of other integrations, and create graphs.",
        tags: ["Graphs", "Spreadsheets", "Reports"],
    },
    {
        title: "Marketer",
        description:
            "Track campaigns, conversions, and attribution across channels in real time.",
        tags: ["Ads", "SEO", "Campaigns"],
    },
    {
        title: "OPS/Admin",
        description:
            "Monitor revenue, expenses, and forecasts with live dashboards.",
        tags: ["Revenue", "Forecast", "Reports"],
    },
    {
        title: "HR & CS",
        description:
            "Unify internal workflows, metrics, and operational insights.",
        tags: ["Workflows", "KPIs", "Automation"],
    },
]

const UseCases = () => {
    const DURATION = 5
    const [activeIndex, setActiveIndex] = useState<number | null>(0)

    return (
        <div className={`w-full flex flex-col py-[60px] tablet:py-20 laptop:py-25 desktop:py-[120px] px-[20px] tablet:px-[30px] laptop:px-[50px] desktop:px-[70px]`}>
            <div className={`w-full h-full flex flex-col items-center gap-y-10 tablet:gap-y-20 desktop:gap-y-[95px]`}>
                <div className={`w-[90%] flex flex-col items-center gap-y-[24px] desktop:gap-y-[28px] max-w-[400px] tablet:max-w-[520px] laptop:max-w-[670px] desktop:max-w-[700px]`}>
                    <Image
                        src={useCaseSVG}
                        alt="Small UI image"
                        width={118}
                        height={40}
                        className="w-[118px] h-auto"
                        quality={90}
                        draggable={false}
                    />

                    <div className={`flex flex-col gap-y-[14px]`}>
                        <div
                            className={`font-grotesk font-medium text-[20px] tablet:text-[26px] laptop:text-[36px] desktop:text-[43px] leading-[128%] tracking-[-2%] text-center`}>The
                            Assistant That Actually Does the Work Across All Your Tools.
                        </div>

                        <div
                            className={`font-grotesk text-[#666666] text-center text-[14px] tablet:text-[16px] desktop:text-[19px] leading-[150%] tracking-[-2%]`}>The
                            Incredible Assistant connects to your tools (Gmail, Notion, Sheets, HubSpot, Slack,
                            Calendar, and more) and performs real tasks — not just chats. It drafts, summarizes,
                            researches, updates, files, organizes, schedules, posts, sends, and executes.
                        </div>
                    </div>
                </div>

                <div className={`w-full laptop:w-[1126px] laptop:h-[564px] flex flex-col items-center gap-y-[30px] tablet:gap-y-[40px] laptop:gap-y-0 laptop:flex-row laptop:gap-x-[50px]`}>
                    <div className="w-full max-w-[450px] tablet:max-w-[640px] laptop:max-w-[436px] flex-1 flex items-center">
                        <div className="w-full flex flex-col gap-y-3 tablet:gap-y-5">

                            {accordionItems.map((item, index) => {
                                const open = activeIndex === index

                                return (
                                    <div key={index} className="w-full">
                                        <motion.div
                                            layout
                                            transition={{ duration: 0.25, ease: "easeInOut" }}
                                            onClick={() => setActiveIndex(open ? null : index)}
                                            className={`h-12 w-full flex justify-between items-center cursor-pointer ${!open ? "pb-3 tablet:pb-4 border-b border-[#E0E0E0]" : "pb-0 border-none"}`}
                                        >
                                            <div className="font-grotesk text-[17px] tablet:text-[24px] leading-[118%] tracking-[-2%]">
                                                {item.title}
                                            </div>

                                            <motion.div
                                                animate={{ rotate: open ? 180 : 0 }}
                                                transition={{ duration: 0.25 }}
                                                className={`h-7 tablet:h-8 w-7 tablet:w-8 rounded-full ${!open ? "bg-[#F3F2F8]" : "bg-[#272727]"} flex items-center justify-center`}
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className={`h-[18px] aspect-square tablet:h-[22px]`}
                                                    viewBox="0 -960 960 960"

                                                    fill={open ? "#FFF" : "#000"}
                                                >
                                                    <path d="M440-800v487L216-537l-56 57 320 320 320-320-56-57-224 224v-487h-80Z" />
                                                </svg>
                                            </motion.div>
                                        </motion.div>

                                        <AnimatePresence initial={false}>
                                            {open && (
                                                <motion.div
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: "auto", opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    transition={{ duration: 0.3, ease: "easeInOut" }}
                                                    className="overflow-hidden"
                                                >
                                                    <div className="w-full flex flex-col gap-y-[25px] pt-5">

                                                        <div className="text-[14px] tablet:text-[16px] font-grotesk leading-[150%] tracking-[-2%] text-[#666]">
                                                            {item.description}
                                                        </div>

                                                        <div className="flex items-center gap-x-2 flex-wrap">
                                                            {item.tags.map((tag, i) => (
                                                                <div
                                                                    key={i}
                                                                    className="rounded-[10px] p-[7px] tablet:p-[10px] bg-[#F9F9F9] text-[#666] border border-[#EDEDED] font-grotesk text-[13px] tablet:text-[16px] leading-[150%] tracking-[-2%]"
                                                                >
                                                                    {tag}
                                                                </div>
                                                            ))}
                                                        </div>

                                                        <div className="relative w-full h-[1px] bg-[#E0E0E0] overflow-hidden">
                                                            {open && (
                                                                <motion.div
                                                                    initial={{ width: "0%" }}
                                                                    animate={{ width: "100%" }}
                                                                    transition={{ duration: DURATION, ease: "linear" }}
                                                                    onAnimationComplete={() => {
                                                                        if (index === accordionItems.length - 1) {
                                                                            setActiveIndex(0);
                                                                        } else {
                                                                            setActiveIndex(index + 1);
                                                                        }
                                                                    }}
                                                                    className="absolute left-0 top-0 h-full bg-black"
                                                                />
                                                            )}
                                                        </div>
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                )
                            })}
                        </div>
                    </div>

                    <div
                        className="
                    relative shrink-0
                    w-full max-w-[450px]
                    tablet:max-w-[640px]
                    laptop:max-w-[640px]
                    aspect-[640/564]
                    "
                    >
                        <Image
                            src={useCase}
                            alt="UI illustration"
                            fill
                            className="object-cover tablet:object-contain"
                            sizes="
                            (max-width: 50.625rem) 100vw,
                            (max-width: 75rem) 640px,
                            760px
                            "
                            priority
                            quality={85}
                            draggable={false}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UseCases