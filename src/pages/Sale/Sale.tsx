import { useParams } from 'react-router-dom';
import { useFetch } from '../../data/hooks/useFetch';
import { SalesProps } from '../../data/@types/IDataContext';

export const Sale = () => {
   const { id } = useParams();
   const { data, load } = useFetch<SalesProps>(
      `https://data.origamid.dev/vendas/${id}`,
   );

   if (data === null) return null;
   return (
      <section className="border mt-5 space-y-5">
         <div className="bg-white flex-1 py-2 px-5 rounded-[1.25rem] text-xl">
            <span>ID: </span>
            <span>{data.id}</span>
         </div>
         <div>
            <span>Nome: </span>
            <span>{data.nome}</span>
         </div>
         <div>
            <span>Preço: </span>
            <span>{data.preco}</span>
         </div>
         <div>
            <span>Status: </span>
            <span>{data.status}</span>
         </div>
         <div>
            <span>Pagamento: </span>
            <span>{data.pagamento}</span>
         </div>
      </section>
   );
};
