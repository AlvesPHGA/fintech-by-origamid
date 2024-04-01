import { UseData } from '../../data/contexts/DataContext';

export const Home = () => {
   const { data } = UseData();

   if (data === null) return null;

   return (
      <section>
         <div>
            <div>
               <h2>Vendas</h2>
               <span>
                  {data
                     .filter((d) => d.status !== 'falha')
                     .reduce((acc, item) => acc + item.preco, 0)
                     .toLocaleString('pt-BR', {
                        style: 'currency',
                        currency: 'BRL',
                     })}
               </span>
            </div>
            <div>
               <h2>Recebido</h2>
               <span>
                  {data
                     .filter((d) => d.status === 'pago')
                     .reduce((acc, item) => acc + item.preco, 0)
                     .toLocaleString('pt-BR', {
                        style: 'currency',
                        currency: 'BRL',
                     })}
               </span>
            </div>
            <div>
               <h2>Processando</h2>
               <span>
                  {data
                     .filter((d) => d.status === 'processando')
                     .reduce((acc, item) => acc + item.preco, 0)
                     .toLocaleString('pt-BR', {
                        style: 'currency',
                        currency: 'BRL',
                     })}
               </span>
            </div>
         </div>
      </section>
   );
};
