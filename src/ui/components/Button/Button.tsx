import { ButtonProps } from '../../../data/@types/IForm';
import { UseData } from '../../../data/contexts/DataContext';
import { formateDate, monthName } from '../../../data/services/functions/fData';
import { buttonStyle } from '../../styles/formStyles';

export const Button = ({ n }: ButtonProps) => {
   const { setBegin, setEnd } = UseData();

   function setMonth(n: number) {
      const date = new Date();
      date.setMonth(date.getMonth() + n);

      const firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
      const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);

      setBegin(formateDate(firstDay));
      setEnd(formateDate(lastDay));
   }

   return (
      <button className={buttonStyle()} onClick={() => setMonth(n)}>
         {monthName(n)}
      </button>
   );
};
