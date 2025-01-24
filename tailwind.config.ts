import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        secondary: 'var(--secondary)',
        Neutral: {
          Primary: 'var(--neutral1)',
          Secondary: 'var(--neutral2)'
        },
        Primary: {
          button: 'var(--button)',
          buttonLight: 'var(--button-light)',
          buttonDark: 'var(--button-dark)'
        }
      }
    }
  },
  plugins: []
}
export default config
