import { UseData } from '../../data/contexts/DataContext';

export const Sales = () => {
   const { data } = UseData();

   if (data === null) return null;
   return (
      <ul>
         {data.map((d) => (
            <li key={d.id}>
               <span>ID: {d.id}</span>
               <span>Nome: {d.nome}</span>
               <span>Valor: {d.preco}</span>
               <span>Status: {d.status}</span>
            </li>
         ))}
      </ul>
   );
};
