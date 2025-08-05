"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { TransitionLink } from "./transition-link";
import { ArrowRight, Clock } from "lucide-react";

export function BlogPreview() {
    const container = useRef(null);

    useGSAP(
        () => {
            gsap.from(".blog-title", {
                scrollTrigger: {
                    trigger: container.current,
                    start: "top 80%",
                },
                y: 100,
                opacity: 0,
                duration: 1,
                ease: "power3.out",
            });

            gsap.from(".blog-content", {
                scrollTrigger: {
                    trigger: ".blog-content",
                    start: "top 80%",
                },
                y: 100,
                opacity: 0,
                duration: 0.8,
                ease: "power3.out",
            });
        },
        { scope: container }
    );

    return (
        <section ref={container} className="py-20 md:py-32 bg-[#111]">
            <div className="container mx-auto px-4">
                <h2 className="blog-title text-4xl md:text-6xl font-bold text-center mb-16">
                    From Our Minds
                </h2>
                <div className="blog-content max-w-4xl mx-auto text-center">
                    <div className="bg-gradient-to-br from-neutral-900 to-neutral-800 p-12 rounded-2xl border border-neutral-700 shadow-2xl">
                        <div className="flex justify-center mb-8">
                            <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                                <Clock className="w-10 h-10 text-white" />
                            </div>
                        </div>
                        <h3 className="text-3xl md:text-4xl font-bold mb-6">
                            Coming Soon
                        </h3>
                        <p className="text-xl text-neutral-400 mb-8 max-w-2xl mx-auto">
                            We're working on bringing you the latest insights,
                            tutorials, and case studies in the world of
                            open-source intelligence and digital investigations.
                        </p>
                        {/*<TransitionLink
                            href="/blog"
                            className="group inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
                        >
                            Explore Blog{" "}
                            <ArrowRight
                                className="transition-transform group-hover:translate-x-1"
                                size={20}
                            />
                        </TransitionLink>*/}
                    </div>
                </div>
            </div>
        </section>
    );
}
