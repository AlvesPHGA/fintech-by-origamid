import { DataInput } from '../Form/DataInput';

export const DataRange = () => {
   return (
      <form>
         <div>
            <DataInput legend="Inicio" id="begin" type="date" />
            <DataInput legend="Final" id="end" type="date" />
         </div>
      </form>
   );
};
