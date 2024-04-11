import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { DataContextProvider } from './data/contexts/DataContext';
import { Home } from './pages/Home/Home';
import { Sales } from './pages/Sales/Sales';
import { Header } from './ui/components/Header/Header';
import { Sidenav } from './ui/components/Sidenav/Sidenav';
import { Sale } from './pages/Sale/Sale';
import { Footer } from './ui/components/Footer/Footer';

function App() {
   return (
      <section className="bg-color-4 m-0 text-color-2 font-sans h-full lap:w-full lap:px-4 ms:px-1">
         <BrowserRouter>
            <DataContextProvider>
               <div className="grid space-y-5 p-5 grid-cols-[300px_1fr] space-x-8 max-w-[1200px] mx-auto lap:w-full lap:px-0 lap:flex lap:flex-col lap:space-x-0 ms:px-0.5">
                  <Sidenav />
                  <main className="lap:w-full">
                     <Header />
                     <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/sales" element={<Sales />} />
                        <Route path="/sales/:id" element={<Sale />} />
                     </Routes>
                  </main>
               </div>
            </DataContextProvider>
         </BrowserRouter>
         <Footer />
      </section>
   );
}

export default App;
