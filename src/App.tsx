import { Home } from './pages/Home/Home';
import { Header } from './ui/components/Header/Header';
import { Sidenav } from './ui/components/Sidenav/Sidenav';

function App() {
   return (
      <>
         <Sidenav />
         <main>
            <Header />
            <Home />
         </main>
      </>
   );
}

export default App;
