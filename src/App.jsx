import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { ProviderPizza } from './context/ContextPizza';
import Carrito from './views/Carrito';
import NavBar from './components/NavBar';
import Home from './views/Home';
import Pizza from './views/Pizza';
import Footer from './components/Footer';

function App() {
   return (
      <>
         <ProviderPizza>
            <BrowserRouter>
               <NavBar />
               <main>
                  <Routes>
                     <Route path="/" element={<Home />} />
                     <Route path="/pizza/:id" element={<Pizza />} />
                     <Route path="/carrito" element={<Carrito />} />
                  </Routes>
               </main>
               <Footer />
            </BrowserRouter>
         </ProviderPizza>
      </>
   );
}

export default App;
