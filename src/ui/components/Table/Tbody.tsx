import { UseData } from '../../../data/contexts/DataContext';

export const TBody = () => {
   const { data } = UseData();
   return (
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
   );
};