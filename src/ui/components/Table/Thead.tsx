import { TH } from './TH';

export const THead = () => {
   return (
      <thead className="text-left">
         <TH>ID</TH>
         <TH>Nome</TH>
         <TH>Valor</TH>
         <TH>Status</TH>
      </thead>
   );
};
