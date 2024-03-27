import { DataContextProvider } from './data/contexts/DataContext';
import { Home } from './pages/Home/Home';
import { Header } from './ui/components/Header/Header';
import { Sidenav } from './ui/components/Sidenav/Sidenav';

function App() {
   return (
      <>
         <DataContextProvider>
            <Sidenav />
            <main>
               <Header />
               <Home />
            </main>
         </DataContextProvider>
      </>
   );
}

export default App;
