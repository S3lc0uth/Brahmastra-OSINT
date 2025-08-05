"use client";

import { Suspense, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { motion } from "framer-motion";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Scene } from "@/components/scene";
import { TransitionLink } from "@/components/transition-link";
import { ArrowRight } from "lucide-react";

export function Hero() {
    const container = useRef(null);

    useGSAP(
        () => {
            const tl = gsap.timeline();
            tl.fromTo(
                ".hero-title span",
                { y: 100, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    stagger: 0.1,
                    duration: 1,
                    ease: "power3.out",
                }
            )
                .fromTo(
                    ".hero-subtitle",
                    { y: 50, opacity: 0 },
                    { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
                    "-=0.6"
                )
                .fromTo(
                    ".hero-button",
                    { scale: 0.8, opacity: 0 },
                    {
                        scale: 1,
                        opacity: 1,
                        duration: 0.8,
                        ease: "elastic.out(1, 0.5)",
                    },
                    "-=0.5"
                );
        },
        { scope: container }
    );

    const title = "Track. Trace. Triumph.";
    const splitTitle = title.split(" ").map((word, i) => (
        <span key={i} className="inline-block overflow-hidden">
            <span className="inline-block">{word}&nbsp;</span>
        </span>
    ));

    return (
        <div
            ref={container}
            className="relative w-full h-screen overflow-hidden"
        >
            <div className="absolute inset-0 z-0">
                <Canvas>
                    <Suspense fallback={null}>
                        <Scene />
                    </Suspense>
                </Canvas>
            </div>
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
                <h1 className="hero-title font-bold text-5xl md:text-7xl lg:text-8xl mb-6">
                    {splitTitle}
                </h1>
                <motion.p
                    className="hero-subtitle text-lg md:text-xl lg:text-2xl max-w-3xl mb-8 text-white-300"
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5, duration: 1 }}
                >
                    Finding the Signals in the Noise.
                </motion.p>
            </div>
        </div>
    );
}
