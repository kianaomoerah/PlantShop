import { createContext, useState } from "react";
import { PLANTS } from '../data/plant-data';

export const CartContext = createContext({
  items: [],
  getProductQuantity: (id) => {},
  addItem: (id) => {},
  removeItem: (id) => {},
  deleteCart: () => {},
  getTotal: () => {}
});

export function CartProvider({children}) {

  const [ cartProducts, setCartProducts ] = useState([]);

  function getProductQuantity(id) {
    const quantity = cartProducts.find(product => product.id === id)?.quantity 
      // if no item is found, do not return quantity property 

      if (quantity === undefined) {
        return 0;
      }

      return quantity
  }

  function addItem(id, name, image, price) {
    const quantity = getProductQuantity(id);

    if (quantity === 0) {
      // item does not exist in cart
      setCartProducts([...cartProducts, {id: id, name: name, image: image, price: price, quantity: 1}])
    } else {
      // item exists in cart
      setCartProducts(
        cartProducts.map(
          product => product.id === id 
          ? {...product, quantity: product.quantity + 1}
          : product

        )
      )
    }
  }

  function removeItem(id) {
    const quantity = getProductQuantity(id);

    if (quantity == 1) {
      deleteCart(id);
    } else {
      setCartProducts(
        cartProducts.map(
          product => product.id === id 
          ? {...product, quantity: product.quantity - 1}
          : product

        )
      )
    }
  }

  function deleteCart(id) {
    setCartProducts(
      cartProducts => cartProducts.filter(currentProduct => {
        return currentProduct.id != id;
      })
    )
  }

  function getTotal(id) {
    let totalCost = 0;
    cartProducts.map((cartItem) => {
      const productData = PLANTS.find(cartItem => cartItem.id === id);
      totalCost += (productData.price * cartItem.quantity);
    });

    return totalCost
  }

  const contextValue = {
    items: cartProducts,
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

export default CartProvider;