import { TCell } from './TCell';

interface TRowProps {
   id: string;
   name: string;
   price: number;
}

export const TRow = ({ id, name, price }: TRowProps) => {
   return (
      <tr>
         <TCell>{id}</TCell>
         <TCell>{name}</TCell>
         <TCell>{price}</TCell>
      </tr>
   );
};
