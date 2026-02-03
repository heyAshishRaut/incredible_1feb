import feature1 from "@/public/feature/feature1.png"
import feature2 from "@/public/feature/feature1_2.png"
import feature3 from "@/public/feature/feature3.png"
import feature4 from "@/public/feature/feature4.png"
import feature5 from "@/public/feature/feature5.png"
import feature6 from "@/public/feature/featurethird.png"
import Image from "next/image"
import Testimonial from "@/app/components/testimonials"

const Features = () => {
    return (
        <div className={`w-full flex flex-col`}>
            <div className={`w-full h-[60px] tablet:h-[80px] laptop:h-[100px] desktop:h-[120px] bg-white`}></div>
            <div className={`w-full bg-[#F5F5F5] border border-[#F0F0F0] flex flex-col items-center mx-auto px-[30px] tablet:px-[40px] laptop:px-[100px] desktop:px-[120px]`}>
                <div className={`pt-10 w-full max-w-[450px] tablet:max-w-[900px] laptop:max-w-[1240px] desktop:max-w-[1472px] bg-white`}>
                    <div className={`w-full flex flex-col items-center gap-y-[50px]`}>
                        <div className={`w-full p-2.5 tablet:p-0 max-w-[400px] tablet:max-w-[560px] flex flex-col items-center gap-y-[24px]`}>
                            <svg width="111" height="38" viewBox="0 0 111 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g filter="url(#filter0_ddii_597_4251)">
                                    <g clip-path="url(#clip0_597_4251)">
                                        <path d="M2.5 9.5C2.5 5.08172 6.08172 1.5 10.5 1.5H100.5C104.918 1.5 108.5 5.08172 108.5 9.5V26.5C108.5 30.9183 104.918 34.5 100.5 34.5H10.5C6.08172 34.5 2.5 30.9183 2.5 26.5V9.5Z" fill="white"/>
                                        <path d="M2.5 9.5C2.5 5.08172 6.08172 1.5 10.5 1.5H100.5C104.918 1.5 108.5 5.08172 108.5 9.5V26.5C108.5 30.9183 104.918 34.5 100.5 34.5H10.5C6.08172 34.5 2.5 30.9183 2.5 26.5V9.5Z" fill="url(#paint0_linear_597_4251)"/>
                                        <g clip-path="url(#clip1_597_4251)">
                                            <path opacity="0.1" d="M23.5264 14.1699C23.6923 14.709 24.1017 15.1392 24.6318 15.332L26.4688 16L24.6318 16.668C24.1017 16.8608 23.6922 17.2908 23.5264 17.8301L22.834 20.0791L22.1426 17.8301C21.9766 17.2908 21.5673 16.8607 21.0371 16.668L19.1992 16L21.0371 15.332C21.5673 15.1393 21.9766 14.709 22.1426 14.1699L22.834 11.9199L23.5264 14.1699Z" fill="#FAF7F6" stroke="#514443" stroke-width="0.933333"/>
                                            <path d="M27.5012 16.1211L24.7915 17.1065C24.3987 17.2493 24.0956 17.568 23.9728 17.9674L22.9371 21.3332C22.906 21.4342 22.7631 21.4342 22.732 21.3332L21.6964 17.9674C21.5734 17.568 21.2704 17.2493 20.8776 17.1065L18.1679 16.1211C18.0547 16.08 18.0547 15.9198 18.1679 15.8787L20.8776 14.8933C21.2704 14.7505 21.5734 14.4318 21.6964 14.0324L22.732 10.6666C22.7631 10.5656 22.906 10.5656 22.9371 10.6666L23.9728 14.0324C24.0956 14.4318 24.3987 14.7505 24.7915 14.8933L27.5012 15.8787C27.6144 15.9198 27.6144 16.08 27.5012 16.1211Z" fill="#FAF7F6" stroke="#514443" stroke-width="0.933333" stroke-linecap="round" stroke-linejoin="round"/>
                                            <path d="M16 11.5C16.3148 11.6049 16.5618 11.8519 16.6667 12.1667C16.7201 12.3268 16.9466 12.3268 17 12.1667C17.1049 11.8519 17.3519 11.6049 17.6667 11.5C17.8268 11.4466 17.8268 11.2201 17.6667 11.1667C17.3519 11.0618 17.1049 10.8148 17 10.5C16.9466 10.3398 16.7201 10.3398 16.6667 10.5C16.5618 10.8148 16.3148 11.0618 16 11.1667C15.8398 11.2201 15.8398 11.4466 16 11.5Z" fill="#FAF7F6" stroke="#514443" stroke-width="0.933333" stroke-linecap="round" stroke-linejoin="round"/>
                                            <path d="M18.3337 20.834C18.0189 20.939 17.7719 21.186 17.667 21.5007C17.6136 21.6609 17.3871 21.6609 17.3337 21.5007C17.2287 21.186 16.9818 20.939 16.667 20.834C16.5068 20.7806 16.5068 20.5541 16.667 20.5007C16.9818 20.3958 17.2287 20.1488 17.3337 19.834C17.3871 19.6738 17.6136 19.6738 17.667 19.834C17.7719 20.1488 18.0189 20.3958 18.3337 20.5007C18.4938 20.5541 18.4938 20.7806 18.3337 20.834Z" fill="#FAF7F6" stroke="#514443" stroke-width="0.933333" stroke-linecap="round" stroke-linejoin="round"/>
                                        </g>
                                        <path d="M34.704 23.5V13.294H41.872V14.582H36.16V17.774H41.214V19.034H36.16V23.5H34.704ZM46.9345 23.64C46.1785 23.64 45.5159 23.4813 44.9465 23.164C44.3865 22.8373 43.9479 22.3707 43.6305 21.764C43.3225 21.1573 43.1685 20.4247 43.1685 19.566C43.1685 18.7447 43.3132 18.0307 43.6025 17.424C43.9012 16.808 44.3259 16.332 44.8765 15.996C45.4272 15.6507 46.0945 15.478 46.8785 15.478C47.6252 15.478 48.2692 15.6413 48.8105 15.968C49.3612 16.2947 49.7765 16.7893 50.0565 17.452C50.3365 18.1053 50.4439 18.9267 50.3785 19.916H44.5965C44.6432 20.7653 44.8672 21.4 45.2685 21.82C45.6792 22.24 46.2392 22.45 46.9485 22.45C47.5272 22.45 47.9939 22.3193 48.3485 22.058C48.7032 21.7967 48.9225 21.4327 49.0065 20.966L50.2805 21.26C50.1405 21.9693 49.7719 22.5433 49.1745 22.982C48.5865 23.4207 47.8399 23.64 46.9345 23.64ZM46.8505 16.612C46.2719 16.612 45.7772 16.7893 45.3665 17.144C44.9652 17.4893 44.7179 18.054 44.6245 18.838H48.9085C48.9179 18.166 48.7405 17.6293 48.3765 17.228C48.0219 16.8173 47.5132 16.612 46.8505 16.612ZM54.6483 23.64C53.827 23.64 53.1876 23.4393 52.7303 23.038C52.2823 22.6273 52.0583 22.0953 52.0583 21.442C52.0583 20.9193 52.175 20.4947 52.4083 20.168C52.651 19.8413 52.9636 19.5893 53.3463 19.412C53.729 19.2253 54.1443 19.09 54.5923 19.006L56.2443 18.698C56.6643 18.6233 56.9396 18.5113 57.0703 18.362C57.201 18.2033 57.2663 17.998 57.2663 17.746C57.2663 17.4193 57.1496 17.1487 56.9163 16.934C56.683 16.71 56.2583 16.598 55.6423 16.598C55.045 16.598 54.569 16.7147 54.2143 16.948C53.8596 17.1813 53.687 17.5407 53.6963 18.026L52.3383 17.886C52.357 17.1113 52.665 16.5187 53.2623 16.108C53.869 15.688 54.6623 15.478 55.6423 15.478C56.6223 15.478 57.3736 15.674 57.8963 16.066C58.4283 16.458 58.6943 17.0553 58.6943 17.858V21.834C58.6943 22.114 58.7456 22.296 58.8483 22.38C58.951 22.464 59.063 22.506 59.1843 22.506C59.259 22.506 59.315 22.506 59.3523 22.506C59.3896 22.4967 59.413 22.4873 59.4223 22.478H59.5063V23.5C59.413 23.5373 59.287 23.5653 59.1283 23.584C58.979 23.6027 58.867 23.612 58.7923 23.612C58.391 23.612 58.0643 23.514 57.8123 23.318C57.5696 23.122 57.4483 22.8233 57.4483 22.422V22.17C57.2523 22.6087 56.8976 22.9633 56.3843 23.234C55.871 23.5047 55.2923 23.64 54.6483 23.64ZM55.0123 22.492C55.5723 22.492 56.053 22.3753 56.4543 22.142C56.865 21.8993 57.1403 21.5633 57.2803 21.134V19.496C57.1683 19.552 57.019 19.6033 56.8323 19.65C56.655 19.6967 56.4263 19.748 56.1463 19.804L54.9843 20.042C54.3963 20.1633 54.0043 20.3407 53.8083 20.574C53.6216 20.8073 53.5283 21.0593 53.5283 21.33C53.5283 21.7313 53.6683 22.0253 53.9483 22.212C54.2283 22.3987 54.583 22.492 55.0123 22.492ZM63.2734 23.598C62.2001 23.598 61.6634 23.1547 61.6634 22.268V16.738H60.6134V15.618H61.6634V13.42L63.0634 13.28V15.618H64.3374V16.738H63.0634V21.68C63.0634 21.9693 63.1054 22.1607 63.1894 22.254C63.2827 22.3473 63.4601 22.394 63.7214 22.394C63.9921 22.394 64.1974 22.3753 64.3374 22.338V23.486C64.1321 23.5233 63.9407 23.5513 63.7634 23.57C63.5861 23.5887 63.4227 23.598 63.2734 23.598ZM69.0917 23.64C68.1864 23.64 67.4957 23.3973 67.0197 22.912C66.5437 22.4173 66.3057 21.764 66.3057 20.952V15.618H67.7477V20.826C67.7477 21.3113 67.8971 21.6893 68.1957 21.96C68.4944 22.2213 68.8911 22.352 69.3857 22.352C70.0111 22.352 70.5151 22.17 70.8977 21.806C71.2804 21.442 71.4717 20.966 71.4717 20.378V15.618H72.9137V23.5H71.5837L71.5137 22.31C71.2711 22.7207 70.9304 23.0473 70.4917 23.29C70.0624 23.5233 69.5957 23.64 69.0917 23.64ZM75.6053 23.5V15.618H76.8933L76.9773 16.78C77.1827 16.3787 77.444 16.0707 77.7613 15.856C78.088 15.6413 78.4613 15.534 78.8813 15.534C79.1707 15.534 79.3853 15.562 79.5253 15.618V16.976H79.4273C79.278 16.92 79.096 16.892 78.8813 16.892C78.3493 16.892 77.92 17.0553 77.5933 17.382C77.276 17.7087 77.094 18.1473 77.0473 18.698V23.5H75.6053ZM84.4091 23.64C83.6531 23.64 82.9905 23.4813 82.4211 23.164C81.8611 22.8373 81.4225 22.3707 81.1051 21.764C80.7971 21.1573 80.6431 20.4247 80.6431 19.566C80.6431 18.7447 80.7878 18.0307 81.0771 17.424C81.3758 16.808 81.8005 16.332 82.3511 15.996C82.9018 15.6507 83.5691 15.478 84.3531 15.478C85.0998 15.478 85.7438 15.6413 86.2851 15.968C86.8358 16.2947 87.2511 16.7893 87.5311 17.452C87.8111 18.1053 87.9185 18.9267 87.8531 19.916H82.0711C82.1178 20.7653 82.3418 21.4 82.7431 21.82C83.1538 22.24 83.7138 22.45 84.4231 22.45C85.0018 22.45 85.4685 22.3193 85.8231 22.058C86.1778 21.7967 86.3971 21.4327 86.4811 20.966L87.7551 21.26C87.6151 21.9693 87.2465 22.5433 86.6491 22.982C86.0611 23.4207 85.3145 23.64 84.4091 23.64ZM84.3251 16.612C83.7465 16.612 83.2518 16.7893 82.8411 17.144C82.4398 17.4893 82.1925 18.054 82.0991 18.838H86.3831C86.3925 18.166 86.2151 17.6293 85.8511 17.228C85.4965 16.8173 84.9878 16.612 84.3251 16.612ZM92.7803 23.64C91.7909 23.64 90.9976 23.4113 90.4003 22.954C89.8029 22.4967 89.4903 21.8667 89.4623 21.064L90.8623 20.91C90.8623 21.3953 91.0396 21.792 91.3943 22.1C91.7489 22.408 92.2249 22.562 92.8223 22.562C93.3356 22.562 93.7463 22.4733 94.0543 22.296C94.3716 22.1093 94.5303 21.8013 94.5303 21.372C94.5303 21.0267 94.4229 20.7747 94.2083 20.616C94.0029 20.448 93.7183 20.3267 93.3543 20.252C92.9903 20.168 92.5843 20.0793 92.1363 19.986C91.3336 19.8087 90.7409 19.5427 90.3583 19.188C89.9849 18.824 89.7983 18.3387 89.7983 17.732C89.7983 17.0507 90.0689 16.5047 90.6103 16.094C91.1516 15.6833 91.8749 15.478 92.7803 15.478C93.6949 15.478 94.4323 15.6787 94.9923 16.08C95.5523 16.4813 95.8556 17.0833 95.9023 17.886L94.5163 18.068C94.5163 17.6107 94.3716 17.242 94.0823 16.962C93.7929 16.682 93.3449 16.542 92.7383 16.542C92.2623 16.542 91.8936 16.6447 91.6323 16.85C91.3803 17.046 91.2543 17.3027 91.2543 17.62C91.2543 18.0213 91.4269 18.3107 91.7723 18.488C92.1269 18.6653 92.6916 18.8287 93.4663 18.978C93.9983 19.0713 94.4509 19.202 94.8243 19.37C95.2069 19.538 95.5009 19.776 95.7063 20.084C95.9116 20.392 96.0143 20.8073 96.0143 21.33C96.0143 22.0207 95.7483 22.5807 95.2163 23.01C94.6936 23.43 93.8816 23.64 92.7803 23.64Z" fill="#514443"/>
                                        <g opacity="0.7">
                                            <g opacity="0.5">
                                                <g filter="url(#filter1_f_597_4251)">
                                                    <path d="M-241.812 14.253C-241.812 14.253 -102.837 37.4303 46.0049 10.2676C230.741 -23.4454 351.811 6.03317 351.811 6.03317" stroke="white" stroke-width="1.48256"/>
                                                </g>
                                                <g filter="url(#filter2_f_597_4251)">
                                                    <path d="M-241.812 21.4679C-241.812 21.4679 -102.837 44.6452 46.0049 17.4825C230.741 -16.2305 351.811 13.248 351.811 13.248" stroke="white" stroke-width="1.48256"/>
                                                </g>
                                                <g filter="url(#filter3_f_597_4251)">
                                                    <path d="M-241.812 28.6866C-241.812 28.6866 -102.837 51.8639 46.0049 24.7012C230.741 -9.01181 351.811 20.4668 351.811 20.4668" stroke="white" stroke-width="1.48256"/>
                                                </g>
                                                <g filter="url(#filter4_f_597_4251)">
                                                    <path d="M-241.812 35.9014C-241.812 35.9014 -102.837 59.0788 46.0049 31.9161C230.741 -1.79697 351.811 27.6816 351.811 27.6816" stroke="white" stroke-width="1.48256"/>
                                                </g>
                                                <g filter="url(#filter5_f_597_4251)">
                                                    <path d="M-241.812 43.1163C-241.812 43.1163 -102.837 66.2936 46.0049 39.1309C230.741 5.41792 351.811 34.8964 351.811 34.8964" stroke="white" stroke-width="1.48256"/>
                                                </g>
                                                <g filter="url(#filter6_f_597_4251)">
                                                    <path d="M-241.812 7.03815C-241.812 7.03815 -102.837 30.2155 46.0049 3.0528C230.741 -30.6602 351.811 -1.18165 351.811 -1.18165" stroke="white" stroke-width="1.48256"/>
                                                </g>
                                                <g filter="url(#filter7_f_597_4251)">
                                                    <path d="M-241.812 -0.176686C-241.812 -0.176686 -102.837 23.0006 46.0049 -4.16204C230.741 -37.8751 351.811 -8.3965 351.811 -8.3965" stroke="white" stroke-width="1.48256"/>
                                                </g>
                                            </g>
                                        </g>
                                    </g>
                                </g>
                                <defs>
                                    <filter id="filter0_ddii_597_4251" x="0" y="0" width="111" height="38" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                        <feOffset dy="1"/>
                                        <feGaussianBlur stdDeviation="1"/>
                                        <feComposite in2="hardAlpha" operator="out"/>
                                        <feColorMatrix type="matrix" values="0 0 0 0 0.4 0 0 0 0 0.359477 0 0 0 0 0.321569 0 0 0 0.06 0"/>
                                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_597_4251"/>
                                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                        <feOffset dy="1"/>
                                        <feGaussianBlur stdDeviation="1.25"/>
                                        <feComposite in2="hardAlpha" operator="out"/>
                                        <feColorMatrix type="matrix" values="0 0 0 0 0.0941176 0 0 0 0 0.0738562 0 0 0 0 0.054902 0 0 0 0.1 0"/>
                                        <feBlend mode="normal" in2="effect1_dropShadow_597_4251" result="effect2_dropShadow_597_4251"/>
                                        <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_597_4251" result="shape"/>
                                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                        <feOffset/>
                                        <feGaussianBlur stdDeviation="0.75"/>
                                        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                                        <feColorMatrix type="matrix" values="0 0 0 0 0.0941176 0 0 0 0 0.0738562 0 0 0 0 0.054902 0 0 0 0.32 0"/>
                                        <feBlend mode="normal" in2="shape" result="effect3_innerShadow_597_4251"/>
                                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                        <feOffset dy="-1"/>
                                        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                                        <feColorMatrix type="matrix" values="0 0 0 0 0.0941176 0 0 0 0 0.0738562 0 0 0 0 0.054902 0 0 0 0.1 0"/>
                                        <feBlend mode="normal" in2="effect3_innerShadow_597_4251" result="effect4_innerShadow_597_4251"/>
                                    </filter>
                                    <filter id="filter1_f_597_4251" x="-243.909" y="-8.6164" width="597.87" height="34.8016" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                                        <feGaussianBlur stdDeviation="0.988374" result="effect1_foregroundBlur_597_4251"/>
                                    </filter>
                                    <filter id="filter2_f_597_4251" x="-243.909" y="-1.40155" width="597.87" height="34.8021" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                                        <feGaussianBlur stdDeviation="0.988374" result="effect1_foregroundBlur_597_4251"/>
                                    </filter>
                                    <filter id="filter3_f_597_4251" x="-243.909" y="5.8172" width="597.87" height="34.8021" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                                        <feGaussianBlur stdDeviation="0.988374" result="effect1_foregroundBlur_597_4251"/>
                                    </filter>
                                    <filter id="filter4_f_597_4251" x="-243.909" y="13.032" width="597.87" height="34.8021" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                                        <feGaussianBlur stdDeviation="0.988374" result="effect1_foregroundBlur_597_4251"/>
                                    </filter>
                                    <filter id="filter5_f_597_4251" x="-243.909" y="20.2469" width="597.87" height="34.8016" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                                        <feGaussianBlur stdDeviation="0.988374" result="effect1_foregroundBlur_597_4251"/>
                                    </filter>
                                    <filter id="filter6_f_597_4251" x="-243.909" y="-15.8312" width="597.87" height="34.8021" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                                        <feGaussianBlur stdDeviation="0.988374" result="effect1_foregroundBlur_597_4251"/>
                                    </filter>
                                    <filter id="filter7_f_597_4251" x="-243.909" y="-23.0461" width="597.87" height="34.8021" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                                        <feGaussianBlur stdDeviation="0.988374" result="effect1_foregroundBlur_597_4251"/>
                                    </filter>
                                    <linearGradient id="paint0_linear_597_4251" x1="55.5" y1="1.5" x2="55.5" y2="34.5" gradientUnits="userSpaceOnUse">
                                        <stop offset="0.05" stop-color="#EAE0D7"/>
                                        <stop offset="1" stop-color="#F6F2EF"/>
                                    </linearGradient>
                                    <clipPath id="clip0_597_4251">
                                        <path d="M2.5 9.5C2.5 5.08172 6.08172 1.5 10.5 1.5H100.5C104.918 1.5 108.5 5.08172 108.5 9.5V26.5C108.5 30.9183 104.918 34.5 100.5 34.5H10.5C6.08172 34.5 2.5 30.9183 2.5 26.5V9.5Z" fill="white"/>
                                    </clipPath>
                                    <clipPath id="clip1_597_4251">
                                        <rect width="16" height="16" fill="white" transform="translate(13.5 10)"/>
                                    </clipPath>
                                </defs>
                            </svg>

                            <div className={`flex flex-col gap-y-[14px]`}>
                                <div className={`text-center text-[22px] tablet:text-[26px] laptop:text-[36px]  leading-[118%] tracking-[-2%] font-grotesk font-medium`}>Why Teams choose Incredible</div>
                                <div className={`text-center font-grotesk text-[14px] tablet:text-[16px] leading-[150%] tracking-[-2%] text-[#666]`}>World-class Agentic AI Models capable of thinking, planning and acting.</div>
                            </div>
                        </div>

                        <div className={`h-full w-full flex flex-col items-center bg-[#F5F5F5]`}>
                            <div className={`w-full flex flex-col items-center justify-center tablet:flex-row  tablet:border border-[#F0F0F0]`}>
                                <div className="w-full max-w-[450px] tablet:max-w-1/2 flex flex-col bg-[#FBFAF9] border tablet:border-r border-[#F0F0F0]">
                                    <div className="tablet:h-[150px] p-4 w-full flex flex-col justify-start gap-y-2 tablet:gap-y-[14px] px-[15px] tablet:px-[22px] laptop:px-[33px]">
                                        <div className="font-grotesk text-[15px] tablet:text-[17px] laptop:text-[20px] font-medium leading-[100%] tracking-[-1%]">
                                            Unmatched function calling accuracy
                                        </div>
                                        <div className="w-full laptop:w-[85%] max-w-[450px] tablet:max-w-[554px] text-[#666] font-grotesk text-[14px] tablet:text-[15px] leading-[150%] tracking-[-2%]">
                                            Models that think before they act. Sophisticated problem-solving and logical decision-making for complex challenges
                                        </div>
                                    </div>

                                    <div className="relative w-full aspect-[4/3] tablet:aspect-[5/3] laptop:aspect-[3/2] overflow-hidden">
                                        <Image
                                            src={feature1}
                                            alt="Illustration of advanced function calling and reasoning in AI models"
                                            fill
                                            className="object-cover"
                                            priority
                                            sizes="(max-width: 809px) 450px, (max-width: 1199px) 50vw, 40vw"
                                        />
                                    </div>
                                </div>

                                <div className="border border-[#F0F0F0] h-full w-full max-w-[450px] tablet:max-w-1/2 flex flex-col bg-[#FBFAF9]">
                                    <div className="tablet:h-[150px] p-4 w-full flex flex-col justify-start gap-y-2 tablet:gap-y-[14px] px-[15px] tablet:px-[22px] laptop:px-[33px]">
                                        <div className="font-grotesk text-[15px] tablet:text-[17px] laptop:text-[20px] font-medium leading-[100%] tracking-[-1%]">
                                            SDKs for every stack
                                        </div>
                                        <div className="laptop:w-[85%] w-full max-w-[450px] tablet:max-w-[554px] text-[#666] font-grotesk text-[14px] tablet:text-[15px] leading-[150%] tracking-[-2%]">
                                            Converting raw data into actionable insights and clean, usable formats
                                        </div>
                                    </div>

                                    <div className="relative w-full aspect-[4/3] tablet:aspect-[5/3] laptop:aspect-[3/2] overflow-hidden rounded-t-xl">
                                        <Image
                                            src={feature2}
                                            alt="Feature illustration of SDK integrations"
                                            fill
                                            className="object-cover"
                                            priority
                                            sizes="(max-width: 809px) 450px, (max-width: 1199px) 50vw, 40vw"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div style={{ backgroundImage: `url(${feature3.src})` }} className={`bg-cover bg-center w-full max-w-[450px] tablet:max-w-full h-[600px] p-4 tablet:p-[32px] flex flex-col justify-start gap-y-16 tablet:gap-y-0 tablet:justify-between items-start`}>
                                <div className={`flex flex-col gap-y-3`}>
                                    <div className={`text-[16px] tablet:text-[18px] laptop:text-[20px] font-grotesk font-medium text-white leading-[100%] tracking-[-1%]`}>Built for agents, not just chat</div>
                                    <div className={`font-grotesk leading-[150%] tracking-[-2%] text-[#B2B2B2] text-[14px] tablet:text-[16px]`}>Autonomous execution of multi-step processes</div>
                                </div>
                                <Testimonial/>
                            </div>

                            <div className="min-h-full bg-[#fcfaf7] border border-[#F0F0F0] w-full flex flex-col items-center tablet:items-stretch  justify-center tablet:flex-row laptop:flex-nowrap">

                                <div className="border-b tablet:border-b-0 tablet:border-r border-[#F0F0F0] w-full max-w-[450px] tablet:w-1/2 laptop:w-1/3 flex flex-col">
                                    {/* TEXT */}
                                    <div className="w-full px-[28px] py-[28px] flex flex-col gap-y-[14px]">
                                        <div className="font-grotesk text-[15px] tablet:text-[17px] laptop:text-[20px] font-medium leading-[100%] tracking-[-1%]">
                                            Lightweight, fast, and simple
                                        </div>
                                        <div className="font-grotesk text-[#666] text-[14px] tablet:text-[15px] laptop:text-[16px] leading-[150%] tracking-[-2%]">
                                            Converting raw data into actionable insights and clean, usable formats
                                        </div>
                                    </div>

                                    {/* IMAGE */}
                                    <div
                                        className="relative flex justify-start w-full aspect-[4/3] tablet:aspect-[5/4] laptop:aspect-[6/5] ">
                                        <Image
                                            src={feature4}
                                            alt=""
                                            fill
                                            className="object-contain tablet:object-cover object-left"
                                            sizes="(max-width: 50.625rem) 100vw, (max-width: 75rem) 50vw, 33vw"
                                        />

                                    </div>
                                </div>


                                <div className="border-b tablet:border-b-0 tablet:border-r border-[#F0F0F0]  w-full max-w-[450px] tablet:w-1/2 laptop:w-1/3 flex flex-col bg-[#FCFAF8]">
                                    <div className="w-full px-[28px] py-[28px] flex flex-col gap-y-[14px]">
                                        <div className="font-grotesk text-[15px] tablet:text-[17px] laptop:text-[20px] font-medium leading-[100%] tracking-[-1%]">
                                            SDKs for every stack
                                        </div>
                                        <div className="font-grotesk text-[#666] text-[15px] tablet:text-[14px] laptop:text-[16px] leading-[150%] tracking-[-2%]">
                                            Converting raw data into actionable insights and clean, usable formats
                                        </div>
                                    </div>

                                    <div
                                        className="relative w-full aspect-[4/3] tablet:aspect-[5/4] laptop:aspect-[6/5] ">
                                        <Image
                                            src={feature5}
                                            alt=""
                                            fill
                                            className="object-contain tablet:object-cover"
                                            sizes="(max-width: 50.625rem) 100vw, (max-width: 75rem) 50vw, 33vw"
                                        />
                                    </div>
                                </div>

                                <div className="w-full max-w-[450px] tablet:w-1/2 laptop:w-1/3 flex flex-col bg-[#FCFAF8]">
                                    <div className="w-full px-[28px] py-[28px] flex flex-col gap-y-[14px]">
                                        <div className="font-grotesk text-[15px] tablet:text-[17px] laptop:text-[20px] font-medium leading-[100%] tracking-[-1%]">
                                            Enterprise-grade reliability
                                        </div>
                                        <div className="font-grotesk text-[#666] text-[15px] tablet:text-[14px] laptop:text-[16px] leading-[150%] tracking-[-2%]">
                                            Converting raw data into actionable insights and clean, usable formats
                                        </div>
                                    </div>

                                    <div
                                        className=" relative w-full aspect-[4/3] tablet:aspect-[5/4] laptop:aspect-[6/5] ">
                                        <Image
                                            src={feature6}
                                            alt=""
                                            fill
                                            className="object-contain tablet:object-cover"
                                            sizes="(max-width: 50.625rem) 100vw, (max-width: 75rem) 50vw, 33vw"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
            <div className={`w-full h-[60px] tablet:h-[80px] laptop:h-[100px] desktop:h-[120px] bg-white`}></div>
        </div>
    )
}

export default Features