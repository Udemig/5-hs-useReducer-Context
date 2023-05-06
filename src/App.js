import Header from './components/Header';
import Products from './pages/Products';
import Checkout from './pages/Checkout';
import { CartProvider } from './CartContext';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      {/* SAĞLAYICI BÜTÜN PROJEYİ KAPSIYOR */}
      <CartProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Products />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </>
  );
}

export default App;
