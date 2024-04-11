import { Menu, X } from 'lucide-react';
import { Nav } from '../../partials/Nav/Nav';
import { logoStyle, sidenavStyle } from '../../styles/Sidenav/SidenavStyles';
import React from 'react';

export const Sidenav = () => {
   const [active, setActive] = React.useState(false);

   function handleMenu() {
      setActive(!active);
   }

   return (
      <section className={sidenavStyle()}>
         <span className={logoStyle()}>Fintech</span>
         {active ? (
            <X className="size-10" onClick={handleMenu} />
         ) : (
            <Menu className={`size-10`} onClick={handleMenu} />
         )}

         {active && <Nav />}
      </section>
   );
};
