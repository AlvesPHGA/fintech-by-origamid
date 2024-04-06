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

const dataGraphic = [
   {
      data: '2024-02-20',
      pago: 6000,
      processando: 3000,
      falha: 2000,
   },
   {
      data: '2024-02-21',
      pago: 10000,
      processando: 3500,
      falha: 500,
   },

   {
      data: '2024-02-22',
      pago: 2000,
      processando: 2000,
      falha: 2500,
   },
];

export const GraphicSales = ({ data }: { data: SalesProps[] }) => {
   return (
      <ResponsiveContainer width="99%" height={400}>
         <LineChart
            data={dataGraphic}
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
