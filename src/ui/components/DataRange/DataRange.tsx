import { DataInput } from '../Form/DataInput';
import { form } from '../../styles/formStyles';
import { UseData } from '../../../data/contexts/DataContext';

export const DataRange = () => {
   const { begin, setBegin, end, setEnd } = UseData();

   return (
      <form className={form()}>
         <div className="flex space-x-5  ms:items-center">
            <DataInput
               legend="Inicio"
               id="begin"
               type="date"
               value={begin}
               onChange={({ target }) => setBegin(target.value)}
            />
            <DataInput
               legend="Final"
               id="end"
               type="date"
               value={end}
               onChange={({ target }) => setEnd(target.value)}
            />
         </div>
      </form>
   );
};
