import { LinkNav } from '../../components/LinkNav/LinkNav';

import {
   Home,
   BadgeDollarSign,
   ArrowDownUp,
   Settings,
   Mail,
   LogOut,
} from 'lucide-react';
import { iconLinkStyle, navStyle } from '../../styles/Nav/NavStyles';
import { ComponentProps } from 'react';

interface NavProps extends ComponentProps<'nav'> {
   active?: boolean;
}

export const Nav = ({ active }: NavProps) => {
   return (
      <nav data-active={active} className={navStyle({ active })}>
         <LinkNav link="/">
            <div className={iconLinkStyle()}>
               <Home />
            </div>
            Resumo
         </LinkNav>

         <LinkNav link="/sales">
            <div className={iconLinkStyle()}>
               <BadgeDollarSign />
            </div>
            Vendas
         </LinkNav>

         <LinkNav link="#">
            <div className={iconLinkStyle()}>
               <ArrowDownUp />
            </div>
            Webhooks
         </LinkNav>

         <LinkNav link="#">
            <div className={iconLinkStyle()}>
               <Settings />
            </div>
            Configurações
         </LinkNav>

         <LinkNav link="#">
            <div className={iconLinkStyle()}>
               <Mail />
            </div>
            Contato
         </LinkNav>

         <LinkNav link="#">
            <div className={iconLinkStyle()}>
               <LogOut />
            </div>
            Sair
         </LinkNav>
      </nav>
   );
};
