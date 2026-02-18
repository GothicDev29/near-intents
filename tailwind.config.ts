import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
      animation: {
        'marquee': 'marquee 30s linear infinite',
        'aurora-spin': 'aurora-spin 20s linear infinite',
        'aurora-spin-reverse': 'aurora-spin 15s linear infinite reverse',
        'cyber-spin': 'cyber-spin 12s linear infinite',
        'cyber-scan': 'cyber-scan 3s ease-in-out infinite',
        'equalizer': 'equalizer 1.5s ease-in-out infinite',
        'blink': 'blink 2s ease-in-out infinite',
        'float-diagonal': 'float-diagonal 3s ease-in-out infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'aurora-spin': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'cyber-spin': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'cyber-scan': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(100%)' },
        },
        'equalizer': {
          '0%, 100%': { height: '20%' },
          '50%': { height: '100%' },
        },
        'blink': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.3' },
        },
        'float-diagonal': {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '50%': { transform: 'translate(10px, -10px)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
