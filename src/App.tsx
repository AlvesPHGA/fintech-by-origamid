import { DataContextProvider } from './data/contexts/DataContext';
import { Home } from './pages/Home/Home';
import { Header } from './ui/components/Header/Header';
import { Sidenav } from './ui/components/Sidenav/Sidenav';

function App() {
   return (
      <section className="m-0 text-color-2 bg-color-4 font-sans">
         <DataContextProvider>
            <Sidenav />
            <main>
               <Header />
               <Home />
            </main>
         </DataContextProvider>
      </section>
   );
}

export default App;
