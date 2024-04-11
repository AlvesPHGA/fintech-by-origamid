import { Menu, X } from 'lucide-react';
import { Nav } from '../../partials/Nav/Nav';
import { logoStyle, sidenavStyle } from '../../styles/Sidenav/SidenavStyles';
import React from 'react';
import { useLocation } from 'react-router-dom';

export const Sidenav = () => {
   const [active, setActive] = React.useState(false);
   const [screen, setScreen] = React.useState('');

   const { pathname } = useLocation();

   React.useEffect(() => {
      const screenCustomer = window.screen.width;
      if (screenCustomer > 425) setScreen('hidden');
   }, []);

   React.useEffect(() => {
      setActive(false);
   }, [pathname]);

   return (
      <section className={sidenavStyle()}>
         <span className={logoStyle()}>Fintech</span>

         <div className={`${screen}`}>
            {active ? (
               <X
                  className="size-10"
                  onClick={() => {
                     setActive(!active);
                  }}
               />
            ) : (
               <Menu
                  className={`size-10`}
                  onClick={() => {
                     setActive(!active);
                  }}
               />
            )}
         </div>

         <Nav active={active} />
      </section>
   );
};
