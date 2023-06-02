import { ReactNode } from "react";

interface LayoutProps {
    children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
    return (
        <div>
            <p>NavBar</p>
            {children}
            <p>Footer</p>
        </div>
    )
}