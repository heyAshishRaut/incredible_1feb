"use client"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import useCase from "@/public/useCases.webp"
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
        <div className={`w-full flex flex-col p-5 tablet:p-10 laptop:p-25 desktop:p-[120px]`}>
            <div className={`w-full h-full flex flex-col items-center gap-y-20 desktop:gap-y-[95px]`}>

                <div className={`w-full flex flex-col items-center gap-y-[24px] desktop:gap-y-[28px] max-w-[400px] tablet:max-w-[520px] laptop:max-w-[633px] desktop:max-w-[700px]`}>
                    <svg width="123" height="38" viewBox="0 0 123 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g filter="url(#filter0_ddii_597_2901)">
                            <g clip-path="url(#clip0_597_2901)">
                                <path
                                    d="M2.5 9.5C2.5 5.08172 6.08172 1.5 10.5 1.5H112.5C116.918 1.5 120.5 5.08172 120.5 9.5V26.5C120.5 30.9183 116.918 34.5 112.5 34.5H10.5C6.08172 34.5 2.5 30.9183 2.5 26.5V9.5Z"
                                    fill="white"/>
                                <path
                                    d="M2.5 9.5C2.5 5.08172 6.08172 1.5 10.5 1.5H112.5C116.918 1.5 120.5 5.08172 120.5 9.5V26.5C120.5 30.9183 116.918 34.5 112.5 34.5H10.5C6.08172 34.5 2.5 30.9183 2.5 26.5V9.5Z"
                                    fill="url(#paint0_linear_597_2901)"/>
                                <g clip-path="url(#clip1_597_2901)">
                                    <path opacity="0.1"
                                          d="M23.5264 14.1703C23.6923 14.7094 24.1017 15.1396 24.6318 15.3324L26.4688 16.0004L24.6318 16.6683C24.1017 16.8611 23.6922 17.2912 23.5264 17.8304L22.834 20.0795L22.1426 17.8304C21.9766 17.2912 21.5673 16.8611 21.0371 16.6683L19.1992 16.0004L21.0371 15.3324C21.5673 15.1396 21.9766 14.7094 22.1426 14.1703L22.834 11.9203L23.5264 14.1703Z"
                                          fill="#FAF7F6" stroke="#514443" stroke-width="0.933333"/>
                                    <path
                                        d="M27.5012 16.1215L24.7915 17.1069C24.3987 17.2497 24.0956 17.5683 23.9728 17.9678L22.9371 21.3336C22.906 21.4346 22.7631 21.4346 22.732 21.3336L21.6964 17.9678C21.5734 17.5683 21.2704 17.2497 20.8776 17.1069L18.1679 16.1215C18.0547 16.0803 18.0547 15.9202 18.1679 15.8791L20.8776 14.8937C21.2704 14.7509 21.5734 14.4322 21.6964 14.0327L22.732 10.6669C22.7631 10.5659 22.906 10.5659 22.9371 10.6669L23.9728 14.0327C24.0956 14.4322 24.3987 14.7509 24.7915 14.8937L27.5012 15.8791C27.6144 15.9202 27.6144 16.0803 27.5012 16.1215Z"
                                        fill="#FAF7F6" stroke="#514443" stroke-width="0.933333" stroke-linecap="round"
                                        stroke-linejoin="round"/>
                                    <path
                                        d="M16 11.5004C16.3148 11.6053 16.5618 11.8523 16.6667 12.167C16.7201 12.3272 16.9466 12.3272 17 12.167C17.1049 11.8523 17.3519 11.6053 17.6667 11.5004C17.8268 11.447 17.8268 11.2204 17.6667 11.167C17.3519 11.0621 17.1049 10.8151 17 10.5004C16.9466 10.3402 16.7201 10.3402 16.6667 10.5004C16.5618 10.8151 16.3148 11.0621 16 11.167C15.8398 11.2204 15.8398 11.447 16 11.5004Z"
                                        fill="#FAF7F6" stroke="#514443" stroke-width="0.933333" stroke-linecap="round"
                                        stroke-linejoin="round"/>
                                    <path
                                        d="M18.3337 20.8337C18.0189 20.9386 17.7719 21.1856 17.667 21.5003C17.6136 21.6605 17.3871 21.6605 17.3337 21.5003C17.2287 21.1856 16.9818 20.9386 16.667 20.8337C16.5068 20.7803 16.5068 20.5537 16.667 20.5003C16.9818 20.3954 17.2287 20.1484 17.3337 19.8337C17.3871 19.6735 17.6136 19.6735 17.667 19.8337C17.7719 20.1484 18.0189 20.3954 18.3337 20.5003C18.4938 20.5537 18.4938 20.7803 18.3337 20.8337Z"
                                        fill="#FAF7F6" stroke="#514443" stroke-width="0.933333" stroke-linecap="round"
                                        stroke-linejoin="round"/>
                                </g>
                                <g opacity="0.5">
                                    <g filter="url(#filter1_f_597_2901)">
                                        <path
                                            d="M-235.812 14.253C-235.812 14.253 -96.8369 37.4303 52.0049 10.2676C236.741 -23.4454 357.811 6.03317 357.811 6.03317"
                                            stroke="white" stroke-width="1.48256"/>
                                    </g>
                                    <g filter="url(#filter2_f_597_2901)">
                                        <path
                                            d="M-235.812 21.4679C-235.812 21.4679 -96.8369 44.6452 52.0049 17.4825C236.741 -16.2305 357.811 13.248 357.811 13.248"
                                            stroke="white" stroke-width="1.48256"/>
                                    </g>
                                    <g filter="url(#filter3_f_597_2901)">
                                        <path
                                            d="M-235.812 28.6866C-235.812 28.6866 -96.8369 51.8639 52.0049 24.7012C236.741 -9.01181 357.811 20.4668 357.811 20.4668"
                                            stroke="white" stroke-width="1.48256"/>
                                    </g>
                                    <g filter="url(#filter4_f_597_2901)">
                                        <path
                                            d="M-235.812 35.9014C-235.812 35.9014 -96.8369 59.0788 52.0049 31.9161C236.741 -1.79697 357.811 27.6816 357.811 27.6816"
                                            stroke="white" stroke-width="1.48256"/>
                                    </g>
                                    <g filter="url(#filter5_f_597_2901)">
                                        <path
                                            d="M-235.812 43.1163C-235.812 43.1163 -96.8369 66.2936 52.0049 39.1309C236.741 5.41792 357.811 34.8964 357.811 34.8964"
                                            stroke="white" stroke-width="1.48256"/>
                                    </g>
                                    <g filter="url(#filter6_f_597_2901)">
                                        <path
                                            d="M-235.812 7.03815C-235.812 7.03815 -96.8369 30.2155 52.0049 3.0528C236.741 -30.6602 357.811 -1.18165 357.811 -1.18165"
                                            stroke="white" stroke-width="1.48256"/>
                                    </g>
                                    <g filter="url(#filter7_f_597_2901)">
                                        <path
                                            d="M-235.812 -0.176686C-235.812 -0.176686 -96.8369 23.0006 52.0049 -4.16204C236.741 -37.8751 357.811 -8.3965 357.811 -8.3965"
                                            stroke="white" stroke-width="1.48256"/>
                                    </g>
                                </g>
                                <path
                                    d="M34.592 19.86V13.294H36.062V19.748C36.062 20.6627 36.3187 21.316 36.832 21.708C37.3453 22.1 38.022 22.296 38.862 22.296C39.8513 22.296 40.5607 22.0673 40.99 21.61C41.4287 21.1433 41.648 20.5227 41.648 19.748V13.294H43.104V19.86C43.104 20.616 42.9407 21.2787 42.614 21.848C42.2873 22.408 41.8067 22.8467 41.172 23.164C40.5467 23.4813 39.7673 23.64 38.834 23.64C37.5273 23.64 36.4913 23.3133 35.726 22.66C34.97 22.0067 34.592 21.0733 34.592 19.86ZM48.631 23.64C47.6417 23.64 46.8484 23.4113 46.251 22.954C45.6537 22.4967 45.341 21.8667 45.313 21.064L46.713 20.91C46.713 21.3953 46.8904 21.792 47.245 22.1C47.5997 22.408 48.0757 22.562 48.673 22.562C49.1864 22.562 49.597 22.4733 49.905 22.296C50.2224 22.1093 50.381 21.8013 50.381 21.372C50.381 21.0267 50.2737 20.7747 50.059 20.616C49.8537 20.448 49.569 20.3267 49.205 20.252C48.841 20.168 48.435 20.0793 47.987 19.986C47.1844 19.8087 46.5917 19.5427 46.209 19.188C45.8357 18.824 45.649 18.3387 45.649 17.732C45.649 17.0507 45.9197 16.5047 46.461 16.094C47.0024 15.6833 47.7257 15.478 48.631 15.478C49.5457 15.478 50.283 15.6787 50.843 16.08C51.403 16.4813 51.7064 17.0833 51.753 17.886L50.367 18.068C50.367 17.6107 50.2224 17.242 49.933 16.962C49.6437 16.682 49.1957 16.542 48.589 16.542C48.113 16.542 47.7444 16.6447 47.483 16.85C47.231 17.046 47.105 17.3027 47.105 17.62C47.105 18.0213 47.2777 18.3107 47.623 18.488C47.9777 18.6653 48.5424 18.8287 49.317 18.978C49.849 19.0713 50.3017 19.202 50.675 19.37C51.0577 19.538 51.3517 19.776 51.557 20.084C51.7624 20.392 51.865 20.8073 51.865 21.33C51.865 22.0207 51.599 22.5807 51.067 23.01C50.5444 23.43 49.7324 23.64 48.631 23.64ZM57.4646 23.64C56.7086 23.64 56.0459 23.4813 55.4766 23.164C54.9166 22.8373 54.4779 22.3707 54.1606 21.764C53.8526 21.1573 53.6986 20.4247 53.6986 19.566C53.6986 18.7447 53.8433 18.0307 54.1326 17.424C54.4313 16.808 54.8559 16.332 55.4066 15.996C55.9573 15.6507 56.6246 15.478 57.4086 15.478C58.1553 15.478 58.7993 15.6413 59.3406 15.968C59.8913 16.2947 60.3066 16.7893 60.5866 17.452C60.8666 18.1053 60.9739 18.9267 60.9086 19.916H55.1266C55.1733 20.7653 55.3973 21.4 55.7986 21.82C56.2093 22.24 56.7693 22.45 57.4786 22.45C58.0573 22.45 58.5239 22.3193 58.8786 22.058C59.2333 21.7967 59.4526 21.4327 59.5366 20.966L60.8106 21.26C60.6706 21.9693 60.3019 22.5433 59.7046 22.982C59.1166 23.4207 58.3699 23.64 57.4646 23.64ZM57.3806 16.612C56.8019 16.612 56.3073 16.7893 55.8966 17.144C55.4953 17.4893 55.2479 18.054 55.1546 18.838H59.4386C59.4479 18.166 59.2706 17.6293 58.9066 17.228C58.5519 16.8173 58.0433 16.612 57.3806 16.612ZM70.3757 23.626C69.6197 23.626 68.9617 23.458 68.4017 23.122C67.8417 22.7767 67.4077 22.3007 67.0997 21.694C66.7917 21.078 66.6377 20.364 66.6377 19.552C66.6377 18.7307 66.7917 18.0167 67.0997 17.41C67.417 16.794 67.8557 16.318 68.4157 15.982C68.985 15.646 69.6477 15.478 70.4037 15.478C71.3557 15.478 72.121 15.73 72.6997 16.234C73.2877 16.7287 73.633 17.382 73.7357 18.194L72.3357 18.362C72.2797 17.8113 72.0743 17.4007 71.7197 17.13C71.365 16.8593 70.9123 16.724 70.3617 16.724C69.671 16.724 69.1203 16.976 68.7097 17.48C68.3083 17.9747 68.1077 18.6653 68.1077 19.552C68.1077 20.4293 68.3083 21.12 68.7097 21.624C69.111 22.128 69.6617 22.38 70.3617 22.38C70.9123 22.38 71.365 22.24 71.7197 21.96C72.0743 21.68 72.2797 21.2833 72.3357 20.77L73.7357 20.938C73.6237 21.7967 73.2597 22.4593 72.6437 22.926C72.037 23.3927 71.281 23.626 70.3757 23.626ZM78.0901 23.64C77.2688 23.64 76.6294 23.4393 76.1721 23.038C75.7241 22.6273 75.5001 22.0953 75.5001 21.442C75.5001 20.9193 75.6168 20.4947 75.8501 20.168C76.0928 19.8413 76.4054 19.5893 76.7881 19.412C77.1708 19.2253 77.5861 19.09 78.0341 19.006L79.6861 18.698C80.1061 18.6233 80.3814 18.5113 80.5121 18.362C80.6428 18.2033 80.7081 17.998 80.7081 17.746C80.7081 17.4193 80.5914 17.1487 80.3581 16.934C80.1248 16.71 79.7001 16.598 79.0841 16.598C78.4868 16.598 78.0108 16.7147 77.6561 16.948C77.3014 17.1813 77.1288 17.5407 77.1381 18.026L75.7801 17.886C75.7988 17.1113 76.1068 16.5187 76.7041 16.108C77.3108 15.688 78.1041 15.478 79.0841 15.478C80.0641 15.478 80.8154 15.674 81.3381 16.066C81.8701 16.458 82.1361 17.0553 82.1361 17.858V21.834C82.1361 22.114 82.1874 22.296 82.2901 22.38C82.3928 22.464 82.5048 22.506 82.6261 22.506C82.7008 22.506 82.7568 22.506 82.7941 22.506C82.8314 22.4967 82.8548 22.4873 82.8641 22.478H82.9481V23.5C82.8548 23.5373 82.7288 23.5653 82.5701 23.584C82.4208 23.6027 82.3088 23.612 82.2341 23.612C81.8328 23.612 81.5061 23.514 81.2541 23.318C81.0114 23.122 80.8901 22.8233 80.8901 22.422V22.17C80.6941 22.6087 80.3394 22.9633 79.8261 23.234C79.3128 23.5047 78.7341 23.64 78.0901 23.64ZM78.4541 22.492C79.0141 22.492 79.4948 22.3753 79.8961 22.142C80.3068 21.8993 80.5821 21.5633 80.7221 21.134V19.496C80.6101 19.552 80.4608 19.6033 80.2741 19.65C80.0968 19.6967 79.8681 19.748 79.5881 19.804L78.4261 20.042C77.8381 20.1633 77.4461 20.3407 77.2501 20.574C77.0634 20.8073 76.9701 21.0593 76.9701 21.33C76.9701 21.7313 77.1101 22.0253 77.3901 22.212C77.6701 22.3987 78.0248 22.492 78.4541 22.492ZM87.5685 23.64C86.5792 23.64 85.7859 23.4113 85.1885 22.954C84.5912 22.4967 84.2785 21.8667 84.2505 21.064L85.6505 20.91C85.6505 21.3953 85.8279 21.792 86.1825 22.1C86.5372 22.408 87.0132 22.562 87.6105 22.562C88.1239 22.562 88.5345 22.4733 88.8425 22.296C89.1599 22.1093 89.3185 21.8013 89.3185 21.372C89.3185 21.0267 89.2112 20.7747 88.9965 20.616C88.7912 20.448 88.5065 20.3267 88.1425 20.252C87.7785 20.168 87.3725 20.0793 86.9245 19.986C86.1219 19.8087 85.5292 19.5427 85.1465 19.188C84.7732 18.824 84.5865 18.3387 84.5865 17.732C84.5865 17.0507 84.8572 16.5047 85.3985 16.094C85.9399 15.6833 86.6632 15.478 87.5685 15.478C88.4832 15.478 89.2205 15.6787 89.7805 16.08C90.3405 16.4813 90.6439 17.0833 90.6905 17.886L89.3045 18.068C89.3045 17.6107 89.1599 17.242 88.8705 16.962C88.5812 16.682 88.1332 16.542 87.5265 16.542C87.0505 16.542 86.6819 16.6447 86.4205 16.85C86.1685 17.046 86.0425 17.3027 86.0425 17.62C86.0425 18.0213 86.2152 18.3107 86.5605 18.488C86.9152 18.6653 87.4799 18.8287 88.2545 18.978C88.7865 19.0713 89.2392 19.202 89.6125 19.37C89.9952 19.538 90.2892 19.776 90.4945 20.084C90.6999 20.392 90.8025 20.8073 90.8025 21.33C90.8025 22.0207 90.5365 22.5807 90.0045 23.01C89.4819 23.43 88.6699 23.64 87.5685 23.64ZM96.4021 23.64C95.6461 23.64 94.9834 23.4813 94.4141 23.164C93.8541 22.8373 93.4154 22.3707 93.0981 21.764C92.7901 21.1573 92.6361 20.4247 92.6361 19.566C92.6361 18.7447 92.7808 18.0307 93.0701 17.424C93.3688 16.808 93.7934 16.332 94.3441 15.996C94.8948 15.6507 95.5621 15.478 96.3461 15.478C97.0928 15.478 97.7368 15.6413 98.2781 15.968C98.8288 16.2947 99.2441 16.7893 99.5241 17.452C99.8041 18.1053 99.9114 18.9267 99.8461 19.916H94.0641C94.1108 20.7653 94.3348 21.4 94.7361 21.82C95.1468 22.24 95.7068 22.45 96.4161 22.45C96.9948 22.45 97.4614 22.3193 97.8161 22.058C98.1708 21.7967 98.3901 21.4327 98.4741 20.966L99.7481 21.26C99.6081 21.9693 99.2394 22.5433 98.6421 22.982C98.0541 23.4207 97.3074 23.64 96.4021 23.64ZM96.3181 16.612C95.7394 16.612 95.2448 16.7893 94.8341 17.144C94.4328 17.4893 94.1854 18.054 94.0921 18.838H98.3761C98.3854 18.166 98.2081 17.6293 97.8441 17.228C97.4894 16.8173 96.9808 16.612 96.3181 16.612ZM104.773 23.64C103.784 23.64 102.991 23.4113 102.393 22.954C101.796 22.4967 101.483 21.8667 101.455 21.064L102.855 20.91C102.855 21.3953 103.033 21.792 103.387 22.1C103.742 22.408 104.218 22.562 104.815 22.562C105.329 22.562 105.739 22.4733 106.047 22.296C106.365 22.1093 106.523 21.8013 106.523 21.372C106.523 21.0267 106.416 20.7747 106.201 20.616C105.996 20.448 105.711 20.3267 105.347 20.252C104.983 20.168 104.577 20.0793 104.129 19.986C103.327 19.8087 102.734 19.5427 102.351 19.188C101.978 18.824 101.791 18.3387 101.791 17.732C101.791 17.0507 102.062 16.5047 102.603 16.094C103.145 15.6833 103.868 15.478 104.773 15.478C105.688 15.478 106.425 15.6787 106.985 16.08C107.545 16.4813 107.849 17.0833 107.895 17.886L106.509 18.068C106.509 17.6107 106.365 17.242 106.075 16.962C105.786 16.682 105.338 16.542 104.731 16.542C104.255 16.542 103.887 16.6447 103.625 16.85C103.373 17.046 103.247 17.3027 103.247 17.62C103.247 18.0213 103.42 18.3107 103.765 18.488C104.12 18.6653 104.685 18.8287 105.459 18.978C105.991 19.0713 106.444 19.202 106.817 19.37C107.2 19.538 107.494 19.776 107.699 20.084C107.905 20.392 108.007 20.8073 108.007 21.33C108.007 22.0207 107.741 22.5807 107.209 23.01C106.687 23.43 105.875 23.64 104.773 23.64Z"
                                    fill="#514443"/>
                            </g>
                        </g>
                        <defs>
                            <filter id="filter0_ddii_597_2901" x="0" y="0" width="123" height="38"
                                    filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                <feColorMatrix in="SourceAlpha" type="matrix"
                                               values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                <feOffset dy="1"/>
                                <feGaussianBlur stdDeviation="1"/>
                                <feComposite in2="hardAlpha" operator="out"/>
                                <feColorMatrix type="matrix"
                                               values="0 0 0 0 0.4 0 0 0 0 0.359477 0 0 0 0 0.321569 0 0 0 0.06 0"/>
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_597_2901"/>
                                <feColorMatrix in="SourceAlpha" type="matrix"
                                               values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                <feOffset dy="1"/>
                                <feGaussianBlur stdDeviation="1.25"/>
                                <feComposite in2="hardAlpha" operator="out"/>
                                <feColorMatrix type="matrix"
                                               values="0 0 0 0 0.0941176 0 0 0 0 0.0738562 0 0 0 0 0.054902 0 0 0 0.1 0"/>
                                <feBlend mode="normal" in2="effect1_dropShadow_597_2901"
                                         result="effect2_dropShadow_597_2901"/>
                                <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_597_2901"
                                         result="shape"/>
                                <feColorMatrix in="SourceAlpha" type="matrix"
                                               values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                <feOffset/>
                                <feGaussianBlur stdDeviation="0.75"/>
                                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                                <feColorMatrix type="matrix"
                                               values="0 0 0 0 0.0941176 0 0 0 0 0.0738562 0 0 0 0 0.054902 0 0 0 0.32 0"/>
                                <feBlend mode="normal" in2="shape" result="effect3_innerShadow_597_2901"/>
                                <feColorMatrix in="SourceAlpha" type="matrix"
                                               values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                <feOffset dy="-1"/>
                                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                                <feColorMatrix type="matrix"
                                               values="0 0 0 0 0.0941176 0 0 0 0 0.0738562 0 0 0 0 0.054902 0 0 0 0.1 0"/>
                                <feBlend mode="normal" in2="effect3_innerShadow_597_2901"
                                         result="effect4_innerShadow_597_2901"/>
                            </filter>
                            <filter id="filter1_f_597_2901" x="-237.909" y="-8.61652" width="597.87" height="34.802"
                                    filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                                <feGaussianBlur stdDeviation="0.988374" result="effect1_foregroundBlur_597_2901"/>
                            </filter>
                            <filter id="filter2_f_597_2901" x="-237.909" y="-1.40167" width="597.87" height="34.802"
                                    filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                                <feGaussianBlur stdDeviation="0.988374" result="effect1_foregroundBlur_597_2901"/>
                            </filter>
                            <filter id="filter3_f_597_2901" x="-237.909" y="5.81708" width="597.87" height="34.802"
                                    filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                                <feGaussianBlur stdDeviation="0.988374" result="effect1_foregroundBlur_597_2901"/>
                            </filter>
                            <filter id="filter4_f_597_2901" x="-237.909" y="13.0319" width="597.87" height="34.802"
                                    filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                                <feGaussianBlur stdDeviation="0.988374" result="effect1_foregroundBlur_597_2901"/>
                            </filter>
                            <filter id="filter5_f_597_2901" x="-237.909" y="20.2468" width="597.87" height="34.802"
                                    filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                                <feGaussianBlur stdDeviation="0.988374" result="effect1_foregroundBlur_597_2901"/>
                            </filter>
                            <filter id="filter6_f_597_2901" x="-237.909" y="-15.8314" width="597.87" height="34.802"
                                    filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                                <feGaussianBlur stdDeviation="0.988374" result="effect1_foregroundBlur_597_2901"/>
                            </filter>
                            <filter id="filter7_f_597_2901" x="-237.909" y="-23.0462" width="597.87" height="34.802"
                                    filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                                <feGaussianBlur stdDeviation="0.988374" result="effect1_foregroundBlur_597_2901"/>
                            </filter>
                            <linearGradient id="paint0_linear_597_2901" x1="61.5" y1="1.5" x2="61.5" y2="34.5"
                                            gradientUnits="userSpaceOnUse">
                                <stop offset="0.05" stop-color="#EAE0D7"/>
                                <stop offset="1" stop-color="#F6F2EF"/>
                            </linearGradient>
                            <clipPath id="clip0_597_2901">
                                <path
                                    d="M2.5 9.5C2.5 5.08172 6.08172 1.5 10.5 1.5H112.5C116.918 1.5 120.5 5.08172 120.5 9.5V26.5C120.5 30.9183 116.918 34.5 112.5 34.5H10.5C6.08172 34.5 2.5 30.9183 2.5 26.5V9.5Z"
                                    fill="white"/>
                            </clipPath>
                            <clipPath id="clip1_597_2901">
                                <rect width="16" height="16" fill="white" transform="translate(13.5 10)"/>
                            </clipPath>
                        </defs>
                    </svg>

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
                                                                    className="rounded-[10px] p-[10px] bg-[#F9F9F9] text-[#666] border border-[#EDEDED] font-grotesk text-[13px] tablet:text-[16px] leading-[150%] tracking-[-2%]"
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
                    relative w-full shrink-0
                    max-w-full
                    tablet:max-w-[560px]
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