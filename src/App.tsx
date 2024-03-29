import { DataContextProvider } from './data/contexts/DataContext';
import { Home } from './pages/Home/Home';
import { Header } from './ui/components/Header/Header';
import { Sidenav } from './ui/components/Sidenav/Sidenav';
import { section } from './ui/styles/sectionStyles';

function App() {
   return (
      <section className={section()}>
         <DataContextProvider>
            <section className="grid space-y-5 p-5">
               <Sidenav />
               <main>
                  <Header />
                  <Home />
               </main>
            </section>
         </DataContextProvider>
      </section>
   );
}

export default App;
