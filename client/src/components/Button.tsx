import { ReactNode } from "react";

interface ButtonProps {
    children: ReactNode;
}

const Button = ({ children }: ButtonProps) => {
    return (
        <button className="bg-teal-700 text-white font-[Poppins] py-2 px-6 rounded md:ml-8 hover:bg-teal-400 duration-500">
            {children}
        </button>
    )
}
export default Button