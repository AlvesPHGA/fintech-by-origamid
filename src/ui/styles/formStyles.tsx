import { tv } from 'tailwind-variants';

export const form = tv({
   base: 'p-5 rounded-[1.25rem] bg-white mm:w-full mm:flex mm:items-center mm:justify-center mm:p-1.5 ms:gap-1 ms:space-x-0 ms:text-sm ms:justify-center ms:px-0 ms:items-center',
});

export const labelStyle = tv({
   base: 'block space-x-2.5 font-semibold text-base text-color-2 ',

   variants: {
      type: {
         _data: 'bg-color-4 rounded-[1.25rem] px-3 py-2.5 ms:py-1',
      },
   },
});

export const inputStyle = tv({
   base: 'border-0 font-mono text-color-2 px-3 py-2.5 bg-color-4 rounded-[1.25rem] ms:py-1 ms:px-1',
});

export const buttonStyle = tv({
   base: `py-2.5 px-5 bg-color-3 rounded-[1.25rem] text-color-2 font-semibold capitalize border-2 hover:border-color-2 transition`,
});
