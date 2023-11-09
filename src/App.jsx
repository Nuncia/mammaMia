import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import { ProviderPizza } from './context/ContextPizza';
import Pizzas from './views/Home';
import NavBar from './components/NavBar';
import Home from './views/Home';


function App() {

  return (
    <>
    <ProviderPizza>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          
        </Routes>
        <Pizzas/>
      </BrowserRouter>
    </ProviderPizza>
    </>
  )
}

export default App
