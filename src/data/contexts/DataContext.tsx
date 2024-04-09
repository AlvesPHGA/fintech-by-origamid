import React from 'react';
import { useFetch } from '../hooks/useFetch';
import { DataContextProps, SalesProps } from '../@types/IDataContext';
import { getDataOld } from '../services/functions/fData';

const DataContext = React.createContext<DataContextProps | null>(null);

export const UseData = () => {
   const context = React.useContext(DataContext);

   if (!context) throw new Error('UseData need is on DataContextProvider');

   return context;
};

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
