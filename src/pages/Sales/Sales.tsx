import { UseData } from '../../data/contexts/DataContext';
import { Load } from '../../ui/components/Load/Load';
import { TableSales } from '../../ui/partials/TableSales/TableSales';

export const Sales = () => {
   const { data, load } = UseData();

   if (load) return <Load />;
   if (data === null) return null;
   return <TableSales />;
};
