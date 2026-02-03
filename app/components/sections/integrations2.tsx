"use client"
import {useState} from "react"
import {AnimatePresence, motion} from "framer-motion"
import container from "@/public/Container.webp"

import one from "@/public/integrations2/one.webp"
import two from "@/public/integrations2/two.webp"
import three from "@/public/integrations2/three.webp"
import four from "@/public/integrations2/four.webp"
import Image from "next/image"
import integrationSVG from "@/public/sectionIcons/integrationsSVG.webp"

const items = [
    {
        name: "Text Generations",
        image: (
            <div
                className="
                relative w-full h-full
                aspect-[4/3]
                flex items-center justify-center
            "
            >
                <Image
                    src={one}
                    alt="Text Generations"
                    fill
                    className="object-contain p-1"
                    sizes="(max-width: 50.625rem) 100vw, 400px"
                />
            </div>
        )
    },
    {
        name: "Web Search",
        image: (
            <div className="w-full h-full flex items-center justify-center">
                <Image
                    src={two}
                    alt="Web Search"
                    width={337}
                    height={218}
                    className="w-full max-w-[337px] h-auto"
                    sizes="(max-width: 50.625rem) 90vw, 337px"
                />
            </div>
        )
    },
    {
        name: "Deep Research",
        image: (
            <div className="w-full flex items-center justify-center">
                <div
                    className="
          relative w-full
          max-w-[368px]
          aspect-[368/476]
        "
                >
                    <Image
                        src={three}
                        alt="Deep Research"
                        fill
                        className="object-contain object-bottom"
                        sizes="(max-width: 50.625rem) 90vw, 368px"
                    />
                </div>
            </div>
        )
    },
    {
        name: "Image Generation",
        image: (
            <div className="w-full h-full flex items-center justify-center">
                <div className="relative w-full aspect-[4/3]">
                    <Image
                        src={four}
                        alt="Image Generation"
                        fill
                        className="object-contain p-4"
                        sizes="(max-width: 50.625rem) 100vw, 400px"
                    />
                </div>
            </div>
        )
    },
    {
        name: "Video Generation",
        image: (
            <div className="w-full h-full flex items-center justify-center">
                <Image
                    src={two}
                    alt="Web Search"
                    width={337}
                    height={218}
                    className="w-full max-w-[337px] h-auto"
                    sizes="(max-width: 50.625rem) 90vw, 337px"
                />
            </div>
        )
    },
    {
        name: "OCR + File Intelligence",
        image: (
            <div className="w-full flex items-center justify-center">
                <div
                    className="
                    relative w-full
                    max-w-[368px]
                    aspect-[368/476]
                    "
                >
                    <Image
                        src={three}
                        alt="Deep Research"
                        fill
                        className="object-contain object-bottom"
                        sizes="(max-width: 50.625rem) 90vw, 368px"
                    />
                </div>
            </div>
        )
    },
    {
        name: "Agents with Tools",
        image: (
            <div className="w-full h-full flex items-center justify-center">
                <div className="relative w-full aspect-[4/3]">
                    <Image
                        src={four}
                        alt="Image Generation"
                        fill
                        className="object-contain p-4"
                        sizes="(max-width: 50.625rem) 100vw, 400px"
                    />
                </div>
            </div>
        )
    },
    {
        name: "Agents with MCP",
        image: (
            <div className="w-full h-full flex items-center justify-center">
                <Image
                    src={two}
                    alt="Web Search"
                    width={337}
                    height={218}
                    className="w-full max-w-[337px] h-auto"
                    sizes="(max-width: 50.625rem) 90vw, 337px"
                />
            </div>
        )
    },
    {
        name: "Multi-step Workflows",
        image: (
            <div className="w-full flex items-center justify-center">
                <div
                    className="
                    relative w-full
                    max-w-[368px]
                    aspect-[368/476]
                    "
                >
                    <Image
                        src={three}
                        alt="Deep Research"
                        fill
                        className="object-contain object-bottom"
                        sizes="(max-width: 50.625rem) 90vw, 368px"
                    />
                </div>
            </div>
        )
    }
]

