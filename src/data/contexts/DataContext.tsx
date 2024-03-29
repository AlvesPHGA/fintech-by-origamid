import React from 'react';
import { useFetch } from '../hooks/useFetch';
import { DataContextProps, SalesProps } from '../@types/IDataContext';

const DataContext = React.createContext<DataContextProps | null>(null);

export const UseData = () => {
   const context = React.useContext(DataContext);

   if (!context) throw new Error('UseData need is on DataContextProvider');

   return context;
};

function getDataOld(n: number) {
   const date = new Date();
   date.setDate(date.getDate() - n);
   const dd = String(date.getDate()).padStart(2, '0');
   const mm = String(date.getMonth() + 1).padStart(2, '0');
   const yyyy = String(date.getFullYear());

   return `${yyyy}-${mm}-${dd}`;
}

export const DataContextProvider = ({ children }: React.PropsWithChildren) => {
   const [begin, setBegin] = React.useState(getDataOld(15));
   const [end, setEnd] = React.useState(getDataOld(0));

   const { data, load, error } = useFetch<SalesProps[]>(
      `https://data.origamid.dev/vendas/?inicio=${begin}&final=${end}`,
   );
   return (
      <DataContext.Provider
         value={{ data, load, error, begin, setBegin, end, setEnd }}
      >
         {children}
      </DataContext.Provider>
   );
};
