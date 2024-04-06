import { InfoPersonFieldProps } from '../../../data/@types/Sale/ISale';
import { personInformationStyle } from '../../styles/Sale/saleStyles';

export const InfoPersonField = ({ legend, info }: InfoPersonFieldProps) => {
   return (
      <div className={personInformationStyle()}>
         <span>{legend}: </span>
         <span className="capitalize">{info}</span>
      </div>
   );
};
