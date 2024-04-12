import { tv } from 'tailwind-variants';

export const containerStyle = tv({
   base: 'bg-color-4 m-0 text-color-2 font-sans h-full lap:w-full lap:px-4 ms:px-1',
});

export const divStyle = tv({
   base: 'grid space-y-5 p-5 grid-cols-[300px_1fr] space-x-8 max-w-[1200px] mx-auto lap:w-full lap:px-0 lap:flex lap:flex-col lap:space-x-0 ms:px-0.5',
});

export const mainStyle = tv({
   base: 'lap:w-full',
});
