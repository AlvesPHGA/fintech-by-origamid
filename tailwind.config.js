/** @type {import('tailwindcss').Config} */
export default {
   content: ['./src/**/*.tsx', './index.html'],
   theme: {
      extend: {
         colors: {
            'color-1': '#463220',
            'color-2': '#66593c',
            'color-3': '#eceadd',
            'color-4': '#f7f8f5',
         },
      },
   },
   plugins: [],
};
