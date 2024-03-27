import React from 'react';
import { useFetch } from '../hooks/useFetch';
import { DataContextProps, SalesProps } from '../@types/IDataContext';

const DataContext = React.createContext<DataContextProps | null>(null);

export const DataContextProvider = ({ children }: React.PropsWithChildren) => {
   const { data, load, error } = useFetch<SalesProps[]>(
      'https://data.origamid.dev/vendas/',
   );
   return (
      <DataContext.Provider value={{ data, load, error }}>
         {children}
      </DataContext.Provider>
   );
};
