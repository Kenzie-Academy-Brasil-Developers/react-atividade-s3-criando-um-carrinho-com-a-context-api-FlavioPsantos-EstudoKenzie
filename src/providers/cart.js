import { createContext, useState } from 'react';


export const CartContext = createContext([]);


export const CartProvider = ({ children }) => {
	const [cart, setCartToCart] = useState([]);

       
  const addToCart = (item) => {
    setCartToCart([...cart, item]);
  };

	
  const removeFromCart = (item) => {
    const newCatalogue = cart.filter(
      (itemOnCatalogue) => itemOnCatalogue.name !== item.name
    );
    setCartToCart(newCatalogue);
  };

return (
  <CartContext.Provider
   value={{ cart, addToCart, removeFromCart }}>
	{children}
  </CartContext.Provider>
 )
}
