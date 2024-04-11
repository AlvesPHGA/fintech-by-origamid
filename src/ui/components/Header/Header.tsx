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
         <div className="grid grid-cols-[1fr_300px] space-x-5 ml:space-x-0 ml:flex ml:flex-col-reverse ml:items-center ml:gap-5 ms:space-x-0">
            <DataRange />
            <div className="bg-white rounded-[1.25rem] flex items-center justify-center ml:w-full ml:py-2">
               <h1 className="text-6xl ml:leading-none">{page}</h1>
            </div>
         </div>
         <Months />
      </header>
   );
};
