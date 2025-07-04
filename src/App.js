import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Product from './pages/Product';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Confirmation from './pages/Confirmation';
import { CartProvider } from './context/CartContext';
import { useContext } from 'react';


function App() {
  return (
    <CartProvider> 
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/product" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/confirmation" element={<Confirmation />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}




export default App;
