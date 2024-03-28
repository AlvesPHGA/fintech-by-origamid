import React from 'react';
import { VariantProps } from 'tailwind-variants';
import { form } from '../../ui/styles/formStyles';

export interface FormProps extends VariantProps<typeof form> {}

export interface DataInputProps extends React.ComponentProps<'input'> {
   id: string;
   legend: string;
}
