import exploreAI from "@/public/exploreAI.webp"

const ExploreAI = () => {
    return (
        <div className={`py-[40px] tablet:py-10 laptop:py-25 desktop:py-[120px] px-[20px] tablet:px-[30px] laptop:px-[50px] desktop:px-[70px] flex items-center`}>
            <div
                style={{ backgroundImage: `url(${exploreAI.src})` }}
                className="
                relative w-full
                max-w-[450px]
                tablet:max-w-[900px]
                laptop:max-w-[1070px]
                desktop:max-w-[1270px]
                h-[350px]
                desktop:h-[447px]
                tablet:h-auto
                tablet:aspect-[1070/377]
                desktop:aspect-[1270/447]

                flex items-center justify-center
                bg-cover bg-center bg-no-repeat

                rounded-4xl
                mx-auto
                "
                >
                <div className={`w-full max-w-[450px] tablet:max-w-[550px] laptop:max-w-[630px] desktop:max-w-[700px] flex flex-col items-center justify-center gap-y-[34px] p-[10px]`}>
                    <div className={`flex flex-col items-center gap-y-3 p-[10px]`}>
                        <div className={`font-grotesk font-medium text-center text-[21px] tablet:text-[26px] laptop:text-[36px] desktop:text-[43px] text-white leading-[118%] tracking-[-2%]`}>Start using AI that actually work</div>
                        <div className={`text-center font-grotesk text-[14px] tablet:text-[15px] laptop:text-[16px] text-white/80 leading-[150%] tracking-[-2%]`}>
                            Whether you want to get your work done faster, or build the next agentic product, Incredible is the platform that makes it possible.
                        </div>
                    </div>
                    <div className={`flex flex-row justify-center flex-wrap items-center gap-3`}>
                        <div className={`cursor-pointer w-[145px] h-[43px] flex items-center justify-center bg-white hover:bg-white/85 transition-all ease-in rounded-full text-black font-grotesk text-[12px] tablet:text-[15px] leading-[19.6%]`}>Try AI Assistant</div>
                        <div className={`cursor-pointer w-[145px] h-[43px] glass-border flex items-center justify-center bg-[rgba(255, 255, 255, 0.17)] hover:bg-white/10 transition-all ease-in rounded-full text-white font-grotesk text-[12px] tablet:text-[15px] leading-[19.6%] border border-white/20 backdrop-blur-md shadow-[0_0_20px_rgba(255,255,255,0.1),inset_0_0_20px_rgba(255,255,255,0.1)]`}>Explore the AI</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ExploreAI