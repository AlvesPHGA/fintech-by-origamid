import { UseData } from '../../../data/contexts/DataContext';
import { BlockInformation } from '../../components/DataInformation/BlockInformation';
import { resumeStyle } from '../../styles/Home/resumeStyles';

export const Resume = () => {
   const { data } = UseData();

   return (
      <div className={resumeStyle()}>
         <BlockInformation title="Vendas">
            {data!
               .filter((d) => d.status !== 'falha')
               .reduce((acc, item) => acc + item.preco, 0)
               .toLocaleString('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
               })}
         </BlockInformation>

         <BlockInformation title="Recebido">
            {data!
               .filter((d) => d.status === 'pago')
               .reduce((acc, item) => acc + item.preco, 0)
               .toLocaleString('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
               })}
         </BlockInformation>

         <BlockInformation title="Processando">
            {data!
               .filter((d) => d.status === 'processando')
               .reduce((acc, item) => acc + item.preco, 0)
               .toLocaleString('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
               })}
         </BlockInformation>
      </div>
   );
};
