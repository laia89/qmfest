import forms from '@tailwindcss/forms'
import typography from '@tailwindcss/typography'
import animate from 'tailwindcss-animate'

const config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        festival: {
          purple: '#7758d4', // Main background color
          yellow: '#ffc534', // Accent color for CTAs and headers
          cream: '#fbf2e9', // Text color
        },
      },
      fontFamily: {
        sans: ['var(--font-lato)'],
        heading: ['var(--font-inter)'],
      },
      fontSize: {
        base: '1rem',
        sm: '0.875rem',
        xs: '0.75rem',
        heading_700: '3.5rem',
        heading_600: '3rem',
        heading_500: '2.5rem',
        heading_400: '2rem',
        heading_300: '1.75rem',
        heading_200: '1.5rem',
        heading_100: '1.25rem',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      keyframes: {
        'bounce-in': {
          '0%': { transform: 'scale(0.3)', opacity: '0' },
          '50%': { transform: 'scale(1.05)', opacity: '0.8' },
          '70%': { transform: 'scale(0.9)', opacity: '0.9' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        'fade-in-down': {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'fade-out': {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
      },
      animation: {
        'bounce-in': 'bounce-in 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        'fade-in-down': 'fade-in-down 0.5s ease-out',
        'fade-out': 'fade-out 0.5s ease-out',
      },
    },
  },
  plugins: [forms, typography, animate],
}
export default config
