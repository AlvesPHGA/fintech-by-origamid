import { TBody } from '../../components/Table/Tbody';
import { THead } from '../../components/Table/Thead';

export const TableSales = () => {
   return (
      <table className="mt-5 lap:mt-10 lap:mx-auto">
         <THead />
         <TBody />
      </table>
   );
};
