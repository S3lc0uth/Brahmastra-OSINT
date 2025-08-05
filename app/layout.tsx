import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { GsapProvider } from "@/components/gsap-provider";
import { TransitionProvider } from "@/components/transition-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Brahmāstra",
    description: "Osint tools for reconnaissance and intelligence gathering.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={inter.className}>
            <body className="bg-[#0a0a0a] text-white">
                <GsapProvider>
                    <TransitionProvider>
                        <Header />
                        <main>{children}</main>
                        <Footer />
                    </TransitionProvider>
                </GsapProvider>
            </body>
        </html>
    );
}
