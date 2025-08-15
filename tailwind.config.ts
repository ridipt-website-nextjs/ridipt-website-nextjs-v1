// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        // More specific paths for better performance
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
        './src/**/*.{js,ts,jsx,tsx,mdx}',
        './lib/**/*.{js,ts,jsx,tsx,mdx}',
        // Agar koi specific folders hain toh add karo
    ],
    theme: {
        extend: {
            colors: {
                // Your custom colors
                'alice-blue': '#e3f2fdff',
                'uranian-blue': '#bbdefbff',
                'light-sky-blue': '#90caf9ff',
                'argentinian-blue': '#64b5f6ff',
                'argentinian-blue-2': '#42a5f5ff',
                'dodger-blue': '#2196f3ff',
                'bleu-de-france': '#1e88e5ff',
                'french-blue': '#1976d2ff',
                'green-blue': '#1565c0ff',
                'cobalt-blue': '#0d47a1ff',
                
            },
        },
    },
    plugins: [],
}
