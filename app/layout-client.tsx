"use client";

import {usePathname} from "next/navigation";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

export default function LayoutClient({
                                         children,
                                     }: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();
    const isAuthPage = pathname?.startsWith("/login") || pathname?.startsWith("/signup") || pathname?.startsWith("/forgot-password");

    return (
        <>
            <Navbar/>
            {children}
            {!isAuthPage && <Footer/>}
            {isAuthPage && <Footer hideLinks={true}/>}
        </>
    );
}

