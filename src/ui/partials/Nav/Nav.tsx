import { LinkNav } from '../../components/LinkNav/LinkNav';

export const Nav = () => {
   return (
      <nav>
         <LinkNav>Resumo</LinkNav>
         <LinkNav>Vendas</LinkNav>
         <LinkNav>Webhooks</LinkNav>
         <LinkNav>Configurações</LinkNav>
         <LinkNav>Contato</LinkNav>
         <LinkNav>Sair</LinkNav>
      </nav>
   );
};
