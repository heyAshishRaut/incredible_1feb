"use client";

import {
    useRive,
    Layout,
    Fit,
    Alignment
} from "@rive-app/react-canvas";

export default function HeroSectionAnimation() {
    const { RiveComponent } = useRive({
        src: "/rive/IncredibleHero.riv",
        autoplay: true,
        layout: new Layout({
            fit: Fit.Contain,        // 🔑 MOST IMPORTANT
            alignment: Alignment.Center,
        }),
    });

    return <RiveComponent className="w-full h-full" />;
}
