import { UseData } from '../../../data/contexts/DataContext';
import { formateDate, monthName } from '../../../data/services/functions/fData';

export const Button = ({ n }: { n: number }) => {
   const { setBegin, setEnd } = UseData();

   function setMonth(n: number) {
      const date = new Date();
      date.setMonth(date.getMonth() + n);

      const firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
      const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);

      setBegin(formateDate(firstDay));
      setEnd(formateDate(lastDay));
   }

   return <button onClick={() => setMonth(n)}>{monthName(n)}</button>;
};
