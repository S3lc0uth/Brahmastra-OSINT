"use client";

import { motion } from "framer-motion";
import { Quote, Linkedin, Twitter, MessageCircle } from "lucide-react";

const testimonials = [
    {
        name: "Er. Ajay Pawar",
        role: "Ethical Hacker | EHE | NDE | DFE | CEH V12",
        company: "Cyber Security Enthusiast",
        comment: "Excited for this 🔥",
        platform: "LinkedIn",
        platformIcon: Linkedin,
        date: "1 month ago",
        avatar: "/placeholder-user.jpg",
    },
    {
        name: "Logan Woodward",
        role: "Senior Sourcing Specialist",
        company: "Professional Network",
        comment:
            "BRAHMASTRA OSINT COLLECTION - A powerful collection of intelligence tools for researchers, investigators, and cybersecurity professionals.",
        platform: "LinkedIn",
        platformIcon: Linkedin,
        rating: 5,
        date: "1 month ago",
        avatar: "/placeholder-user.jpg",
    },
];

export function Portfolio() {
    return (
        <div id="portfolio" className="relative py-20 px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <motion.h2
                    className="text-4xl md:text-5xl font-bold tracking-tight mb-4"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    Echoes of the Astra
                </motion.h2>
                <motion.p
                    className="mt-4 max-w-3xl mx-auto text-lg text-neutral-400"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    Voices from the digital realm. Real testimonials from
                    cybersecurity professionals, researchers, and investigators
                    who have experienced the power of Brahmāstra.
                </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                {testimonials.map((testimonial, index) => (
                    <motion.div
                        key={testimonial.name}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="group"
                    >
                        <div className="bg-gradient-to-br from-neutral-900/50 to-neutral-800/50 backdrop-blur-sm border border-neutral-700/50 rounded-xl p-6 hover:border-neutral-500/50 transition-all duration-300 hover:scale-105">
                            {/* Platform Badge */}
                            <div className="flex items-center mb-4">
                                <div className="flex items-center gap-2">
                                    <testimonial.platformIcon className="w-4 h-4 text-blue-400" />
                                    <span className="text-xs text-neutral-500 uppercase tracking-wide">
                                        {testimonial.platform}
                                    </span>
                                </div>
                            </div>

                            {/* Quote Icon */}
                            <div className="mb-4">
                                <Quote className="w-6 h-6 text-blue-400/50" />
                            </div>

                            {/* Comment */}
                            <p className="text-neutral-300 text-sm leading-relaxed mb-6 line-clamp-4">
                                {testimonial.comment}
                            </p>

                            {/* Author Info */}
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                                    <span className="text-white font-semibold text-sm">
                                        {testimonial.name
                                            .split(" ")
                                            .map((n) => n[0])
                                            .join("")}
                                    </span>
                                </div>
                                <div className="flex-1">
                                    <h4 className="font-semibold text-white text-sm">
                                        {testimonial.name}
                                    </h4>
                                    <p className="text-xs text-neutral-500">
                                        {testimonial.role}
                                    </p>
                                    <p className="text-xs text-neutral-600">
                                        {testimonial.company}
                                    </p>
                                </div>
                            </div>

                            {/* Date */}
                            <div className="mt-4 pt-4 border-t border-neutral-700/50">
                                <p className="text-xs text-neutral-600">
                                    {testimonial.date}
                                </p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
