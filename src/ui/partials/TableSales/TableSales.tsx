import { UseData } from '../../../data/contexts/DataContext';
import { THead } from '../../components/Table/Thead';

export const TableSales = () => {
   const { data } = UseData();

   return (
      <table>
         <THead />
         <tbody>
            {data!.map((sale) => (
               <tr key={sale.id}>
                  <td className="font-mono">{sale.id}</td>
                  <td>{sale.nome}</td>
                  <td>
                     {sale.preco.toLocaleString('pt-BR', {
                        style: 'currency',
                        currency: 'BRL',
                     })}
                  </td>
                  <td>{sale.status}</td>
               </tr>
            ))}
         </tbody>
      </table>
   );
};
