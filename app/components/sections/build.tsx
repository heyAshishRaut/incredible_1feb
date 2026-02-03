import buildSVG from "@/public/sectionIcons/buildSVG.webp"
import Image from "next/image"

const contents = [
    {
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 8C9 8 7 8.6 7 11C7 13.4 9 14 10 14M14 8C15 8 17 8.6 17 11C17 13.4 15 14 14 14M10 11H14M22 11C22 15.4183 17.5228 19 12 19C10.7008 19 9.4594 18.8018 8.32058 18.4411C6.52743 20.0213 5 21 2 21C3 20 4.27088 18.65 4.80115 16.5528C3.06674 15.114 2 13.1567 2 11C2 6.58172 6.47715 3 12 3C17.5228 3 22 6.58172 22 11Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path opacity="0.25" d="M12 19C17.5228 19 22 15.4183 22 11C22 6.58172 17.5228 3 12 3C6.47715 3 2 6.58172 2 11C2 13.1567 3.06674 15.114 4.80115 16.5528C4.27088 18.65 3 20 2 21C5 21 6.52743 20.0213 8.32058 18.4411C9.4594 18.8018 10.7008 19 12 19Z" fill="white"/>
            </svg>
        ),
        title: "Conversational AI",
        list: [
            {
                name: "Customer support assistants",
            },
            {
                name: "Internal Q&A bots",
            },
            {
                name: "Knowledge-search agents",
            },
        ]
    },
    {
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path opacity="0.1" fill-rule="evenodd" clip-rule="evenodd" d="M12 3C4.5885 3 3 4.5885 3 12C3 19.4115 4.5885 21 12 21C19.4115 21 21 19.4115 21 12C21 4.5885 19.4115 3 12 3ZM11.5 7.75C9.42893 7.75 7.75 9.42893 7.75 11.5C7.75 13.5711 9.42893 15.25 11.5 15.25C13.5711 15.25 15.25 13.5711 15.25 11.5C15.25 9.42893 13.5711 7.75 11.5 7.75Z" fill="white"/>
                <path d="M3 12C3 4.5885 4.5885 3 12 3C19.4115 3 21 4.5885 21 12C21 19.4115 19.4115 21 12 21C4.5885 21 3 19.4115 3 12Z" stroke="white" stroke-width="2"/>
                <path d="M14 14L16 16" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M15 11.5C15 13.433 13.433 15 11.5 15C9.567 15 8 13.433 8 11.5C8 9.567 9.567 8 11.5 8C13.433 8 15 9.567 15 11.5Z" stroke="white" stroke-width="2"/>
            </svg>
        ),
        title: "AI Search",
        list: [
            {
                name: "Web Search",
            },
            {
                name: "Deep research copilots",
            },
            {
                name: "Insights extraction over files",
            },
        ]
    },
    {
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.64453 10.2507L5.10547 17.6726V18.4033L11.6045 19.5954L15.7193 17.2111L22.3721 9.75079L21.0646 3.94401L16.1038 2.09814L12.5275 2.75189L5.64453 10.2507Z" fill="#3B3B3E"/>
                <path d="M20.24 12.24C21.3658 11.1142 21.9983 9.58722 21.9983 7.99504C21.9983 6.40285 21.3658 4.87588 20.24 3.75004C19.1142 2.62419 17.5872 1.9917 15.995 1.9917C14.4028 1.9917 12.8758 2.62419 11.75 3.75004L5 10.5V19H13.5L20.24 12.24Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M16 8L2 22" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M17.5 15H9" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        ),
        title: "Content Generation",
        list: [
            {
                name: "Blogs, SEO, emails",
            },
            {
                name: "Social content",
            },
            {
                name: "Image and video generation",
            },
        ]
    },
    {
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 11C12.8 11 11 17 11 20C11 12.8 5 11 2 11C9.2 11 11 5 11 2C11 9.2 17 11 20 11Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M22 19C19.6 19 19 21 19 22C19 21 18.4 19 16 19C17 19 19 18.4 19 16C19 18.4 21 19 22 19Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <g opacity="0.25">
                    <path d="M20 11C12.8 11 11 17 11 20C11 12.8 5 11 2 11C9.2 11 11 5 11 2C11 9.2 17 11 20 11Z" fill="white"/>
                    <path d="M22 19C19.6 19 19 21 19 22C19 21 18.4 19 16 19C17 19 19 18.4 19 16C19 18.4 21 19 22 19Z" fill="white"/>
                </g>
            </svg>
        ),
        title: "Automation & Agents",
        list: [
            {
                name: "Tasks executors",
            },
            {
                name: "Workflow copilots",
            },
            {
                name: "AI-powered product features",
            },
            {
                name: "Backend job runner"
            }
        ]
    },
    {
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path opacity="0.1" fill-rule="evenodd" clip-rule="evenodd" d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21ZM16.9583 11.0416L15.4234 12.5764C14.9506 13.0493 14.7453 13.7272 14.8765 14.3829L15.2455 16.2281C15.3421 16.711 14.8158 17.0765 14.397 16.8172L13.0526 15.985C12.4076 15.5857 11.5922 15.5857 10.9472 15.985L9.60277 16.8172C9.18398 17.0765 8.65768 16.711 8.75428 16.2281L9.12331 14.3829C9.25446 13.7271 9.04921 13.0493 8.57637 12.5764L6.9999 11C6.63087 10.6309 6.89223 9.99996 7.41411 9.99996H8.9412C9.77787 9.99996 10.5261 9.47917 10.8167 8.69458L11.4443 6.99996C11.6353 6.48439 12.3645 6.48439 12.5555 6.99996L13.1831 8.69458C13.4737 9.47917 14.2219 9.99996 15.0586 9.99996H16.5269C17.0704 9.99996 17.3427 10.6572 16.9583 11.0416Z" fill="white"/>
                <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="white" stroke-width="2"/>
                <path d="M16.9583 11.0416L15.4234 12.5765C14.9506 13.0493 14.7453 13.7272 14.8765 14.3829L15.1999 16L15.2455 16.2281C15.3421 16.7111 14.8158 17.0765 14.397 16.8173L13.0526 15.985C12.4076 15.5857 11.5922 15.5857 10.9472 15.985L9.60276 16.8173C9.18398 17.0765 8.65768 16.7111 8.75427 16.2281L8.79989 16L9.12331 14.3829C9.25445 13.7272 9.04921 13.0493 8.57636 12.5765L6.99989 11C6.63087 10.631 6.89222 9.99996 7.4141 9.99996H7.49989H8.9412C9.77786 9.99996 10.5261 9.47917 10.8167 8.69459L11.4443 6.99996C11.6353 6.48439 12.3645 6.48439 12.5555 6.99996L13.1831 8.69459C13.4737 9.47917 14.2219 9.99996 15.0586 9.99996H16.4999H16.5269C17.0704 9.99996 17.3427 10.6572 16.9583 11.0416Z" stroke="white" stroke-width="2" stroke-linejoin="round"/>
            </svg>
        ),
        title: "Specialized",
        list: [
            {
                name: "OCR + document ingestion",
            },
            {
                name: "Transcription",
            },
            {
                name: "File workflows (PDF, Sheets)",
            },
            {
                name: "RAG-ready embeddings"
            }
        ]
    },
]

