import { tcellStyle } from '../../styles/Sales/TableStyle';
import { TCellProps } from '../../../data/@types/Sales/ISales';

export const TCell = ({ cell, ...props }: TCellProps) => {
   return <td className={tcellStyle({ cell })} {...props} />;
};
