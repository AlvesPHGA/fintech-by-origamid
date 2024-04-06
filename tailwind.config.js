/** @type {import('tailwindcss').Config} */
export default {
   content: ['./src/**/*.tsx', './index.html'],
   theme: {
      extend: {
         animation: {
            rotateLoad: 'rotateLoad 1s ease-in-out infinite',
         },

         colors: {
            'color-1': '#463220',
            'color-2': '#66593c',
            'color-3': '#eceadd',
            'color-4': '#f7f8f5',
         },

         keyframes: {
            rotateLoad: {
               to: {
                  transform: 'rotate(360deg)',
               },
            },
         },
      },
   },
   plugins: [],
};
