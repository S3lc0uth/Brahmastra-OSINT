import type { ReactNode } from "react";
import Image from "next/image";

type Post = {
    title: string;
    excerpt: string;
    slug: string;
    content: ReactNode;
};

export const allPosts: Post[] = [
    {
        title: "Coming Soon: The Future of OSINT",
        excerpt:
            "Stay tuned for insights into the latest developments in open-source intelligence and digital investigations.",
        slug: "coming-soon",
        content: (
            <>
                <div className="text-center py-20">
                    <h2 className="text-4xl md:text-6xl font-bold mb-8">
                        Coming Soon
                    </h2>
                    <p className="text-xl text-neutral-400 max-w-2xl mx-auto mb-8">
                        We're working on bringing you the latest insights,
                        tutorials, and case studies in the world of open-source
                        intelligence and digital investigations.
                    </p>
                    <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 p-8 rounded-lg border border-blue-500/30">
                        <h3 className="text-2xl font-bold mb-4">
                            What to Expect
                        </h3>
                        <ul className="text-left space-y-3 text-neutral-300">
                            <li className="flex items-center gap-3">
                                <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                                Advanced OSINT techniques and methodologies
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                                Tool reviews and comparisons
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                                Real-world case studies and investigations
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                                Privacy and ethical considerations in OSINT
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                                Latest trends and emerging technologies
                            </li>
                        </ul>
                    </div>
                </div>
            </>
        ),
    },
];

export const getPostBySlug = (slug: string) => {
    return allPosts.find((post) => post.slug === slug);
};
