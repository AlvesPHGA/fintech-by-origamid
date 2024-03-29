import React from 'react';
import { VariantProps } from 'tailwind-variants';
import { form, inputStyle, labelStyle } from '../../ui/styles/formStyles';

export interface FormProps extends VariantProps<typeof form> {}

export interface LabelProps extends VariantProps<typeof labelStyle> {}

export interface DataInputProps
   extends React.ComponentProps<'input'>,
      VariantProps<typeof inputStyle> {
   id: string;
   legend: string;
}
