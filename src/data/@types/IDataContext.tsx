export interface DataContextProps {
   data: SalesProps[] | null;
   load: boolean;
   error: string | null;
   begin: string;
   setBegin: React.Dispatch<React.SetStateAction<string>>;
   end: string;
   setEnd: React.Dispatch<React.SetStateAction<string>>;
}

export interface SalesProps {
   id: string;
   nome: string;
   preco: number;
   status: 'pago' | 'processando' | 'falha';
   pagamento: 'boleto' | 'pix' | 'cartão';
   data: string;
   parcelas: number | null;
}
