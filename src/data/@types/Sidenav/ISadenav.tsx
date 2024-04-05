import React from 'react';
import { VariantProps } from 'tailwind-variants';
import {
   logoStyle,
   sidenavStyle,
} from '../../../ui/styles/Sidenav/SidenavStyles';

export interface SidenavProps
   extends React.ComponentProps<'section'>,
      React.ComponentProps<'span'>,
      VariantProps<typeof sidenavStyle>,
      VariantProps<typeof logoStyle> {}
