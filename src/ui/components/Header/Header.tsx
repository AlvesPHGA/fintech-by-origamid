import React from 'react';
import { Months } from '../../partials/Months/Months';
import { DataRange } from '../DataRange/DataRange';
import { useLocation } from 'react-router-dom';

export const Header = () => {
   const [page, setPage] = React.useState('');

   const local = useLocation();

   React.useEffect(() => {
      if (local.pathname === '/') {
         setPage('Resumo');
         document.title = `Fintech | ${page}`;
      } else if (local.pathname === '/sales') {
         setPage('Vendas');
         document.title = `Fintech | ${page}`;
      }
   }, [local, page]);

   return (
      <header>
         <div className="grid grid-cols-[1fr_300px] space-x-5">
            <DataRange />
            <div className="bg-white rounded-[1.25rem] flex items-center justify-center">
               <h1 className="text-6xl">{page}</h1>
            </div>
         </div>
         <Months />
      </header>
   );
};
