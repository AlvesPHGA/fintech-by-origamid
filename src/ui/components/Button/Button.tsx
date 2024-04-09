import { ButtonProps } from '../../../data/@types/IForm';
import { UseData } from '../../../data/contexts/DataContext';
import { formateDate, monthName } from '../../../data/services/functions/fData';
import { buttonStyle } from '../../styles/formStyles';

export const Button = ({ n }: ButtonProps) => {
   const { setBegin, setEnd } = UseData();

   const buttons = document.querySelectorAll('button');

   function setMonth(n: number) {
      const date = new Date();
      date.setMonth(date.getMonth() + n);

      const firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
      const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);

      setBegin(formateDate(firstDay));
      setEnd(formateDate(lastDay));
   }

   const handleClick: React.MouseEventHandler<HTMLButtonElement> = (ev) => {
      buttons.forEach((b) => b.classList.remove('border-color-2'));
      ev.currentTarget.classList.add('border-color-2');
   };

   return (
      <button
         className={buttonStyle()}
         onClick={() => {
            setMonth(n);
         }}
         onMouseUp={handleClick}
      >
         {monthName(n)}
      </button>
   );
};
