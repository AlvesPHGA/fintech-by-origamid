import React from 'react';
import { VariantProps } from 'tailwind-variants';
import {
   blockInformationStyle,
   legendBlockInformationStyle,
} from '../../../ui/styles/Home/resumeStyles';

export interface BlockInformationProps
   extends React.ComponentProps<'div'>,
      VariantProps<typeof blockInformationStyle>,
      VariantProps<typeof legendBlockInformationStyle> {
   title: string;
   children: string;
}
