import Image from "next/image"
import footerText1 from "@/public/footerText2.png"
import footer1 from "@/public/footer1.webp"
import logoWhite from "@/public/logoWhite.png"

const items = [
    {
        title: "PRODUCT",
        list: [
            {
                name: "Assistant"
            },
            {
                name: "Models"
            },
            {
                name: "Contact"
            }
        ]
    },
    {
        title: "OTHER",
        list: [
            {
                name: "About"
            },
            {
                name: "Affiliates"
            },
            {
                name: "Blog"
            }
        ]
    },
    {
        title: "LEGAL",
        list: [
            {
                name: "Terms & Condition"
            },
            {
                name: "Privacy Policy"
            }
        ]
    }
]

const Footer1 = () => {
    return (
        <footer className="mt-10 tablet:mt-0 laptop:mt-20 relative h-[1000px] tablet:h-[700px] w-full flex justify-center footer-wrapper overflow-hidden">
            {/* Background */}
            <div className="footer-bg absolute inset-0 pointer-events-none" />

            {/*/!* Mask *!/*/}
            <div
                className="
                absolute inset-0 pointer-events-none
                bg-[linear-gradient(to_top,#FAF9F8_0%,rgba(250,249,248,0.7)_40%,rgba(255,255,255,0.9)_70%,#ffffff_100%),url('/newFooterBg.png')]
                bg-no-repeat
                bg-[center_bottom]
                bg-cover
            "
            />

            {/* Content */}
            <div className="absolute bottom-0 z-10 h-[950px] w-full tablet:max-w-[900px] laptop:max-w-[1236px] mx-auto flex flex-col justify-end gap-y-10 tablet:gap-y-30">
                <div className={`px-2 h-full tablet:h-[361px] w-full flex flex-col items-center justify-center tablet:flex-row gap-4 laptop:gap-6`}>
                    <div style={{ backgroundImage: `url(${footer1.src})` }} className={`rounded-[14px] max-w-[450px] bg-cover bg-no-repeat w-full tablet:max-w-1/3 tablet:h-full`}>
                        <div className={`z-20 relative h-full w-full flex flex-col gap-y-15 justify-between p-4`}>
                            <div className={`flex flex-col gap-y-1.5`}>
                                <div
                                    className="
                                relative
                                w-[120px]
                                tablet:w-[143px]
                                h-auto
                            "
                                >
                                    <Image
                                        src={logoWhite}
                                        alt="Logo"
                                        width={143}
                                        height={32}
                                        className="w-full h-auto"
                                        priority
                                    />
                                </div>

                                <div className={`max-w-[325px] text-[#B2B2B2] font-grotesk leading-[150%] tracking-[-2%] text-[13px] tablet:text-[15px] laptop:text-[16px]`}>Incredible goes beyond conversation to become an AI assistant that actually does work for you.</div>
                            </div>
                            <div>
                                <div className={`text-[13px] tablet:text-[14px] laptop:text-[16px] w-full flex flex-col gap-y-[12px]`}>
                                    <div className={`w-full h-11 tablet:h-11 laptop:h-[52px] flex pl-3 tablet:pl-4 text-[#B2B2B2] items-center font-grotesk bg-white rounded-xl`}>
                                        john@example.com
                                    </div>

                                    <div className={`cursor-pointer w-full h-11 tablet:h-11 laptop:h-[52px] bg-[#45474D] text-white hover:bg-white/30 transition-all ease-in flex items-center justify-center font-grotesk rounded-full`}>
                                        Contact Us
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={`p-4 tablet:p-6 laptop:p-8 w-full max-w-[450px] tablet:max-w-full border border-[#EDEDED] bg-[#FAF9F8] rounded-[14px] tablet:w-2/3 flex-1 tablet:h-full`}>
                        <div className={`w-full h-full flex flex-col gap-y-6 justify-between`}>
                            <div className={`flex flex-col gap-y-8 tablet:gap-y-10 items-center tablet:items-start tablet:flex-row tablet:justify-between`}>
                                {
                                    items.map((e, i) => (
                                        <div key={i} className={`flex flex-col items-center tablet:items-start gap-y-5`}>
                                            <div className={`font-grotesk font-medium leading-[100%] tracking-[-1%] text-[14px] tablet:text-[14px] laptop:text-[16px]`}>{e.title}</div>
                                            <div className={`flex flex-col gap-y-1.5 tablet:gap-y-2.5 text-center tablet:text-start`}>
                                                {
                                                    e.list.map((li, index) => (
                                                        <a href="#top" key={index} className={`font-grotesk text-[14px] laptop:text-[16px] font-grotesk text-[#666] hover:text-[#666]/70 leading-[150%] tracking-[-2%]`}>
                                                            {li.name}
                                                        </a>
                                                    ))
                                                }
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                            <div className={`w-full`}>
                                <div className={`w-full flex flex-col tablet:flex-row gap-y-3 items-center justify-center tablet:justify-between`}>
                                    <div className={`font-grotesk text-[#666] text-[14px] laptop:text-[16px] leading-[150%] text-center tablet:text-start tracking-[-2%]`}>Incredible, all rights reserved, 2025</div>
                                    <div className={`flex gap-x-[5px]`}>
                                        <div className={`h-8 aspect-square bg-[#d9d8d7] hover:bg-[#C6C6C6]/80 cursor-pointer flex items-center justify-center rounded-[7px]`}>
                                            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M12.4787 11.6475C12.48 11.8126 12.4269 11.86 12.2663 11.8562C11.81 11.8475 11.3537 11.8406 10.8982 11.8587C10.6694 11.8681 10.6006 11.8087 10.6037 11.5707C10.6175 10.545 10.6087 9.51874 10.6106 8.49255C10.6106 8.2113 10.5919 7.93255 10.4887 7.66749C10.3137 7.21999 10.0119 6.91693 9.5113 6.87312C8.97874 6.82624 8.59192 7.06874 8.33067 7.51818C8.15942 7.81255 8.12005 8.14124 8.12067 8.47749C8.12317 9.51437 8.11505 10.5506 8.12686 11.5869C8.13005 11.8101 8.06186 11.8656 7.84811 11.8581C7.39249 11.8425 6.93624 11.8463 6.48005 11.8569C6.30505 11.8612 6.25186 11.8087 6.25186 11.6312C6.25755 9.49624 6.25686 7.36124 6.25317 5.2263C6.25317 5.07318 6.28442 5.00437 6.45686 5.00818C6.94374 5.01874 7.43124 5.01874 7.91811 5.00818C8.08686 5.00505 8.13124 5.06624 8.12436 5.2238C8.11374 5.47943 8.12186 5.73562 8.12186 6.05812C8.8438 5.16562 9.71311 4.87255 10.7457 5.08068C11.7457 5.28249 12.4337 6.18255 12.4625 7.38818C12.4962 8.80687 12.4713 10.2275 12.4787 11.6475ZM4.07567 4.2138C3.46999 4.21249 2.99624 3.73249 2.99755 3.12255C2.99874 2.51999 3.48692 2.0288 4.08186 2.02999C4.67755 2.03187 5.1613 2.52499 5.15942 3.12812C5.15811 3.73943 4.68317 4.21499 4.07567 4.2138ZM4.74568 11.8587C4.29061 11.8406 3.8338 11.8475 3.37818 11.8562C3.21499 11.8594 3.1413 11.8294 3.14186 11.6394C3.14818 9.50561 3.14749 7.37255 3.14249 5.23874C3.14186 5.06755 3.18318 5.00312 3.36561 5.00818C3.8313 5.01999 4.29811 5.02318 4.76318 5.00687C4.97749 4.99937 5.01686 5.07874 5.01568 5.27249C5.00755 6.32874 5.01186 7.38499 5.01186 8.44186C5.01186 9.48749 5.00568 10.5338 5.0163 11.58C5.0188 11.7925 4.96999 11.8676 4.74568 11.8587ZM14.9319 2.5313C14.8894 2.19187 14.8837 1.84249 14.6962 1.5388C14.0894 0.554428 13.2519 -0.00625977 12.0512 5.27333e-05C9.0138 0.0156777 5.9763 5.27338e-05 2.93874 0.0106777C2.48255 0.0118652 2.01318 0.0268652 1.5988 0.271865C0.587487 0.870615 -0.00626267 1.70749 4.9831e-05 2.93437C0.0143623 5.98193 4.98312e-05 9.02937 0.00998733 12.0775C0.0118623 12.5069 0.0181748 12.9562 0.243112 13.3431C0.774362 14.2582 1.47443 14.9376 2.62436 14.9331C2.65749 14.9331 2.68318 14.9487 2.71068 14.9631H12.2888C12.3419 14.9156 12.4069 14.9394 12.4669 14.9319C12.8112 14.8887 13.1669 14.8869 13.4725 14.6894C14.3269 14.1369 14.955 13.4412 14.9357 12.3419C14.9357 12.3225 14.9494 12.3051 14.9638 12.2888V2.71068C14.9212 2.6563 14.9394 2.59187 14.9319 2.5313Z" fill="#626262"/>
                                            </svg>
                                        </div>

                                        <div className={`h-8 aspect-square bg-[#d9d8d7] hover:bg-[#C6C6C6]/80 cursor-pointer flex items-center justify-center rounded-[7px]`}>
                                            <svg width="17" height="15" viewBox="0 0 17 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M10.084 6.34615L15.6629 0H13.1653L8.9169 4.75385L5.2521 0.0461538L0 0L6.13912 8.05385L0.396825 14.8385H2.89449L7.46966 9.76154L11.4846 14.9538L16.6667 15L10.084 6.34615ZM2.89449 1.43077H4.48179L13.6321 13.4538H12.1615L2.89449 1.43077Z" fill="#626262"/>
                                            </svg>
                                        </div>

                                        <div className={`h-8 aspect-square bg-[#d9d8d7] hover:bg-[#C6C6C6]/80 cursor-pointer flex items-center justify-center rounded-[7px]`}>
                                            <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M8.2 5.875C6.91134 5.875 5.86667 6.91967 5.86667 8.20833C5.86667 9.497 6.91134 10.5417 8.2 10.5417C9.48867 10.5417 10.5333 9.497 10.5333 8.20833C10.5356 7.58882 10.2904 6.99403 9.85238 6.55596C9.41431 6.11789 8.81952 5.87278 8.2 5.875Z" fill="#626262"/>
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M11.4083 0H5C2.23858 0 0 2.23858 0 5V11.4083C0 14.1698 2.23858 16.4083 5 16.4083H11.4083C14.1698 16.4083 16.4083 14.1698 16.4083 11.4083V5C16.4083 2.23858 14.1698 0 11.4083 0ZM8.2 11.7833C6.22748 11.7788 4.62958 10.1809 4.625 8.20833C4.62163 6.7575 5.49344 5.44781 6.8332 4.89104C8.17295 4.33427 9.71623 4.64031 10.7421 5.66621C11.768 6.69211 12.0741 8.23538 11.5173 9.57514C10.9605 10.9149 9.65084 11.7867 8.2 11.7833ZM11.3124 4.09314C11.4552 4.43331 11.7895 4.65337 12.1583 4.65C12.6554 4.65 13.0583 4.24706 13.0583 3.75C13.0617 3.38112 12.8416 3.04684 12.5015 2.90411C12.1613 2.76139 11.7686 2.83857 11.5078 3.09942C11.2469 3.36027 11.1697 3.75297 11.3124 4.09314Z" fill="#626262"/>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <div className={`-mb-6 mx-auto tablet:-mb-10 laptop:mb-2 max-w-[1180px] max-h-[200px]`}>
                    <Image src={footerText1} alt={""} />
                </div>

            </div>
        </footer>
    );
};

export default Footer1;
