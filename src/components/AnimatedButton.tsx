import React from "react";
import Paragraph from "@/components/Paragraph";

interface AnimatedButtonProps {
    children: React.ReactNode;
    icon?: React.ReactNode;
    bgColor?: string;
    textColor?: string;
    hoverTextColor?: string;
    skewColor?: string;
    disabled?: boolean;
    type?: "button" | "submit";
    className?: string;
    onClick?: () => void;
}

const AnimatedButton: React.FC<AnimatedButtonProps> = ({
    children,
    icon,
    bgColor = "bg-(--orange)",
    textColor = "text-(--white)",
    hoverTextColor = "group-hover:text-(--white)",
    skewColor = "bg-(--white)",
    disabled = false,
    type = "button",
    className = "",
    onClick,
}) => {
    // Check if children is empty or just whitespace
    const hasText = !!children && (typeof children !== "string" || children.trim() !== "");
    return (
        <button
            className={`relative overflow-hidden px-4 py-2 rounded-md cursor-pointer outline-none border-none group ${bgColor} ${textColor} ${className}`}
            type={type}
            disabled={disabled}
            onClick={onClick}
        >
            <Paragraph
                size="base"
                className={`relative font-semibold z-10 rounded-md transition-colors duration-400 flex items-center gap-2 justify-center ${hoverTextColor}`}
            >
                {hasText ? (
                    <>
                        {children}
                        {icon && <span>{icon}</span>}
                    </>
                ) : (
                    icon && <span className="mx-auto flex items-center justify-center">{icon}</span>
                )}
            </Paragraph>
            <div className={`absolute top-0 -left-[10%] w-[120%] h-full rounded-md ${skewColor} skew-x-30 z-0 transition-transform duration-400 ease-[cubic-bezier(0.3,1,0.8,1)] group-hover:translate-x-full`}></div>
        </button>
    );
};

export default AnimatedButton;