const Build = () => {
    return (
        <div className={`w-full flex flex-col items-center py-[60px] tablet:py-20 laptop:py-25 desktop:py-[120px] px-[20px] tablet:px-[30px] laptop:px-[50px] desktop:px-[70px]`}>
            <div className={`w-full h-full flex flex-col items-center gap-y-10 tablet:gap-y-20 desktop:gap-y-[95px]`}>
                <div className={`w-full h-[210px] flex flex-col items-center gap-y-6`}>
                    <Image
                        src={buildSVG}
                        alt="Small UI image"
                        width={183}
                        height={33}
                        className="w-[183px] h-auto"
                        quality={90}
                        draggable={false}
                    />
                    <div className={`w-full max-w-[350px] tablet:max-w-[450px] laptop:max-w-[524px] desktop:max-w-[650px] h-[152px] flex flex-col gap-y-3`}>
                        <div className={`font-grotesk font-medium text-[22px] tablet:text-[26px] laptop:text-[36px] desktop:text-[43px] leading-[128%] tracking-[-2%] text-center`}>From chatbots to full agentic apps — all with one API.</div>
                        <div className={`font-grotesk text-[#666666] text-center text-[14px] tablet:text-[16px] leading-[150%] tracking-[-2%] desktop:text-[19px]`}>A production-ready API with reliable function calling, deep reasoning, high throughput, and affordable token pricing.</div>
                    </div>
                </div>
                <div className={`w-full tablet:w-[800px] laptop:w-[974px] desktop:w-[1156px] flex items-center justify-center flex-wrap gap-[22px] desktop:gap-[26px]`}>
                    {
                        contents.map((e, index) => (
                            <div key={index} className="w-[310px] desktop:w-[368px] desktop:h-[307px]  px-[24px] py-[20px] flex items-center flex-col gap-y-[24px] rounded-[16px] bg-[#FDFDFD] shadow-[0_0_0_1px_rgba(25,28,33,0.06),0_5px_10px_-2px_rgba(106,115,133,0.12),0_2px_6px_-2px_rgba(0,0,0,0.12)]">
                                <div className={`h-[52px] w-[52px] tablet:h-[56px] tablet:w-[56px] desktop:w-[67px] desktop:h-[67px] p-1 desktop:p-2 flex items-center justify-center rounded-[17px] bg-[#F0F0F0]`}>
                                    <div className={`h-full w-full aspect-square flex items-center justify-center rounded-[12px] bg-[#0D0D11] shadow-[0_2px_6px_rgba(0,0,0,0.35)]`}>
                                        {e.icon}
                                    </div>
                                </div>
                                <div className={`w-full flex flex-col gap-y-[8px] tablet:gap-y-[12px]`}>
                                    <div className={`text-[16px] tablet:text-[18px] desktop:text-[22px] text-center font-grotesk leading-[128%] tracking-[-2%]`}>{e.title}</div>
                                    <ul className={`list-disc px-[24px] flex flex-col gap-y-1`}>
                                        {
                                            e.list.map((items, i) => (
                                                <li className={`text-[#666] leading-[#150%] tracking-[-2%] font-grotesk text-[13px] tablet:text-[15px] desktop:text-[19px]`}>{items.name}</li>
                                            ))
                                        }
                                    </ul>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Build