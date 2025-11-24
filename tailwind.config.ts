import type { Config } from 'tailwindcss'
import scrollbar from "tailwind-scrollbar";

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            screens: {
                'sm': '640px',
                'md': '768px',
                'lg': '1024px',
                'xl': '1280px',
                '2xl': '1536px',
            },
            colors: {
                background: 'var(--background)',
                foreground: 'var(--foreground)',
                teal: 'var(--teal)',
                orange: 'var(--orange)',
            },
        },
    },
    plugins: [
        scrollbar({ nocompatible: true }),
    ],
}

export default config
