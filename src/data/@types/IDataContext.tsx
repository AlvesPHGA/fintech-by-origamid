export interface DataContextProps {
   data: SalesProps[] | null;
   load: boolean;
   error: string | null;
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
