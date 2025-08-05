import { TransitionLink } from "@/components/transition-link";
import { ArrowRight, Clock, BookOpen, Shield, Users, Zap } from "lucide-react";
import { allPosts } from "@/lib/blog-posts";

export default function BlogPage() {
    return (
        <div className="min-h-screen pt-32 pb-20">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h1 className="text-5xl md:text-7xl font-bold mb-6">
                        Our Blog
                    </h1>
                    <p className="text-xl text-neutral-400 max-w-3xl mx-auto">
                        Insights, tutorials, and case studies from the world of
                        open-source intelligence
                    </p>
                </div>

                {/* Coming Soon Section */}
                <div className="max-w-4xl mx-auto">
                    <div className="bg-gradient-to-br from-neutral-900 to-neutral-800 p-12 rounded-2xl border border-neutral-700 shadow-2xl text-center">
                        <div className="flex justify-center mb-8">
                            <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                                <Clock className="w-12 h-12 text-white" />
                            </div>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            Coming Soon
                        </h2>
                        <p className="text-xl text-neutral-400 mb-12 max-w-2xl mx-auto">
                            We're working on bringing you the latest insights,
                            tutorials, and case studies in the world of
                            open-source intelligence and digital investigations.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
