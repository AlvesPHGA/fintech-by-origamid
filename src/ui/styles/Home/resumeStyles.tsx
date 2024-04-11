import { tv } from 'tailwind-variants';

export const resumeStyle = tv({
   base: 'flex space-x-5 text-2xl font-semibold ml:flex-col ml:items-center ml:space-x-0 ml:gap-3',
});

export const blockInformationStyle = tv({
   base: 'bg-white py-2.5 px-5 rounded-[1.25rem] ml:w-full ml:text-center ml:py-1.5',
});

export const legendBlockInformationStyle = tv({
   base: 'text-2xl mb-2.5 text-color-1',
});
