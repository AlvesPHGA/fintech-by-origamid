import { Button } from '../../components/Button/Button';

const numberMonth = [-3, -2, -1, 0];

export const Months = () => {
   return (
      <div className="flex space-x-5 mt-5">
         {numberMonth.map((n) => (
            <Button n={n} />
         ))}
      </div>
   );
};
