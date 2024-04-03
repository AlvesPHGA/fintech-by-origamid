import React from 'react';
import { VariantProps } from 'tailwind-variants';
import { resumeStyle } from '../../../ui/styles/Home/resumeStyles';

export interface ResumeProps
   extends React.ComponentProps<'div'>,
      VariantProps<typeof resumeStyle> {}

export interface BlockInformationProps extends React.ComponentProps<'div'> {
   title: string;
   children: string;
}
