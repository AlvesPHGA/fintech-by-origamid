import { Nav } from '../../partials/Nav/Nav';
import { logoStyle, sidenavStyle } from '../../styles/Sidenav/SidenavStyles';

export const Sidenav = () => {
   return (
      <section className={sidenavStyle()}>
         <span className={logoStyle()}>Fintech</span>
         <Nav />
      </section>
   );
};
