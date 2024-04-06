import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { DataContextProvider } from './data/contexts/DataContext';
import { Home } from './pages/Home/Home';
import { Sales } from './pages/Sales/Sales';
import { Header } from './ui/components/Header/Header';
import { Sidenav } from './ui/components/Sidenav/Sidenav';

function App() {
   return (
      <section className="bg-color-4 m-0 text-color-2 font-sans">
         <BrowserRouter>
            <DataContextProvider>
               <div className="grid space-y-5 p-5 grid-cols-[300px_1fr] space-x-8 max-w-[1200px] mx-auto">
                  <Sidenav />
                  <main>
                     <Header />
                     <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/sales" element={<Sales />} />
                     </Routes>
                  </main>
               </div>
            </DataContextProvider>
         </BrowserRouter>
      </section>
   );
}

export default App;
