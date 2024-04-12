import { VariantProps } from 'tailwind-variants';
import { containerStyle } from '../../../ui/styles/Global/GlobalStyles';

export interface SectionProps
   extends React.ComponentProps<'section'>,
      VariantProps<typeof containerStyle> {}
