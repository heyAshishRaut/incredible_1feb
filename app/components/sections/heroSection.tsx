import Image from "next/image"
import Navbar from "@/app/components/navbar"
import Hamburger from "@/app/components/hamburger"
import heroInput from "@/public/heroInput.webp"

const HeroSection = () => {
    return (
        <div className={`relative h-[650px] tablet:h-[960px] desktop:h-[1140px] w-full overflow-hidden`}>

            <div className={`hero-bg absolute inset-0`}/>

            <div className="pointer-events-none absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-white to-transparent" />

            <div className={`relative w-full h-full z-10`}>
                <div className={`w-full h-11 desktop:h-[53px] bg-[#0D0D11] font-sans flex items-center justify-center`}>
                    <div className={`font-sans text-[11px] text-center tablet:text-[12px] laptop:text-[14px] desktop:text-[20px] text-white`}>We optimize for the single statistic that matters: Amount of real-world tasks.</div>
                </div>

                {/* Navbar */}
                <div className={`relative top-[32px] w-full min-h-11 px-5 tablet:px-10 laptop:px-25 desktop:px-[120px]`}>
                    <div className={`h-full w-full max-w-[450px] tablet:max-w-[900px] laptop:max-w-[1240px] mx-auto`}>
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

                            <div
                                className="
                                hidden
                                relative
                                group
                                cursor-pointer
                                aspect-square
                                tablet:aspect-auto
                                h-11
                                desktop:h-[53px]
                                laptop:flex
                                items-center
                                justify-center
                                tablet:px-[20px]
                                tablet:py-[12px]
                                font-sans
                                font-medium
                                text-[15px]
                                tablet:text-[17px]
                                leading-[19.6%]
                                rounded-full
                                text-white
                                border border-[#57565F]
                                bg-[linear-gradient(90deg,#1F1F21_0%,#3E3D4C_34%,#1F1F21_51%,#3E3D4C_72%,#1F1F21_100%)]
                                shadow-[0_25px_45px_rgba(0,0,0,0.25)]
                                overflow-visible">
                                <div
                                    className="
                                    pointer-events-none absolute inset-[-28px] rounded-full bg-white/8 blur-[40px] opacity-0 transition-opacity duration-300 group-hover:opacity-100"/>

                                <div className="relative z-10 hidden tablet:block">
                                    Try AI Assistant
                                </div>
                            </div>
                            <Hamburger/>
                        </div>
                    </div>
                </div>

                {/* Content */}
                <div className={`relative top-[110px] tablet:top-[144px] px-5 tablet:px-10 laptop:px-25 desktop:px-[120px]`}>
                    <div className={`w-full max-w-[450px] tablet:max-w-[550px] laptop:max-w-[690px] desktop:max-w-[730px] flex flex-col items-center gap-y-[40px] laptop:gap-y-[70px] mx-auto`}>
                        <div className={`flex flex-col items-center gap-y-[34px] desktop:gap-y-[40px]`}>
                            <div className={`w-full flex flex-col items-center gap-y-[14px] desktop:gapy-y-[17px]`}>
                                <div className={`font-grotesk font-medium text-[28px] tablet:text-[46px] laptop:text-[56px] desktop:text-[66px] leading-[110%] tracking-[-2%] text-center`}>Agentic AI models <br/> purpose built for work.</div>
                                <div className={`w-full tablet:w-[506px] font-grotesk font-medium text-[14px] tablet:text-[17px] desktop:text-[21px] text-center text-[#464646]/86 leading-[150%] tracking-[-2%]`}>We optimize for the single statistic that matters: Amount of real-world tasks a model can solve</div>
                            </div>

                            <div className={`w-full flex flex-col tablet:flex-row gap-y-3 items-center justify-center gap-x-[12px]`}>
                                <div className=" relative group cursor-pointer flex items-center justify-center h-[44px] desktop:h-[53px] w-[170px] tablet:w-[164px] font-sans font-medium text-[12px] tablet:text-[15px] laptop:text-[17px] leading-[19.6%] rounded-full text-white border border-[#57565F] bg-[linear-gradient(90deg,#1F1F21_0%,#3E3D4C_34%,#1F1F21_51%,#3E3D4C_72%,#1F1F21_100%)] shadow-[0_25px_45px_rgba(0,0,0,0.25)] overflow-visible">
                                    <div className="pointer-events-none absolute inset-[-28px] rounded-full bg-white/8 blur-[40px] opacity-0 transition-opacity duration-300 group-hover:opacity-100"/>

                                    <div className="relative z-10">
                                        Try AI Assistant
                                    </div>

                                </div>
                                <div className={`z-5 cursor-pointer h-11 desktop:h-[53px] w-[170px] tablet:w-[208px] flex items-center justify-center tablet:px-[12px] laptop:px-[20px] py-[12px] font-sans font-medium text-[12px] tablet:text-[15px] laptop:text-[17px] leading-[19.6%] rounded-full text-[#0D0D0D] bg-[#EEE]`}>
                                    Try Incredible Agents
                                </div>
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