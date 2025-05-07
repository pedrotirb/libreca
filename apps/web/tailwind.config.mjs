import { type Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: '#111111',
        accent: {
          red: '#E24343',
          ludix: '#FFB626',
          spectra: '#FF4F81',
          domaro: '#1DB954',
          ritmo: '#5AE2F2',
          folio: '#4D9FFF',
          praxis: '#9B7DFF',
          arkea: '#FF8855',
          agora: '#FFD43B'
        }
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
        display: ['Space Grotesk', 'ui-sans-serif']
      }
    }
  },
  plugins: [require('@tailwindcss/typography')]
} satisfies Config;