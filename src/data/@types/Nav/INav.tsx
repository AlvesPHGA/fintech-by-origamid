import React from 'react';
import { VariantProps } from 'tailwind-variants';
import { linkNavStyle, navStyle } from '../../../ui/styles/Nav/NavStyles';

export interface NavProps
   extends React.ComponentProps<'nav'>,
      VariantProps<typeof navStyle> {}

export interface linkNavProps
   extends React.ComponentProps<'a'>,
      VariantProps<typeof linkNavStyle> {
   link?: string;
}
