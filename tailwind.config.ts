import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      sans: ['var(--font-roboto)'],
    },
    extend: {
      boxShadow: {
        btn: '0px -1px 1px 0px #4D4D4D, 0px 1px 1px 0px #4D4D4D, -1px 0px 1px 0px rgba(0, 0, 0, 0.25), 1px 0px 1px 0px rgba(0, 0, 0, 0.25);',
        chip: '0px 0px 1px 0px rgba(0, 0, 0, 0.45);',
      },
    },
  },
  plugins: [],
};
export default config;
