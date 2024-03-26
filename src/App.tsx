import { Home } from './pages/Home/Home';
import { Header } from './ui/components/Header/Header';
import { Sidenav } from './ui/components/Sidenav/Sidenav';

function App() {
   return (
      <>
         <Sidenav />
         <Header />
         <Home />
      </>
   );
}

export default App;
