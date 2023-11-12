import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { ProviderPizza } from './context/ContextPizza';
// import Pizzas from './views/Home';
import NavBar from './components/NavBar';
import Home from './views/Home';
import Pizza from './views/Pizza';
import DataPizza from './components/DataPizza';

function App() {
   return (
      <>
         <ProviderPizza>
            <BrowserRouter>
               <NavBar />
               <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/pizza/:id" element={<Pizza />} />
                  <Route path="/dataPizza" element={<DataPizza />} />
               </Routes>
            </BrowserRouter>
         </ProviderPizza>
      </>
   );
}

export default App;
