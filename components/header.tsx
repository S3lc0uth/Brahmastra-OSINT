"use client";

import { TransitionLink } from "./transition-link";
import { motion } from "framer-motion";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

export function Header() {
    const headerRef = useRef(null);

    useGSAP(() => {
        gsap.from(headerRef.current, {
            y: -100,
            opacity: 0,
            duration: 1,
            ease: "power3.out",
            delay: 2,
        });
    }, []);

    return (
        <motion.header
            ref={headerRef}
            className="fixed top-0 left-0 right-0 z-50 p-4"
        >
            <div className="container mx-auto flex justify-between items-center bg-black/20 backdrop-blur-md p-4 rounded-full">
                <TransitionLink
                    href="/"
                    className="text-white font-bold text-xl"
                >
                    Brahmāstra
                </TransitionLink>
                <nav className="flex items-center gap-6 text-white">
                    <TransitionLink
                        href="/recon"
                        className="hover:text-neutral-300 transition-colors"
                    >
                    Home
                  </TransitionLink>
                    <TransitionLink
                        href="/"
                        className="hover:text-neutral-300 transition-colors"
                    >
                        Tools
                    </TransitionLink>
                    <TransitionLink
                        href="/blog"
                        className="hover:text-neutral-300 transition-colors"
                    >
                        Blog
                    </TransitionLink>
                    <TransitionLink
                        href="/challenge"
                        className="hover:text-neutral-300 transition-colors"
                    >
                        Challenge
                    </TransitionLink>
                </nav>
                <div className="w-24"></div>
            </div>
        </motion.header>
    );
}
