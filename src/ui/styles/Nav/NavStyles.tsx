import { tv } from 'tailwind-variants';

export const navStyle = tv({
   base: `mt-5 px-5 space-y-5 lap:flex lap:items-center lap:mt-10 lap:space-y-0 lap:px-0 lap:mx-auto lap:w-fit lap:gap-5 tablet:grid tablet:grid-cols-3`,

   variants: {
      active: {
         false: 'ml:hidden',
         true: 'ml:flex ml:flex-col ml:absolute ml:top-16 ml:left-0 ml:w-full ml:bg-color-3 ml:rounded-[1.25rem] ml:py-10',
      },
   },

   defaultVariants: {
      active: true,
   },
});

export const linkNavStyle = tv({
   base: 'block text-left py-1 flex-1 flex items-center gap-2 text-xl text-color-1 rounded-md hover:bg-white lap:py-0 ml:hover:bg-transparent',
});

export const iconLinkStyle = tv({
   base: 'bg-white p-2 flex items-center justify-center rounded-3xl',
});
