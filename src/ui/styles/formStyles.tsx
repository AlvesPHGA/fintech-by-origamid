import { tv } from 'tailwind-variants';

export const form = tv({
   base: 'p-5 rounded-[1.25rem] bg-white',
});

export const labelStyle = tv({
   base: 'block space-x-2.5 font-semibold text-base text-color-2 px-3 py-2.5 bg-color-4 rounded-[1.25rem]',
});

export const inputStyle = tv({
   base: 'border-0 font-mono text-color-2 px-3 py-2.5 bg-color-4 rounded-[1.25rem]',
});
