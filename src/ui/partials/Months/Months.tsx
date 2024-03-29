import { Button } from '../../components/Button/Button';

export const Months = () => {
   return (
      <div className="flex space-x-5 mt-5">
         <Button n={-2} />
         <Button n={-1} />
         <Button n={0} />
      </div>
   );
};
