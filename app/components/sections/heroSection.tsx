import Image from "next/image"
import Navbar from "@/app/components/navbar"
import Hamburger from "@/app/components/hamburger"
import heroInput from "@/public/heroInput.webp"
import TryAIAssistantButton from "@/app/components/tryAIAssistantBtn"

const HeroSection = () => {
    return (
        <div id="top" className={`relative h-[650px] tablet:h-[960px] desktop:h-[1140px] w-full overflow-hidden`}>

            <div className={`hero-bg absolute inset-0`}/>

            <div className="pointer-events-none absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-white to-transparent" />

            <div className={`relative w-full h-full z-10`}>
                <div className={`w-full h-11 desktop:h-[53px] bg-[#0D0D11] font-sans flex items-center justify-center`}>
                    <div className={`font-sans text-[11px] text-center tablet:text-[12px] laptop:text-[14px] desktop:text-[20px] text-white`}>We optimize for the single statistic that matters: Amount of real-world tasks.</div>
                </div>

                {/* Navbar */}
                <div className={`relative top-[32px] w-full min-h-11 px-[20px] tablet:px-[30px]`}>
                    <div className={`h-full w-full max-w-[450px] tablet:max-w-[900px] laptop:max-w-[1240px] desktop:max-w-[1472px] mx-auto`}>
                        <div className={`w-full h-full flex items-center justify-between`}>
                            <div className={`relative w-[133px] h-[29px] desktop:h-[34px] desktop:w-[158px]`}>
                                <Image
                                    src="/logoBlack.svg"
                                    alt="Logo"
                                    className={`absolute`}
                                    fill
                                    priority
                                />
                            </div>

                            <Navbar/>

                            <div className={`hidden laptop:block`}>
                                <TryAIAssistantButton/>
                            </div>
                            <Hamburger/>
                        </div>
                    </div>
                </div>

                {/* Content */}
                <div className={`relative top-[110px] tablet:top-[144px] px-5 tablet:px-10 laptop:px-25 desktop:px-[120px]`}>
                    <div className={`w-[90%] max-w-[450px] tablet:max-w-[550px] laptop:max-w-[690px] desktop:max-w-[730px] flex flex-col items-center gap-y-[40px] laptop:gap-y-[70px] mx-auto`}>
                        <div className={`flex flex-col items-center gap-y-[34px] desktop:gap-y-[40px]`}>
                            <div className={`w-full flex flex-col items-center gap-y-[14px] desktop:gapy-y-[17px]`}>
                                <div className={`font-grotesk font-medium text-[28px] tablet:text-[46px] laptop:text-[56px] desktop:text-[66px] leading-[110%] tracking-[-2%] text-center`}>Agentic AI models <br/> purpose built for work.</div>
                                <div className={`w-full tablet:w-[506px] font-grotesk text-[14px] tablet:text-[16px] desktop:text-[21px] text-center text-[#464646]/86 leading-[150%] tracking-[-2%]`}>We optimize for the single statistic that matters: Amount of real-world tasks a model can solve</div>
                            </div>
                        </div>

                        <div className="relative w-full desktop:max-w-[667px] laptop:max-w-[562px] aspect-[562/148]">
                            <Image
                                src={heroInput}
                                alt="Hero input"
                                fill
                                className="object-contain"
                                sizes="(max-width: 50.625rem) 100vw, (max-width: 75rem) 80vw, 562px"
                                priority
                            />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection