export function getDataOld(n: number) {
   const date = new Date();
   date.setDate(date.getDate() - n);
   const dd = String(date.getDate()).padStart(2, '0');
   const mm = String(date.getMonth() + 1).padStart(2, '0');
   const yyyy = String(date.getFullYear());

   return `${yyyy}-${mm}-${dd}`;
}

// button component
export function monthName(n: number) {
   const date = new Date();
   date.setMonth(date.getMonth() + n);
   return new Intl.DateTimeFormat('pt-BR', { month: 'long' }).format(date);
}

export function formateDate(date: Date) {
   const dd = String(date.getDate()).padStart(2, '0');
   const mm = String(date.getMonth() + 1).padStart(2, '0');
   const yyyy = String(date.getFullYear());

   return `${yyyy}-${mm}-${dd}`;
}