const Integrations2 = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(0)

    return (
        <div className={`w-full flex flex-col gap-y-20 py-[40px] tablet:py-20 laptop:py-25 desktop:py-[120px] px-[20px] tablet:px-[30px] laptop:px-[50px] desktop:px-[70px]`}>
            <div className={`w-full h-full flex flex-col items-center gap-y-14 tablet:gap-y-20 desktop:gap-y-[95px]`}>

                <div
                    className={`w-full flex flex-col items-center gap-y-[24px] desktop:gap-y-[28px] max-w-[330px] tablet:max-w-[430px] laptop:max-w-[525px] desktop:max-w-[650px]`}>
                    <Image
                        src={integrationSVG}
                        alt="Small UI image"
                        width={130}
                        height={40}
                        className="w-[130px] h-auto"
                        quality={90}
                        draggable={false}
                    />

                    <div className={`flex flex-col gap-y-[14px]`}>
                        <div
                            className={`font-grotesk font-medium text-[20px] tablet:text-[26px] laptop:text-[36px] desktop:text-[43px] leading-[128%] tracking-[-2%] text-center`}>Build
                            with agentic intelligence — in minutes, not months.
                        </div>

                        <div
                            className={`font-grotesk text-[#666666] text-center text-[14px] tablet:text-[16px] desktop:text-[19px] leading-[150%] tracking-[-2%]`}>
                            A production-ready API with reliable function calling, deep reasoning, high throughput, and
                            affordable token pricing.
                        </div>
                    </div>
                </div>

                <div className={`w-full max-w-[450px] tablet:max-w-[816px] desktop:max-w-[960px] flex flex-col items-center justify-center tablet:items-start gap-y-[24px] tablet:gap-y-0 tablet:flex-row tablet:gap-x-[24px] laptop:gap-x-[32px]`}>
                    <div className="w-full tablet:max-w-[224px] desktop:max-w-[266px] flex flex-col gap-y-[2px] p-1 bg-[#D5D5D5]/30 text-[#666] rounded-[16px]">
                        {items.map((e, index) => {
                            const isActive = activeIndex === index;

                            return (
                                <motion.div
                                    key={index}
                                    onClick={() => setActiveIndex(index)}
                                    className={`
                                    cursor-pointer select-none
                                    font-grotesk text-center text-[14px] tablet:text-[15px] desktop:text-[17px]
                                    px-[14px] py-[12px]
                                    rounded-[12px]
                                    overflow-hidden

                                    border border-transparent   
                                    transition-[background-color,color,box-shadow,border-color]
                                    duration-200

                                    ${
                                        isActive
                                            ? ` bg-white border-[#18181B]/6 text-black shadow-[0_0_0_1px_rgba(14,63,126,0.06),0_1px_1px_-0.5px_rgba(42,51,70,0.03),0_3px_3px_-1.5px_rgba(42,51,70,0.05),0_5px_5px_-2.5px_rgba(42,51,70,0.03),0_16px_16px_-8px_rgba(42,51,70,0.04)]` : ``
                                    }`}
                                >
                                    {e.name}
                                </motion.div>
                            );
                        })}
                    </div>


                    <div style={{ backgroundImage: `url(${container.src})` }}
                         className="
                        relative w-full
                        max-w-full
                        tablet:max-w-[540px]
                        laptop:max-w-[560px]
                        desktop:max-w-[603px]
                        aspect-[560/508]

                        bg-cover bg-center
                        rounded-[34px]
                        overflow-hidden
                    "
                    >
                        <AnimatePresence mode="wait">
                            {activeIndex !== null && (
                                <motion.div
                                    key={activeIndex}
                                    initial={{
                                        opacity: 0,
                                        filter: "blur(6px)",
                                        y: 6,
                                    }}
                                    animate={{
                                        opacity: 1,
                                        filter: "blur(0px)",
                                        y: 0,
                                    }}
                                    exit={{
                                        opacity: 0,
                                        filter: "blur(6px)",
                                        y: -6,
                                    }}
                                    transition={{
                                        duration: 0.2,
                                        ease: "easeOut",
                                    }}
                                    className="relative h-full w-full"
                                >
                                    {items[activeIndex].image}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Integrations2