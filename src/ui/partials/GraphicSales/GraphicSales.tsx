import {
   CartesianGrid,
   Line,
   LineChart,
   ResponsiveContainer,
   Tooltip,
   XAxis,
   YAxis,
} from 'recharts';
import { SalesProps } from '../../../data/@types/IDataContext';

interface SalesDataProps {
   data: string;
   pago: number;
   processando: number;
   falha: number;
}

function dataTransform(data: SalesProps[]): SalesDataProps[] {
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

export const GraphicSales = ({ data }: { data: SalesProps[] }) => {
   const transform = dataTransform(data);

   return (
      <ResponsiveContainer width="99%" height={400}>
         <LineChart
            data={transform}
            margin={{
               top: 5,
               right: 20,
               left: 10,
               bottom: 5,
            }}
         >
            <XAxis dataKey="data" />
            <YAxis />
            <Tooltip />
            <CartesianGrid stroke="#f5f5f5" />
            <Line
               type="monotone"
               dataKey="pago"
               stroke="blue"
               strokeWidth={2}
            />
            <Line
               type="monotone"
               dataKey="falha"
               stroke="red"
               strokeWidth={2}
            />
            <Line
               type="monotone"
               dataKey="processando"
               stroke="green"
               strokeWidth={2}
            />
         </LineChart>
      </ResponsiveContainer>
   );
};
