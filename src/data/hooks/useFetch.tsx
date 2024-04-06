import React from 'react';

export function useFetch<T>(url: RequestInfo | URL, options?: RequestInit) {
   const [data, setData] = React.useState<T | null>(null);
   const [load, setLoad] = React.useState(false);
   const [error, setError] = React.useState<string | null>(null);

   const optRef = React.useRef(options);
   optRef.current = options;

   React.useEffect(() => {
      const controller = new AbortController();
      const { signal } = controller;

      async function fetchData() {
         setLoad(true);
         setData(null);
         try {
            const res = await fetch(url, {
               signal,
               ...optRef.current,
            });
            if (!res.ok) throw new Error(`Error ${res.status}`);

            const json = (await res.json()) as T;

            if (!signal.aborted) setData(json);
         } catch (error) {
            if (!signal.aborted && error instanceof Error)
               setError(error.message);
         } finally {
            if (!signal.aborted) setLoad(false);
         }
      }

      fetchData();

      return () => controller.abort();
   }, [url]);

   return {
      data,
      load,
      error,
   };
}
