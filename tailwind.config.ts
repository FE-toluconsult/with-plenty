import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'button-gradient': 
          'conic-gradient(from 0deg at 50% 50%, rgb(71, 203, 255), rgb(205, 112, 255), rgb(44, 216, 58), rgb(71, 203, 255))'
      },
      colors: {
        'regal-black': '#252627',
        'faded-black': '#262626',
        'primary-border': '#c7c7c7'
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
      }
    },
  },
  plugins: [],
}
export default config
