import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { DataContextProvider } from './data/contexts/DataContext';
import { Home } from './pages/Home/Home';
import { Sales } from './pages/Sales/Sales';
import { Header } from './ui/components/Header/Header';
import { Sidenav } from './ui/components/Sidenav/Sidenav';
import { Sale } from './pages/Sale/Sale';
import { Footer } from './ui/components/Footer/Footer';
import { Div, Main, Section } from './ui/components/Global/Global';

function App() {
   return (
      <Section>
         <BrowserRouter>
            <DataContextProvider>
               <Div>
                  <Sidenav />
                  <Main>
                     <Header />
                     <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/sales" element={<Sales />} />
                        <Route path="/sales/:id" element={<Sale />} />
                     </Routes>
                  </Main>
               </Div>
            </DataContextProvider>
         </BrowserRouter>
         <Footer />
      </Section>
   );
}

export default App;
