import { DataContextProvider } from './data/contexts/DataContext';
import { Home } from './pages/Home/Home';
import { Sales } from './pages/Sales/Sales';
import { Header } from './ui/components/Header/Header';
import { Sidenav } from './ui/components/Sidenav/Sidenav';

function App() {
   return (
      <section className="bg-color-4 m-0 text-color-2 font-sans">
         <DataContextProvider>
            <section className="grid space-y-5 p-5">
               <Sidenav />
               <main>
                  <Header />
                  <Home />
                  <Sales />
               </main>
            </section>
         </DataContextProvider>
      </section>
   );
}

export default App;
