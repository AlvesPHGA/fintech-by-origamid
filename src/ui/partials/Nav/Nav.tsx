import { LinkNav } from '../../components/LinkNav/LinkNav';

import {
   Home,
   BadgeDollarSign,
   ArrowDownUp,
   Settings,
   Mail,
   LogOut,
} from 'lucide-react';

export const Nav = () => {
   return (
      <nav className="mt-5 px-5 space-y-5">
         <LinkNav
            link="#"
            className="flex items-center gap-2 text-xl text-color-1 rounded-md hover:bg-white"
         >
            <div className="bg-white p-2 flex items-center justify-center rounded-3xl">
               <Home />
            </div>
            Resumo
         </LinkNav>

         <LinkNav
            className="flex items-center gap-2 text-xl text-color-1 rounded-md hover:bg-white"
            link="#"
         >
            <div className="bg-white p-2 flex items-center justify-center rounded-3xl">
               <BadgeDollarSign />
            </div>
            Vendas
         </LinkNav>

         <LinkNav
            className="flex items-center gap-2 text-xl text-color-1 rounded-md hover:bg-white"
            link="#"
         >
            <div className="bg-white p-2 flex items-center justify-center rounded-3xl">
               <ArrowDownUp />
            </div>
            Webhooks
         </LinkNav>

         <LinkNav
            className="flex items-center gap-2 text-xl text-color-1 rounded-md hover:bg-white"
            link="#"
         >
            <div className="bg-white p-2 flex items-center justify-center rounded-3xl">
               <Settings />
            </div>
            Configurações
         </LinkNav>

         <LinkNav
            className="flex items-center gap-2 text-xl text-color-1 rounded-md hover:bg-white"
            link="#"
         >
            <div className="bg-white p-2 flex items-center justify-center rounded-3xl">
               <Mail />
            </div>
            Contato
         </LinkNav>

         <LinkNav
            className="flex items-center gap-2 text-xl text-color-1 rounded-md hover:bg-white"
            link="#"
         >
            <div className="bg-white p-2 flex items-center justify-center rounded-3xl">
               <LogOut />
            </div>
            Sair
         </LinkNav>
      </nav>
   );
};
