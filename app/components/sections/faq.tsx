"use client"
import {useState} from "react"
import {motion, AnimatePresence} from "framer-motion"
import faqSVG from "@/public/sectionIcons/faqSVG.webp"
import Image from "next/image"

const items = [
    {
        question: "What is Incredible?",
        answer: "Incredible's models can create many types of content. From presentations, to code, social media posts to spreadsheets. Generate professional materials and share them across your team or publish them directly to your platforms."
    },
    {
        question: "What makes Incredible different from other AI Assistants?",
        answer: "Incredible's models can create many types of content. From presentations, to code, social media posts to spreadsheets. Generate professional materials and share them across your team or publish them directly to your platforms."
    },
    {
        question: "Is my data secure?",
        answer: "Incredible's models can create many types of content. From presentations, to code, social media posts to spreadsheets. Generate professional materials and share them across your team or publish them directly to your platforms."
    },
    {
        question: "How do you prevent hallucinations?",
        answer: "Incredible's models can create many types of content. From presentations, to code, social media posts to spreadsheets. Generate professional materials and share them across your team or publish them directly to your platforms."
    },
    {
        question: "Can Incredible take multiple actions at once?",
        answer: "Incredible's models can create many types of content. From presentations, to code, social media posts to spreadsheets. Generate professional materials and share them across your team or publish them directly to your platforms."
    },
    {
        question: "What kind of task can Incredible handle?",
        answer: "Incredible's models can create many types of content. From presentations, to code, social media posts to spreadsheets. Generate professional materials and share them across your team or publish them directly to your platforms."
    },
    {
        question: "Can Incredible work with my existing data?",
        answer: "Incredible's models can create many types of content. From presentations, to code, social media posts to spreadsheets. Generate professional materials and share them across your team or publish them directly to your platforms."
    },
    {
        question: "Is there a free trial?",
        answer: "Incredible's models can create many types of content. From presentations, to code, social media posts to spreadsheets. Generate professional materials and share them across your team or publish them directly to your platforms."
    },
    {
        question: "How do I get help?",
        answer: "Incredible's models can create many types of content. From presentations, to code, social media posts to spreadsheets. Generate professional materials and share them across your team or publish them directly to your platforms."
    },
    {
        question: "What apps and tools are integrated?",
        answer: "Incredible's models can create many types of content. From presentations, to code, social media posts to spreadsheets. Generate professional materials and share them across your team or publish them directly to your platforms."
    }
]

const Faq = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0)

    const handleToggle = (index: number) => {
        setOpenIndex(prev => (prev === index ? null : index))
    }

    return (
        <div className={`w-full p-[20px] tablet:p-[40px] laptop:p-[100px] desktop:p-[120px]`}>
            <div
                className={`w-full flex flex-col gap-y-[20px] items-center tablet:gap-y-[40px] laptop:gap-y-[60px] desktop:gap-y-[70px]`}>
                <div className={`w-full tablet:max-w-[550px] flex flex-col gap-y-[16px] items-center p-[10px]`}>
                    <Image
                        src={faqSVG}
                        alt="Small UI image"
                        width={72}
                        height={33}
                        className="w-[72px] h-auto"
                        quality={90}
                        draggable={false}
                    />

                    <div
                        className={`font-grotesk font-medium text-[22px] tablet:text-[26px] laptop:text-[36px] leading-[128%] tracking-[-2%] desktop-[43px]`}>Frequently
                        Asked Questions
                    </div>
                </div>

                <div className="w-full flex flex-col items-center gap-y-[14px]">
                    {items.map((e, index) => {
                        const isOpen = openIndex === index

                        return (
                            <div
                                key={index}
                                onClick={() => handleToggle(index)}
                                className="cursor-pointer border-b-[1px] border-dashed border-[#666]/50 w-full max-w-[450px] gap-x-[20px] tablet:max-w-[600px] desktop:max-w-[880px] laptop:max-w-[743px] flex justify-between items-start p-[10px] tablet:p-[20px]"
                            >
                                <div className="select-none w-full tablet:w-[591px] flex flex-col gap-y-5">
                                    <div
                                        className="font-grotesk font-medium leading-[120%] tracking-[-1%] text-[14px] tablet:text-[18px] desktop:text-[22px]">
                                        {e.question}
                                    </div>

                                    <AnimatePresence initial={false}>
                                        {isOpen && (
                                            <motion.div
                                                initial={{height: 0, opacity: 0}}
                                                animate={{height: "auto", opacity: 1}}
                                                exit={{height: 0, opacity: 0}}
                                                transition={{duration: 0.3, ease: "easeOut"}}
                                                className="overflow-hidden font-grotesk text-[#666] leading-[150%] tracking-[-2%] text-[13px] tablet:text-[16px] desktop:text-[19px]"
                                            >
                                                {e.answer}
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>

                                <div className={`min-w-9 min-h-9`}>
                                    <motion.button
                                        animate={{
                                            width: isOpen ? 36 : 32,
                                            height: isOpen ? 36 : 32,
                                        }}
                                        transition={{duration: 0.2, ease: "easeOut"}}
                                        className="cursor-pointer relative rounded-full bg-black flex items-center justify-center">
                                        <span className="absolute w-3 h-[2px] bg-white rounded-full"/>
                                        <motion.span
                                            animate={{
                                                rotate: isOpen ? 90 : 0,
                                                opacity: isOpen ? 0 : 1,
                                            }}
                                            transition={{duration: 0.18, ease: "easeOut"}}
                                            className="absolute w-3 h-[2px] bg-white rounded-full rotate-90"
                                        />
                                    </motion.button>
                                </div>
                            </div>
                        )
                    })}
                    <div
                        className="border-b border-dashed border-[#666]/50 w-full max-w-[450px] tablet:max-w-[600px] laptop:max-w-[740px] desktop:max-w-[880px] flex items-center justify-between gap-x-[10px] tablet:gap-x-0 p-[10px] tablet:p-5">
                        <div
                            className="font-grotesk font-medium leading-[120%] tracking-[-1%] text-[14px] tablet:text-[18px] desktop:text-[22px]">
                            Still have questions? We're here to help!
                        </div>

                        <div
                            className="h-[50px] tablet:h-[55px] min-w-[110px] tablet:min-w-[130px] p-1 rounded-full bg-[#0D2247]/5 border border-[#0D2247]/10">
                            <div className="h-full w-full bg-[#27292F] rounded-full flex items-center justify-center cursor-pointer transition-all duration-200 ease-out hover:bg-[#34363E] active:scale-[0.98]">
                                <div
                                    className="font-grotesk text-[12px] tablet:text-[15px] leading-[125%] tracking-[-2%] text-white">
                                    Contact Us
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Faq