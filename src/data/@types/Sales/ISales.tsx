import React from 'react';
import { VariantProps } from 'tailwind-variants';
import { tcellStyle, trowStyle } from '../../../ui/styles/Sales/TableStyle';

export interface TRowProps
   extends React.ComponentProps<'tr'>,
      VariantProps<typeof trowStyle> {
   id: string;
   name: string;
   price: number;
   status: string;
}

export interface TCellProps
   extends React.ComponentProps<'td'>,
      VariantProps<typeof tcellStyle> {}
