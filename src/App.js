import NavBar from './components/header/NavBar';
import ContainerCardItems from './components/components items/ContainerCardItems';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DetailsItem from './components/components items/ItemDetail';
import { createContext, useState } from 'react';
import ProviderContextoListCart from './components/components items/ProviderContextListCart';


function App() {

  return (
    <ProviderContextoListCart>
      <BrowserRouter>
        <NavBar />
          <Routes>
            <Route path='/' element={ <ContainerCardItems />} />
            <Route path='/item/:idItem' element={ <DetailsItem />} />
            <Route path='/category/:idCategory' element={ <ContainerCardItems />} />
          </Routes>
      </BrowserRouter>
    </ProviderContextoListCart>
    
    
  );
}

export default App;