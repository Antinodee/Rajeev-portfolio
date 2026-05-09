/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#0a0a0f',
        secondary: '#12121a',
        card: '#1a1a25',
        'card-2': '#1e1e2e',
        hover: '#22222f',
        accent: {
          DEFAULT: '#00e5c8',
          dim: '#00e5c840',
          glow: '#00e5c820',
        },
        'text-primary': '#e8e8ed',
        'text-secondary': '#8888a0',
        'text-muted': '#55556a',
      },
      fontFamily: {
        display: ['Sora', 'sans-serif'],
        body: ['DM Sans', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        'glow': '0 0 20px rgba(0,229,200,0.2), 0 0 40px rgba(0,229,200,0.07)',
        'glow-sm': '0 0 12px rgba(0,229,200,0.25)',
        'glow-lg': '0 0 32px rgba(0,229,200,0.25), 0 0 64px rgba(0,229,200,0.08)',
        'card-elevated': '0 8px 40px rgba(0,0,0,0.55), inset 0 1px 0 rgba(255,255,255,0.05)',
      },
      animation: {
        'dot-drift': 'dotDrift 20s linear infinite',
        'fade-up': 'fadeUp 0.5s ease-out forwards',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        'float': 'float 5s ease-in-out infinite',
        'float-2': 'float 5s ease-in-out 1.7s infinite',
        'float-3': 'float 5s ease-in-out 3.4s infinite',
        'cursor-blink': 'cursorBlink 1s step-end infinite',
      },
      keyframes: {
        dotDrift: {
          '0%': { transform: 'translate(0, 0)' },
          '25%': { transform: 'translate(10px, 5px)' },
          '50%': { transform: 'translate(5px, 10px)' },
          '75%': { transform: 'translate(-5px, 5px)' },
          '100%': { transform: 'translate(0, 0)' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        cursorBlink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
      },
    },
  },
  plugins: [],
};
