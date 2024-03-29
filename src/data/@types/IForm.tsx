import React from 'react';
import { VariantProps } from 'tailwind-variants';
import {
   buttonStyle,
   form,
   inputStyle,
   labelStyle,
} from '../../ui/styles/formStyles';

export interface FormProps extends VariantProps<typeof form> {}

export interface LabelProps extends VariantProps<typeof labelStyle> {}

export interface DataInputProps
   extends React.ComponentProps<'input'>,
      VariantProps<typeof inputStyle> {
   id: string;
   legend: string;
}

export interface ButtonProps
   extends React.ComponentProps<'button'>,
      VariantProps<typeof buttonStyle> {
   n: number;
}
