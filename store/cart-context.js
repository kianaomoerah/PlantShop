import { createContext, useState } from "react";

export const CartContext = createContext({
  items: [],
  getProductQuantity: (id) => {},
  addItem: (id) => {},
  removeItem: (id) => {},
  deleteCart: () => {},
  clearCart: () => {},
  getTotal: () => {},
  getQuantityTotal: () => {}
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
      // todo: clean-up, prop and value are the same
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

  function clearCart() {
    setCartProducts([])
  }

  function getTotal() {
    let totalCost = 0;

    cartProducts.map((cartItem) => {
      let totalItemPrice = (cartItem.price * cartItem.quantity)
      totalCost += totalItemPrice
    });

    return totalCost
  }

  function getQuantityTotal() {
    let totalOrderQuantity = 0;
    cartProducts.map((cartItem) => {
      let totalItemQuantity = cartItem.quantity
      totalOrderQuantity += totalItemQuantity
    })

    return totalOrderQuantity
  }

  const contextValue = {
    items: cartProducts,
    getProductQuantity,
    addItem,
    removeItem,
    deleteCart,
    clearCart,
    getTotal,
    getQuantityTotal
  }


  return (
    <CartContext.Provider value={contextValue}>
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider;