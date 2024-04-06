import { UseData } from '../../data/contexts/DataContext';
import { GraphicSales } from '../../ui/partials/GraphicSales/GraphicSales';
import { Resume } from '../../ui/partials/Resume/Resume';

export const Home = () => {
   const { data } = UseData();

   if (data === null) return null;

   return (
      <section className="pt-10">
         <Resume />
         <GraphicSales data={data} />
      </section>
   );
};
