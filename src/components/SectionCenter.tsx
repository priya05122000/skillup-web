import React, { forwardRef } from "react";

interface SectionProps {
    children: React.ReactNode;
    className?: string;
    id?: string;
}

const SectionCenter = forwardRef<HTMLDivElement | null, SectionProps>(
    ({ children, className = '', id }, ref) => {
        return (
            <section
                className={`relative px-6 sm:px-4 ${className}`}
                id={id}
            >
                <div
                    ref={ref}
                    className="max-w-full sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-5xl mx-auto px-0 md:px-4 lg:px-12 xl:px-0"
                >
                    {children}
                </div>
            </section>
        );
    }
);

SectionCenter.displayName = "SectionCenter";

export default SectionCenter;