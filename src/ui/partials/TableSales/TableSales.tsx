import { UseData } from '../../../data/contexts/DataContext';

export const TableSales = () => {
   const { data } = UseData();

   return (
      <table>
         <thead className="text-left">
            <th>ID</th>
            <th>Nome</th>
            <th>Valor</th>
            <th>Status</th>
         </thead>
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
