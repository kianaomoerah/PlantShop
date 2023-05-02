import { createContext, useState } from "react";

export const CartContext = createContext({
  items: [],
  getProductQuantity: () => {},
  addItem: (id) => {},
  removeItem: (id) => {},
  deleteCart: () => {},
  getTotal: () => {}
});

export function CartProvider({children}) {

  const [ cartProducts, setCartProducts ] = useState([])

  const contextValue = {
    items:[],
    getProductQuantity,
    addItem,
    removeItem,
    deleteCart,
    getTotal,
  }


  return (
    <CartContext.Provider value={contextValue}>
      {children}
    </CartContext.Provider>
  )
}