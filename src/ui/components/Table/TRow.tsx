import { TCell } from './TCell';

interface TRowProps {
   id: string;
   name: string;
   price: number;
   status: string;
}

export const TRow = ({ id, name, price, status }: TRowProps) => {
   return (
      <tr className="border-b-2 border-color-3 odd:bg-white">
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
