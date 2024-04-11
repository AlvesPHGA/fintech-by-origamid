import { NavLink } from 'react-router-dom';
import { TRowProps } from '../../../data/@types/Sales/ISales';
import { trowStyle } from '../../styles/Sales/TableStyle';
import { TCell } from './TCell';

import { Link } from 'lucide-react';

export const TRow = ({ id, name, price, status }: TRowProps) => {
   return (
      <tr className={trowStyle()}>
         <TCell cell="id">{id}</TCell>
         <TCell>{name}</TCell>
         <TCell>
            {price.toLocaleString('pt-br', {
               style: 'currency',
               currency: 'BRL',
            })}
         </TCell>
         <TCell>{status}</TCell>
         <TCell>
            <NavLink to={id}>
               <Link />
            </NavLink>
         </TCell>
      </tr>
   );
};
