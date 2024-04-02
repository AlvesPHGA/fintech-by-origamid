import { UseData } from '../../data/contexts/DataContext';

export const Home = () => {
   const { data } = UseData();

   if (data === null) return null;

   return (
      <section className="pt-10">
         <div className="flex space-x-5 text-2xl font-semibold">
            <div className="bg-white py-2.5 px-5 rounded-[1.25rem]">
               <h2 className="text-2xl mb-2.5 text-color-1">Vendas</h2>
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
            <div className="bg-white py-2.5 px-5 rounded-[1.25rem]">
               <h2 className="text-2xl mb-2.5 text-color-1">Recebido</h2>
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
            <div className="bg-white py-2.5 px-5 rounded-[1.25rem]">
               <h2 className="text-2xl mb-2.5 text-color-1">Processando</h2>
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
