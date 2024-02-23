import colors from './src/colors';
import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  safelist: [
    {
      pattern: /(bg|text)-+/,
      variants:['hover','focus']
    },
    {
      pattern:/(border)-+/
    }
  ],  
  theme: {
    extend: {},
    colors,
  },
  plugins: [],
} satisfies Config

