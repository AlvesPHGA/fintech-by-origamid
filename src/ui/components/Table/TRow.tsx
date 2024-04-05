import { TRowProps } from '../../../data/@types/Sales/ISales';
import { trowStyle } from '../../styles/Sales/TableStyle';
import { TCell } from './TCell';

export const TRow = ({ id, name, price, status }: TRowProps) => {
   return (
      <tr className={trowStyle()}>
         <TCell>{id}</TCell>
         <TCell>{name}</TCell>
         <TCell>
            {price.toLocaleString('pt-br', {
               style: 'currency',
               currency: 'BRL',
            })}
         </TCell>
         <TCell>{status}</TCell>
      </tr>
   );
};
