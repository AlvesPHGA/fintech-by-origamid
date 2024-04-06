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
import { dataTransform } from '../../../data/services/functions/dataTransform';

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
