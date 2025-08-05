"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Search,
    Users,
    Globe2,
    Image as ImageIcon,
    MapPin,
    EyeOff,
    MessageCircle,
    Mail,
    ArrowLeft,
    ExternalLink,
    Tag,
} from "lucide-react";
import { getToolsByCategory, OSINTTool } from "@/lib/osint-tools";
import { TransitionLink } from "@/components/transition-link";

const osintCategories = [
    {
        title: "Search Engines",
        description:
            "Powerful tools to query and aggregate data from public and specialized search engines for investigative research.",
        icon: Search,
        href: "/recon/search-engines",
    },
    {
        title: "Social Media",
        description:
            "Analyze, monitor, and extract intelligence from social media platforms and public profiles.",
        icon: Users,
        href: "/recon/social-media",
    },
    {
        title: "Domain & IP",
        description:
            "Investigate domains, IP addresses, DNS records, and related infrastructure for threat intelligence.",
        icon: Globe2,
        href: "/recon/domain-ip",
    },
    {
        title: "Images & Media",
        description:
            "Reverse image search, metadata extraction, and media analysis for digital forensics.",
        icon: ImageIcon,
        href: "/recon/images-media",
    },
    {
        title: "Geolocation",
        description:
            "Geospatial tools for mapping, tracking, and analyzing location-based data.",
        icon: MapPin,
        href: "/recon/geolocation",
    },
    {
        title: "Darkweb",
        description:
            "Access and analyze dark web sources for hidden intelligence and threat monitoring.",
        icon: EyeOff,
        href: "/recon/darkweb",
    },
    {
        title: "Communication",
        description:
            "Investigate communication channels, chat platforms, and messaging services for open-source intelligence.",
        icon: MessageCircle,
        href: "/recon/communication",
    },
    {
        title: "Email",
        description:
            "Email address investigation, breach checks, and metadata analysis for digital investigations.",
        icon: Mail,
        href: "/recon/email",
    },
    {
        title: "Satellite",
        description:
            "Tools for satellite imagery analysis, tracking, and geospatial intelligence.",
        icon: Globe2,
        href: "/recon/satellite",
    },
];

export default function ReconPage() {
    const [selectedCategory, setSelectedCategory] = useState<string | null>(
        null
    );
    const [selectedTools, setSelectedTools] = useState<OSINTTool[]>([]);

    const handleCategoryClick = (
        categorySlug: string,
        categoryName: string
    ) => {
        const tools = getToolsByCategory(categorySlug);
        setSelectedTools(tools);
        setSelectedCategory(categoryName);
    };

    const closeCategory = () => {
        setSelectedCategory(null);
        setSelectedTools([]);
    };

    return (
        <div className="min-h-screen pt-32 pb-20">
            <div className="container mx-auto px-4">
                {/* Hero Section */}
                <div className="text-center mb-20">
                    <motion.h1
                        className="text-5xl md:text-7xl font-bold mb-6"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        Recon Vault
                    </motion.h1>
                    <motion.p
                        className="text-xl md:text-2xl text-neutral-400 max-w-3xl mx-auto"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        A curated collection of OSINT tools and resources,
                        organized by category for efficient digital
                        investigations.
                    </motion.p>
                </div>

                {/* AnimatePresence for grid/tools transition */}
                <AnimatePresence mode="wait">
                    {!selectedCategory && (
                        <motion.div
                            key="grid"
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -40 }}
                            transition={{ duration: 0.4 }}
                        >
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                                {osintCategories.map((cat, index) => (
                                    <motion.div
                                        key={cat.title}
                                        initial={{ opacity: 0, y: 50 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{
                                            duration: 0.5,
                                            delay: index * 0.1,
                                        }}
                                        viewport={{ once: true }}
                                        className="group cursor-pointer"
                                        onClick={() =>
                                            handleCategoryClick(
                                                cat.href.split("/").pop()!,
                                                cat.title
                                            )
                                        }
                                    >
                                        <div className="bg-gradient-to-br from-neutral-900 to-neutral-800 p-8 rounded-lg border border-neutral-700 hover:border-neutral-500 transition-all duration-300 hover:scale-105">
                                            <div className="flex items-center mb-4">
                                                <cat.icon className="w-8 h-8 text-blue-400 mr-3" />
                                                <h3 className="text-xl font-bold">
                                                    {cat.title}
                                                </h3>
                                            </div>
                                            <p className="text-neutral-400 mb-4 min-h-[60px]">
                                                {cat.description}
                                            </p>
                                            <div className="flex items-center text-blue-400 group-hover:text-blue-300 transition-colors">
                                                <span className="text-sm font-semibold">
                                                    Explore Tools
                                                </span>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    )}
                    {selectedCategory && selectedTools.length > 0 && (
                        <motion.div
                            key="tools"
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -40 }}
                            transition={{ duration: 0.4 }}
                        >
                            {/* Category Header */}
                            <div className="mb-8">
                                <button
                                    onClick={closeCategory}
                                    className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors mb-4"
                                >
                                    <ArrowLeft className="w-5 h-5" />
                                    Back to Categories
                                </button>
                                <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                                    {selectedCategory}
                                </h2>
                                <p className="text-neutral-400">
                                    {selectedTools.length} tools available
                                </p>
                            </div>

                            {/* Tools Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
                                {selectedTools.map((tool, index) => (
                                    <motion.div
                                        key={tool.id}
                                        initial={{ opacity: 0, y: 30 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{
                                            duration: 0.5,
                                            delay: index * 0.1,
                                        }}
                                        className="group"
                                    >
                                        <ToolCard tool={tool} />
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}

function ToolCard({ tool }: { tool: OSINTTool }) {
    return (
        <div className="bg-gradient-to-br from-neutral-900 to-neutral-800 rounded-xl border border-neutral-700 shadow-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:border-neutral-500 group">
            <div className="p-6">
                <div className="flex-1 flex flex-col justify-between h-full">
                    <div>
                        <h3 className="text-xl font-bold text-white mb-3 line-clamp-2 group-hover:text-blue-400 transition-colors">
                            {tool.name}
                        </h3>
                        <p className="text-neutral-300 text-sm leading-relaxed mb-4 line-clamp-3">
                            {tool.description}
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {tool.tags.slice(0, 3).map((tag, index) => (
                                <span
                                    key={index}
                                    className="inline-flex items-center gap-1 px-2 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs"
                                >
                                    <Tag className="w-3 h-3" />
                                    {tag}
                                </span>
                            ))}
                            {tool.tags.length > 3 && (
                                <span className="inline-flex items-center px-2 py-1 bg-neutral-700 text-neutral-300 rounded-full text-xs">
                                    +{tool.tags.length - 3} more
                                </span>
                            )}
                        </div>
                    </div>
                    <div className="flex items-center justify-between mt-4">
                        <div className="text-xs text-neutral-400 flex-1 mr-4">
                            <span className="block text-neutral-500 mb-1">
                                WEBSITE:
                            </span>
                            <a
                                href={tool.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-400 hover:underline break-all line-clamp-1"
                            >
                                {tool.url.replace(/^https?:\/\//, "")}
                            </a>
                        </div>
                        <a
                            href={tool.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-neutral-800 border border-neutral-600 hover:bg-blue-700 hover:border-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300 shadow flex-shrink-0"
                        >
                            Visit
                            <ExternalLink className="w-4 h-4" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
