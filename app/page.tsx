import HeroSection from "@/app/components/sections/heroSection"
import TrustedByTopTalent from "@/app/components/sections/trustedByTopTalent"
import UseCases from "@/app/components/sections/useCases"
import Integrations from "@/app/components/sections/integrations"
import Build from "@/app/components/sections/build"
import Integrations2 from "@/app/components/sections/integrations2"
import Features from "@/app/components/sections/features"
import Security from "@/app/components/sections/security"
import ExploreAI from "@/app/components/sections/exploreAI"
import Faq from "@/app/components/sections/faq"
import Footer from "@/app/components/sections/footer"
import Footer1 from "@/app/components/sections/footer1"
import TEMP from "@/app/components/sections/TEMP";

export default function Home() {
    return (
        <div className={`min-h-screen w-full`}>
            <HeroSection/>
            <TrustedByTopTalent/>
            <UseCases/>
            <Integrations/>
            <Integrations2/>
            <Build/>
            <Features/>
            <Security/>
            <ExploreAI/>
            <Faq/>
            {/*<Footer/>*/}
            <Footer1/>
            <TEMP/>
        </div>
    )
}
