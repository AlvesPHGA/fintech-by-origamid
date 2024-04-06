import React from 'react';
import { VariantProps } from 'tailwind-variants';
import { linkNavStyle } from '../../../ui/styles/Nav/NavStyles';

export interface linkNavProps
   extends React.ComponentProps<'a'>,
      VariantProps<typeof linkNavStyle> {
   link?: string;
}
