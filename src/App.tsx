import React from 'react';
import NavBar from './components/NavBar'; 
import Order from './components/Order'; 

import { OrderProvider } from './context/orderContext'; 

function App() {
  return (
    <OrderProvider>
        <NavBar />
        <Order />
    </OrderProvider>
  );
}

export default App;
