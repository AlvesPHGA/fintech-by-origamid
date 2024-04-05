import { UseData } from '../../../data/contexts/DataContext';
import { TRow } from './TRow';

export const TBody = () => {
   const { data } = UseData();
   return (
      <tbody>
         {data!.map((sale) => (
            <TRow
               key={sale.id}
               id={sale.id}
               name={sale.nome}
               price={sale.preco}
            />
         ))}
      </tbody>
   );
};
