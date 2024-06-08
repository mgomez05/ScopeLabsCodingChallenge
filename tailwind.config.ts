import type { Config } from 'tailwindcss';

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
      },
      colors: {
        'learnwell-blue': '#00B6EF',
        'learnwell-blue-light': 'rgba(0, 182, 239, 0.5)',
        'black-opacity-10-percent': '#0000001A',
      },
    },
  },
  plugins: [],
  safelist: [
    {
      pattern:
        /(text|bg)-(learnwell-blue|learnwell-blue-light|black-opacity-10-percent)/,
    },
  ],
};
export default config;
