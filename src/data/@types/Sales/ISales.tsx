import React from 'react';
import { VariantProps } from 'tailwind-variants';
import { trowStyle } from '../../../ui/styles/Sales/TableStyle';

export interface TRowProps
   extends React.ComponentProps<'tr'>,
      VariantProps<typeof trowStyle> {
   id: string;
   name: string;
   price: number;
   status: string;
}
