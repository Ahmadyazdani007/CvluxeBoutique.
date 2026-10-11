/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blush: {
          50: '#FFF9F9',
          100: '#FDF2F4',
          200: '#FCE6E9',
          300: '#F7D2D8',
          400: '#EEAFB9',
          500: '#DE8A99',
          600: '#C6697A',
          700: '#A44E5E',
        },
        gold: {
          50: '#FCFAF2',
          100: '#F7F2DC',
          200: '#EFE2B3',
          300: '#E4CE84',
          400: '#D4AF37', // Champagne Gold
          500: '#C5A028',
          600: '#A5821A',
          700: '#7E6116',
          metallic: '#C5A059',
          light: '#F5E8C7',
          champagne: '#E8D3B1',
        },
        luxe: {
          50: '#FBF9FA',
          100: '#F5EFF2',
          200: '#E9E1E4',
          300: '#D3C6CC',
          400: '#A6959D',
          500: '#7B6A72',
          600: '#5A4C53',
          700: '#3D3237',
          800: '#261F23',
          900: '#181316',
        },
        cream: {
          50: '#FDFCF9',
          100: '#FAF8F3',
          200: '#F5F1E8',
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Playfair Display', 'serif'],
        sans: ['"Montserrat"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(222, 138, 153, 0.08), 0 2px 6px -1px rgba(0, 0, 0, 0.04)',
        'luxe': '0 10px 35px -5px rgba(24, 19, 22, 0.08), 0 4px 12px -2px rgba(197, 160, 89, 0.1)',
        'gold': '0 4px 20px rgba(212, 175, 55, 0.25)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'slide-up': 'slideUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'shimmer': 'shimmer 2s infinite linear',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        }
      }
    },
  },
  plugins: [],
}
