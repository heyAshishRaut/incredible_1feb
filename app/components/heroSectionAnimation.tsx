"use client"

import { useRive } from "@rive-app/react-canvas"

export default function HeroSectionAnimation() {
    const { RiveComponent } = useRive({
        src: "/rive/IncredibleHero.riv",
        autoplay: true,
    })

    return (
        <div className="w-full h-full">
            <RiveComponent />
        </div>
    )
}
