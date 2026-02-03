import Image from "next/image"
import integration1 from "@/public/integration1.webp"
import integration2 from "@/public/integration2.webp"
import integrationSVG from "@/public/sectionIcons/integrationsSVG.webp"
import TryAIAssistantButton from "@/app/components/tryAIAssistantBtn";

const Integrations = () => {
    return (
        <div className={`w-full flex flex-col gap-y-20 p-5 tablet:pt-10 laptop:pt-25 desktop:pt-[120px] tablet:px-[30px] laptop:px-[50px] desktop:px-[70px]`}>
            <div className={`w-full h-full flex flex-col items-center gap-y-20 desktop:gap-y-[95px]`}>

                <div className={`w-full flex flex-col items-center gap-y-[24px] desktop:gap-y-[28px] max-w-[350px] tablet:max-w-[480px] laptop:max-w-[600px]`}>
                    <Image
                        src={integrationSVG}
                        alt="Small UI image"
                        width={130}
                        height={40}
                        className="w-[130px] h-auto"
                        quality={90}
                        draggable={false}
                    />

                    <div className={`flex flex-col items-center gap-y-[14px]`}>
                        <div className={`font-grotesk font-medium text-[20px] tablet:text-[26px] laptop:text-[36px] desktop:text-[43px] leading-[128%] tracking-[-2%] text-center`}>Integrations & MCP Support</div>

                        <div className={`font-grotesk text-[#666666] text-center text-[14px] tablet:text-[16px] desktop:text-[19px] leading-[150%] tracking-[-2%]`}>
                            Incredible connects to the tools your team already uses. From calendars, to project management, to collaboration platforms.
                        </div>
                    </div>
                </div>

                <div className={`w-full flex flex-col items-center gap-y-[40px] laptop:gap-y-[60px] desktop:gap-y-[70px]`}>
                    <div className={`w-full flex flex-col gap-y-[20px] items-center overflow-hidden`}>
                        <div
                            className="
                        relative w-full shrink-0
                        max-w-full
                        tablet:max-w-[520px]
                        laptop:max-w-[680px]
                        desktop:max-w-[760px]
                        aspect-[680/413]
                        "
                        >
                            <Image
                                src={integration1}
                                alt="Illustration"
                                fill
                                className="object-contain"
                                sizes="
                                (max-width: 50.625rem) 100vw,
                                (max-width: 75rem) 680px,
                                760px
                                "
                                priority
                                quality={85}
                                draggable={false}
                            />
                        </div>

                        <div
                            className="
                            relative w-full shrink-0
                            max-w-full
                            tablet:max-w-[900px]
                            laptop:max-w-[1201px]
                            desktop:max-w-[1320px]
                            aspect-[1201/305]
                            "
                        >
                            <Image
                                src={integration2}
                                alt="Wide banner illustration"
                                fill
                                className="object-contain"
                                sizes="
                                (max-width: 50.625rem) 100vw,
                                (max-width: 75rem) 1201px,
                                1320px
                                "
                                priority
                                quality={85}
                                draggable={false}
                            />
                        </div>

                        <div className={`w-full py-[27px] flex flex-wrap justify-center items-center gap-[32px]`}>
                            <div className={`flex gap-x-4 w-[300px]`}>
                                <div className={`h-[40px] tablet:h-[46px] w-[40px] tablet:w-[46px] flex items-center justify-center aspect-square border border-[#F0E0D1] shadow-[0_4px_12px_rgba(240,224,209,0.6)] rounded-[10px] bg-[linear-gradient(to_bottom,#F8F5F2_24%,#FFFFFF_100%)]`}>
                                    <svg className={`h-4 w-4 tablet:h-5 tablet:w-5`} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path opacity="0.1" d="M7.08333 8.33325C9.61467 8.33325 11.6667 10.3853 11.6667 12.9166C11.6667 15.4479 9.61467 17.4999 7.08333 17.4999C4.55203 17.4999 2.5 15.4479 2.5 12.9166C2.5 10.3853 4.55203 8.33325 7.08333 8.33325Z" fill="#96897D"/>
                                        <path d="M10.4165 9.58333L17.4998 2.5" stroke="#96897D" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M7.08333 8.33325C9.61467 8.33325 11.6667 10.3853 11.6667 12.9166C11.6667 15.4479 9.61467 17.4999 7.08333 17.4999C4.55203 17.4999 2.5 15.4479 2.5 12.9166C2.5 10.3853 4.55203 8.33325 7.08333 8.33325Z" stroke="#96897D" stroke-width="1.66667"/>
                                        <path d="M12.9165 7.08325L14.1665 8.33325C14.6268 8.7935 15.3729 8.7935 15.8332 8.33325L16.6665 7.49992C17.1268 7.03969 17.1268 6.29349 16.6665 5.83325L15.4165 4.58325" stroke="#96897D" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                </div>
                                <div className={`font-grotesk text-[#666] text-[13px] tablet:text-[16px] leading-[150%] tracking-[-2%]`}>Ingests your apps through secure permissions</div>
                            </div>

                            <div className={`flex gap-x-4 w-[300px] `}>
                                <div className={`h-[40px] tablet:h-[46px] w-[40px] tablet:w-[46px] flex items-center justify-center aspect-square border border-[#F0E0D1] shadow-[0_4px_12px_rgba(240,224,209,0.6)] rounded-[10px] bg-[linear-gradient(to_bottom,#F8F5F2_24%,#FFFFFF_100%)]`}>
                                    <svg className={`h-4 w-4 tablet:h-5 tablet:w-5`} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path opacity="0.2" d="M15.2201 11.8305L10.9162 13.4165L9.33027 17.7204C9.28647 17.839 9.20734 17.9414 9.10355 18.0138C8.99976 18.0861 8.8763 18.1248 8.7498 18.1248C8.6233 18.1248 8.49984 18.0861 8.39605 18.0138C8.29226 17.9414 8.21314 17.839 8.16933 17.7204L6.5834 13.4165L2.27949 11.8305C2.16082 11.7867 2.05842 11.7076 1.9861 11.6038C1.91377 11.5 1.875 11.3765 1.875 11.25C1.875 11.1235 1.91377 11.0001 1.9861 10.8963C2.05842 10.7925 2.16082 10.7134 2.27949 10.6696L6.5834 9.08364L8.16933 4.77973C8.21314 4.66106 8.29226 4.55866 8.39605 4.48634C8.49984 4.41402 8.6233 4.37524 8.7498 4.37524C8.8763 4.37524 8.99976 4.41402 9.10355 4.48634C9.20734 4.55866 9.28647 4.66106 9.33027 4.77973L10.9162 9.08364L15.2201 10.6696C15.3388 10.7134 15.4412 10.7925 15.5135 10.8963C15.5858 11.0001 15.6246 11.1235 15.6246 11.25C15.6246 11.3765 15.5858 11.5 15.5135 11.6038C15.4412 11.7076 15.3388 11.7867 15.2201 11.8305Z" fill="#96897D"/>
                                        <path d="M15.4362 10.0828L11.4065 8.59375L9.92212 4.56094C9.83422 4.32213 9.67518 4.11604 9.46647 3.97046C9.25775 3.82488 9.0094 3.74682 8.75493 3.74682C8.50046 3.74682 8.25212 3.82488 8.0434 3.97046C7.83469 4.11604 7.67565 4.32213 7.58775 4.56094L6.094 8.59375L2.06118 10.0781C1.82238 10.166 1.61628 10.3251 1.4707 10.5338C1.32513 10.7425 1.24707 10.9908 1.24707 11.2453C1.24707 11.4998 1.32513 11.7481 1.4707 11.9568C1.61628 12.1656 1.82238 12.3246 2.06118 12.4125L6.094 13.9062L7.57837 17.9391C7.66628 18.1779 7.82531 18.384 8.03403 18.5295C8.24274 18.6751 8.49109 18.7532 8.74556 18.7532C9.00003 18.7532 9.24838 18.6751 9.45709 18.5295C9.6658 18.384 9.82484 18.1779 9.91275 17.9391L11.4065 13.9062L15.4393 12.4219C15.6781 12.334 15.8842 12.1749 16.0298 11.9662C16.1754 11.7575 16.2534 11.5092 16.2534 11.2547C16.2534 11.0002 16.1754 10.7519 16.0298 10.5432C15.8842 10.3344 15.6781 10.1754 15.4393 10.0875L15.4362 10.0828ZM10.7034 12.8297C10.6185 12.861 10.5415 12.9103 10.4776 12.9742C10.4136 13.0381 10.3643 13.1152 10.3331 13.2L8.75025 17.4883L7.17056 13.2031C7.13934 13.1174 7.08974 13.0395 7.02522 12.975C6.96071 12.9105 6.88285 12.8609 6.79712 12.8297L2.51197 11.25L6.79712 9.67031C6.88285 9.6391 6.96071 9.58949 7.02522 9.52497C7.08974 9.46046 7.13934 9.3826 7.17056 9.29688L8.75025 5.01172L10.3299 9.29688C10.3612 9.38171 10.4105 9.45875 10.4744 9.52269C10.5384 9.58662 10.6154 9.63592 10.7002 9.66719L14.9885 11.25L10.7034 12.8297ZM11.2502 3.125C11.2502 2.95924 11.3161 2.80027 11.4333 2.68306C11.5505 2.56585 11.7095 2.5 11.8752 2.5H13.1252V1.25C13.1252 1.08424 13.1911 0.925268 13.3083 0.808058C13.4255 0.690848 13.5845 0.625 13.7502 0.625C13.916 0.625 14.075 0.690848 14.1922 0.808058C14.3094 0.925268 14.3752 1.08424 14.3752 1.25V2.5H15.6252C15.791 2.5 15.95 2.56585 16.0672 2.68306C16.1844 2.80027 16.2502 2.95924 16.2502 3.125C16.2502 3.29076 16.1844 3.44973 16.0672 3.56694C15.95 3.68415 15.791 3.75 15.6252 3.75H14.3752V5C14.3752 5.16576 14.3094 5.32473 14.1922 5.44194C14.075 5.55915 13.916 5.625 13.7502 5.625C13.5845 5.625 13.4255 5.55915 13.3083 5.44194C13.1911 5.32473 13.1252 5.16576 13.1252 5V3.75H11.8752C11.7095 3.75 11.5505 3.68415 11.4333 3.56694C11.3161 3.44973 11.2502 3.29076 11.2502 3.125ZM19.3752 6.875C19.3752 7.04076 19.3094 7.19973 19.1922 7.31694C19.075 7.43415 18.916 7.5 18.7502 7.5H18.1252V8.125C18.1252 8.29076 18.0594 8.44973 17.9422 8.56694C17.825 8.68415 17.666 8.75 17.5002 8.75C17.3345 8.75 17.1755 8.68415 17.0583 8.56694C16.9411 8.44973 16.8752 8.29076 16.8752 8.125V7.5H16.2502C16.0845 7.5 15.9255 7.43415 15.8083 7.31694C15.6911 7.19973 15.6252 7.04076 15.6252 6.875C15.6252 6.70924 15.6911 6.55027 15.8083 6.43306C15.9255 6.31585 16.0845 6.25 16.2502 6.25H16.8752V5.625C16.8752 5.45924 16.9411 5.30027 17.0583 5.18306C17.1755 5.06585 17.3345 5 17.5002 5C17.666 5 17.825 5.06585 17.9422 5.18306C18.0594 5.30027 18.1252 5.45924 18.1252 5.625V6.25H18.7502C18.916 6.25 19.075 6.31585 19.1922 6.43306C19.3094 6.55027 19.3752 6.70924 19.3752 6.875Z" fill="#96897D"/>
                                    </svg>
                                </div>
                                <div className={`font-grotesk text-[#666] text-[13px] tablet:text-[16px] leading-[150%] tracking-[-2%]`}>Understands your intent with Small 2.0’s deep reasoning</div>
                            </div>

                            <div className={`flex gap-x-4 w-[300px]`}>
                                <div className={`h-[40px] tablet:h-[46px] w-[40px] tablet:w-[46px] flex items-center justify-center aspect-square border border-[#F0E0D1] shadow-[0_4px_12px_rgba(240,224,209,0.6)] rounded-[10px] bg-[linear-gradient(to_bottom,#F8F5F2_24%,#FFFFFF_100%)]`}>
                                    <svg className={`h-3.5 w-3.5 tablet:h-5 tablet:w-5`} viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M11.0672 5.18281C11.1253 5.24086 11.1714 5.30979 11.2029 5.38566C11.2343 5.46154 11.2505 5.54287 11.2505 5.625C11.2505 5.70713 11.2343 5.78846 11.2029 5.86434C11.1714 5.94021 11.1253 6.00914 11.0672 6.06719L6.69219 10.4422C6.63414 10.5003 6.56521 10.5464 6.48934 10.5779C6.41346 10.6093 6.33213 10.6255 6.25 10.6255C6.16787 10.6255 6.08654 10.6093 6.01066 10.5779C5.93479 10.5464 5.86586 10.5003 5.80781 10.4422L3.93281 8.56719C3.81554 8.44991 3.74965 8.29085 3.74965 8.125C3.74965 7.95915 3.81554 7.80009 3.93281 7.68281C4.05009 7.56554 4.20915 7.49965 4.375 7.49965C4.54085 7.49965 4.69991 7.56554 4.81719 7.68281L6.25 9.11641L10.1828 5.18281C10.2409 5.1247 10.3098 5.0786 10.3857 5.04715C10.4615 5.0157 10.5429 4.99951 10.625 4.99951C10.7071 4.99951 10.7885 5.0157 10.8643 5.04715C10.9402 5.0786 11.0091 5.1247 11.0672 5.18281ZM15 1.25V13.75C15 14.0815 14.8683 14.3995 14.6339 14.6339C14.3995 14.8683 14.0815 15 13.75 15H1.25C0.918479 15 0.600537 14.8683 0.366116 14.6339C0.131696 14.3995 0 14.0815 0 13.75V1.25C0 0.918479 0.131696 0.600537 0.366116 0.366116C0.600537 0.131696 0.918479 0 1.25 0H13.75C14.0815 0 14.3995 0.131696 14.6339 0.366116C14.8683 0.600537 15 0.918479 15 1.25ZM13.75 13.75V1.25H1.25V13.75H13.75Z" fill="#96897D"/>
                                    </svg>
                                </div>
                                <div className={`font-grotesk text-[#666] text-[13px] tablet:text-[16px] leading-[150%] tracking-[-2%]`}>Executes tasks through function calling + MCP tools</div>
                            </div>
                        </div>
                    </div>

                    <TryAIAssistantButton/>
                </div>
            </div>
        </div>
    )
}

export default Integrations