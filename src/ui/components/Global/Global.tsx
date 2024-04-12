import React from 'react';
import { VariantProps } from 'tailwind-variants';
import { containerStyle } from '../../styles/Global/GlobalStyles';

export interface SectionProps
   extends React.ComponentProps<'section'>,
      VariantProps<typeof containerStyle> {}

export const Section = ({ ...props }) => {
   return <section className={containerStyle()} {...props} />;
};
