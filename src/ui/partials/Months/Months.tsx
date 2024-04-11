import { Button } from '../../components/Button/Button';

const numberMonth = [-3, -2, -1, 0];

export const Months = () => {
   return (
      <div className="flex space-x-5 mt-5 ml:grid ml:grid-cols-2 ml:space-x-0 ml:gap-1">
         {numberMonth.map((n) => (
            <Button n={n} />
         ))}
      </div>
   );
};
