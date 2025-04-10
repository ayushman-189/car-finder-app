// tailwind.config.mjs
import { type Config } from 'tailwindcss';

const config = {
  darkMode: 'class', // Enable class-based dark mode
  content: [
    './pages/**/*.{js,ts,jsx,tsx}', 
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#2563eb', // Optional: your brand color (blue-600)
        },
      },
    },
  },
  plugins: [],
} satisfies Config;

export default config;
