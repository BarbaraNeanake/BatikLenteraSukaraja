import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}', 
    './components/**/*.{ts,tsx}', 
    './pages/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        vibes: ["var(--font-vibes)"],
        plus: ["var(--font-plus-jakarta-sans)"],
        unbounded: ["var(--font-unbounded)"],
      },
    },
  },
  plugins: [],
};

export default config;
