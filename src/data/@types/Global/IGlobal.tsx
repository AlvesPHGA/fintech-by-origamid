import { VariantProps } from 'tailwind-variants';
import {
   containerStyle,
   divStyle,
   mainStyle,
} from '../../../ui/styles/Global/GlobalStyles';
import React from 'react';

export interface SectionProps
   extends React.ComponentProps<'section'>,
      VariantProps<typeof containerStyle> {}

export interface DivProps
   extends React.ComponentProps<'div'>,
      VariantProps<typeof divStyle> {}

export interface MainProps
   extends React.ComponentProps<'main'>,
      VariantProps<typeof mainStyle> {}
