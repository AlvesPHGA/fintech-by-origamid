import React from 'react';
import { VariantProps } from 'tailwind-variants';
import {
   blockInformationStyle,
   legendBlockInformationStyle,
   resumeStyle,
} from '../../../ui/styles/Home/resumeStyles';

export interface ResumeProps
   extends React.ComponentProps<'div'>,
      VariantProps<typeof resumeStyle> {}

export interface BlockInformationProps
   extends React.ComponentProps<'div'>,
      VariantProps<typeof blockInformationStyle>,
      VariantProps<typeof legendBlockInformationStyle> {
   title: string;
   children: string;
}
