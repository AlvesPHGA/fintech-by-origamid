import { tv } from 'tailwind-variants';

export const trowStyle = tv({
   base: 'border-b-2 border-color-3 odd:bg-white first:border-t-2',
});

export const tcellStyle = tv({
   base: 'py-1 px-4',

   variants: {
      cell: {
         def: 'ml:px-1',
         id: 'ml:truncate ml:max-w-24 ml:pl-0.5 mm:max-w-20',
         status: 'ms:truncate ms:max-w-16',
      },
   },

   defaultVariants: {
      cell: 'def',
   },
});
