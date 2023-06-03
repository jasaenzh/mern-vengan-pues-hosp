import { ReactNode } from "react";
import Navbar from "../components/Navbar/Navbar";

interface LayoutProps {
    children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
    return (
        <div className="bg-[#ECBC39] w-full h-screen">
            <Navbar />
            <div className="pt-[115px]"></div>
            {children}
            <p>Footer</p>
        </div>
    )
}