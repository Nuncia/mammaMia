import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { ProviderPizza } from './context/ContextPizza';
import Carrito from './views/Carrito';
import NavBar from './components/NavBar';
import Home from './views/Home';
import Pizza from './views/Pizza';
import DataPizza from './components/DataPizza';
import Footer from './components/Footer';

function App() {
   return (
      <>
         <ProviderPizza>
            <BrowserRouter>
               <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <NavBar />
                  <Routes>
                     <Route path="/" element={<Home />} />
                     <Route path="/pizza/:id" element={<Pizza />} />
                     <Route path="/dataPizza" element={<DataPizza />} />
                     <Route path="/carrito" element={<Carrito />} />
                  </Routes>
                  <Footer />
               </div>
            </BrowserRouter>
         </ProviderPizza>
      </>
   );
}

export default App;
