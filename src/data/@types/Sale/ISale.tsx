import React from 'react';
import { VariantProps } from 'tailwind-variants';
import { personInformationStyle } from '../../../ui/styles/Sale/saleStyles';

export interface InfoPersonFieldProps
   extends React.ComponentProps<'div'>,
      VariantProps<typeof personInformationStyle> {
   legend: string;
   info: string | number;
}
