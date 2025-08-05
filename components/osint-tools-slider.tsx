"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ExternalLink, Tag, X } from "lucide-react";
import { OSINTTool } from "@/lib/osint-tools";

interface OSINTToolsSliderProps {
    tools: OSINTTool[];
    categoryName: string;
    onClose: () => void;
}

export function OSINTToolsSlider({
    tools,
    categoryName,
    onClose,
}: OSINTToolsSliderProps) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextTool = () => {
        setCurrentIndex((prev) => (prev + 1) % tools.length);
    };

    const prevTool = () => {
        setCurrentIndex((prev) => (prev - 1 + tools.length) % tools.length);
    };

    // Get indices for left, center, right cards
    const getIndices = () => {
        const left = (currentIndex - 1 + tools.length) % tools.length;
        const center = currentIndex;
        const right = (currentIndex + 1) % tools.length;
        return [left, center, right];
    };
    const [leftIdx, centerIdx, rightIdx] = getIndices();

    // Card variants for animation
    const cardVariants = {
        center: {
            scale: 1,
            opacity: 1,
            zIndex: 2,
            x: 0,
            filter: "blur(0px)",
        },
        side: (direction: "left" | "right") => ({
            scale: 0.85,
            opacity: 0.6,
            zIndex: 1,
            x: direction === "left" ? -120 : 120,
            filter: "blur(1.5px)",
        }),
        hidden: (direction: "left" | "right") => ({
            scale: 0.7,
            opacity: 0,
            zIndex: 0,
            x: direction === "left" ? -300 : 300,
            filter: "blur(4px)",
        }),
    };

    return (
        <div className="relative w-full flex flex-col items-center justify-center py-12">
            {/* Close Button */}
            <button
                onClick={onClose}
                className="absolute top-0 right-0 mt-2 mr-2 z-20 w-12 h-12 flex items-center justify-center rounded-full border border-neutral-700 bg-neutral-900/80 hover:bg-neutral-800 transition-colors"
                aria-label="Close"
            >
                <X className="w-6 h-6 text-neutral-400" />
            </button>

            {/* Category Title */}
            <div className="mb-8 text-center">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-1">
                    {categoryName}
                </h2>
                <p className="text-neutral-400 text-xs">
                    {currentIndex + 1} of {tools.length} tools
                </p>
            </div>

            {/* Slider */}
            <div className="relative flex items-center justify-center w-full max-w-5xl min-h-[420px]">
                {/* Left Arrow */}
                <button
                    onClick={prevTool}
                    className="absolute left-0 z-10 w-12 h-12 rounded-full bg-neutral-900/80 border border-neutral-700 flex items-center justify-center hover:bg-neutral-800 transition-colors shadow-lg"
                    aria-label="Previous Tool"
                >
                    <ChevronLeft className="w-7 h-7 text-white" />
                </button>

                {/* Cards */}
                <div className="flex w-full items-center justify-center gap-4">
                    {/* Left Card */}
                    {tools.length > 2 && tools[leftIdx] && (
                        <motion.div
                            key={`left-${tools[leftIdx].id}`}
                            className="flex-1 min-w-0 max-w-sm"
                            custom="left"
                            variants={cardVariants}
                            animate="side"
                            initial="hidden"
                            exit="hidden"
                            transition={{
                                type: "spring",
                                stiffness: 300,
                                damping: 30,
                            }}
                        >
                            <ToolCard tool={tools[leftIdx]} small />
                        </motion.div>
                    )}
                    {/* Center Card */}
                    {tools[centerIdx] && (
                        <motion.div
                            key={`center-${tools[centerIdx].id}`}
                            className="flex-[1.2] min-w-0 max-w-lg z-20"
                            custom={null}
                            variants={cardVariants}
                            animate="center"
                            initial="hidden"
                            exit="hidden"
                            transition={{
                                type: "spring",
                                stiffness: 300,
                                damping: 30,
                            }}
                        >
                            <ToolCard tool={tools[centerIdx]} />
                        </motion.div>
                    )}
                    {/* Right Card */}
                    {tools.length > 1 && tools[rightIdx] && (
                        <motion.div
                            key={`right-${tools[rightIdx].id}`}
                            className="flex-1 min-w-0 max-w-sm"
                            custom="right"
                            variants={cardVariants}
                            animate="side"
                            initial="hidden"
                            exit="hidden"
                            transition={{
                                type: "spring",
                                stiffness: 300,
                                damping: 30,
                            }}
                        >
                            <ToolCard tool={tools[rightIdx]} small />
                        </motion.div>
                    )}
                </div>

                {/* Right Arrow */}
                <button
                    onClick={nextTool}
                    className="absolute right-0 z-10 w-12 h-12 rounded-full bg-neutral-900/80 border border-neutral-700 flex items-center justify-center hover:bg-neutral-800 transition-colors shadow-lg"
                    aria-label="Next Tool"
                >
                    <ChevronRight className="w-7 h-7 text-white" />
                </button>
            </div>

            {/* Tool Indicators */}
            <div className="flex gap-2 mt-8">
                {tools.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`w-2.5 h-2.5 rounded-full transition-colors ${
                            index === currentIndex
                                ? "bg-blue-500"
                                : "bg-neutral-600"
                        }`}
                    />
                ))}
            </div>
        </div>
    );
}

function ToolCard({
    tool,
    small = false,
}: {
    tool: OSINTTool;
    small?: boolean;
}) {
    return (
        <div
            className={`flex flex-col h-[400px] bg-gradient-to-br from-neutral-900 to-neutral-800 rounded-2xl border border-neutral-700 shadow-2xl overflow-hidden px-8 py-8 transition-all duration-300 ${
                small
                    ? "scale-90 opacity-60 blur-[1.5px] pointer-events-none"
                    : ""
            }`}
        >
            <div className="flex-1 flex flex-col justify-between">
                <div>
                    <h3 className="text-2xl font-bold text-white mb-3 line-clamp-2">
                        {tool.name}
                    </h3>
                    <p className="text-neutral-300 text-base leading-relaxed mb-4 line-clamp-4">
                        {tool.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                        {tool.tags.map((tag, index) => (
                            <span
                                key={index}
                                className="inline-flex items-center gap-1 px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs"
                            >
                                <Tag className="w-3 h-3" />
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
                <div className="flex items-center justify-between mt-4">
                    <div className="text-xs text-neutral-400">
                        WEBSITE:
                        <br />
                        <a
                            href={tool.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-400 hover:underline break-all"
                        >
                            {tool.url.replace(/^https?:\/\//, "")}
                        </a>
                    </div>
                    <a
                        href={tool.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-neutral-900 border border-neutral-700 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors duration-300 shadow"
                    >
                        Visit
                        <ExternalLink className="w-4 h-4" />
                    </a>
                </div>
            </div>
        </div>
    );
}
