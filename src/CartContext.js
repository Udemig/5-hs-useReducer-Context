import { createContext, useState } from 'react';

const CartContext = createContext();

// children > sağlayıcı tarafından sarılan diğer bileşenler
// CartProvider > İçerisinde bulınan elemanlara veri aktarma
export function CartProvider({ children }) {
  // verinin stateini tutma
  const [items, setItems] = useState([]);

  // sepete ürün ekleme
  const addToCart = (product) => {
    setItems([...items, product]);
  };
  return (
    <CartContext.Provider value={{ items, addToCart }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartContext;
