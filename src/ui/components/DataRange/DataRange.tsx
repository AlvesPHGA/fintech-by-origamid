import React from 'react';
import { DataInput } from '../Form/DataInput';

export const DataRange = () => {
   const [begin, setBegin] = React.useState('');
   const [end, setEnd] = React.useState('');

   return (
      <form>
         <div>
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