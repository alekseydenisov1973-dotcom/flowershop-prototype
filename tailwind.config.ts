import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        blush: '#f8e9ee',
        rose: '#d85c7f'
      }
    }
  },
  plugins: []
};

export default config;
