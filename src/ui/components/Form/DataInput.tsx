import { DataInputProps } from '../../../data/@types/IForm';
import { inputStyle, labelStyle } from '../../styles/formStyles';

export const DataInput = ({ legend, id, ...props }: DataInputProps) => {
   return (
      <div className="space-y-5 ms:space-x-0">
         <label htmlFor={id} className={labelStyle({ type: '_data' })}>
            {legend}
         </label>
         <input
            id={id}
            name={id}
            type="text"
            className={inputStyle()}
            {...props}
         />
      </div>
   );
};
