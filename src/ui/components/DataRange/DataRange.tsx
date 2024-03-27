import { DataInput } from '../Form/DataInput';

export const DataRange = () => {
   return (
      <form>
         <div>
            <DataInput legend="Inicio" id="begin" />
            <DataInput legend="Final" id="end" />
         </div>
      </form>
   );
};
