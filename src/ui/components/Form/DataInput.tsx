import { DataInputProps } from '../../../data/@types/IForm';

export const DataInput = ({ legend, id, ...props }: DataInputProps) => {
   return (
      <div>
         <label htmlFor={id}>{legend}</label>
         <input id={id} name={id} type="text" />
      </div>
   );
};
