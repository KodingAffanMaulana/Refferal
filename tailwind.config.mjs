/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        blue: '#1fb6ff',
        'soft-blue': '#E7F4FF',
        purple: '#7e5bef',
        'purple-light': '#B199D3',
        pink: '#ff49db',
        orange: '#ff7849',
        'orange-light': '#FFA700',
        gray: '#8492a6',
        'gray-light': '#d3dce6',
      },
    },
  },
  plugins: [],
};
