import { Months } from '../../partials/Months/Months';
import { DataRange } from '../DataRange/DataRange';

export const Header = () => {
   return (
      <header>
         <DataRange />
         <Months />
      </header>
   );
};
