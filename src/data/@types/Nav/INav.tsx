import React from 'react';
import { VariantProps } from 'tailwind-variants';
import {
   iconLinkStyle,
   linkNavStyle,
   navStyle,
} from '../../../ui/styles/Nav/NavStyles';

export interface NavProps
   extends React.ComponentProps<'nav'>,
      VariantProps<typeof navStyle> {}

export interface linkNavProps
   extends React.ComponentProps<'a'>,
      VariantProps<typeof linkNavStyle> {
   link?: string;
}

export interface iconNavProps
   extends React.ComponentProps<'div'>,
      VariantProps<typeof iconLinkStyle> {}
