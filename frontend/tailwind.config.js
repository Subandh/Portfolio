/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", // include all components
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3B82F6',      // blue-500
        secondary: '#64748b',    // slate-500
        dark: '#0f172a',         // slate-900
        accent: '#f59e0b',       // amber-500
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
