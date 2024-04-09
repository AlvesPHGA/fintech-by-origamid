import { UseData } from '../../data/contexts/DataContext';
import { Load } from '../../ui/components/Load/Load';
import { GraphicSales } from '../../ui/partials/GraphicSales/GraphicSales';
import { Resume } from '../../ui/partials/Resume/Resume';

export const Home = () => {
   const { data, load } = UseData();

   if (load) return <Load />;
   if (data === null) return null;

   return (
      <section className="pt-10 space-y-5">
         <Resume />
         <GraphicSales data={data} />
      </section>
   );
};
