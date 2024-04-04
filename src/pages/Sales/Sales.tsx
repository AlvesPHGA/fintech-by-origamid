import { UseData } from '../../data/contexts/DataContext';
import { TableSales } from '../../ui/partials/TableSales/TableSales';

export const Sales = () => {
   const { data } = UseData();

   if (data === null) return null;
   return <TableSales />;
};
