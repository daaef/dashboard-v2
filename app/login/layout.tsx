import type { Metadata } from "next";
import {Inter} from "next/font/google";
import { Providers } from "@/components/Providers";
import LayoutClient from "@/app/layout-client";

const inter = Inter({
    variable: "--font-inter",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Fainzy",
    description: "Fainzy - Your digital experience",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
                {children}
        </>
    );
}
