import { SalesDataProps } from '../../@types/Home/IResume';
import { SalesProps } from '../../@types/IDataContext';

export function dataTransform(data: SalesProps[]): SalesDataProps[] {
   const days = data.reduce((acc: { [key: string]: SalesDataProps }, item) => {
      const day = item.data.split(' ')[0];

      if (!acc[day]) {
         acc[day] = {
            data: day,
            pago: 0,
            falha: 0,
            processando: 0,
         };
      }
      acc[day][item.status] += item.preco;
      return acc;
   }, {});

   return Object.values(days);
}
