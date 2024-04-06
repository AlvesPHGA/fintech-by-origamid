import { useParams } from 'react-router-dom';
import { useFetch } from '../../data/hooks/useFetch';
import { SalesProps } from '../../data/@types/IDataContext';
import { InfoPersonField } from '../../ui/components/Sale/InfoPersonField';

export const Sale = () => {
   const { id } = useParams();
   const { data, load } = useFetch<SalesProps>(
      `https://data.origamid.dev/vendas/${id}`,
   );

   if (data === null) return null;
   return (
      <section className="mt-5 space-y-3">
         <InfoPersonField legend="ID" info={data.id} />
         <InfoPersonField legend="Nome" info={data.nome} />
         <InfoPersonField
            legend="Preço"
            info={data.preco.toLocaleString('pt-br', {
               style: 'currency',
               currency: 'BRL',
            })}
         />
         <InfoPersonField legend="Status" info={data.status} />
         <InfoPersonField legend="Pagamento" info={data.pagamento} />
      </section>
   );
};
