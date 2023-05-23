import { ReactNode, SetStateAction, createContext, useState } from 'react'

export interface Product {
  id: string
  name: string
  imageUrl: string
  price: number
}

interface CartContextType {
  isCartOpen: boolean
  cartItems: Product[]
  cartCount: number
  cartTotal: number
  setIsCartOpen: (value: SetStateAction<boolean>) => void
  addItemToCart: (product: Product) => void
  removeItemFromCart: (product: Product) => void
}

interface CartProviderType {
  children: ReactNode
}

const addCartItem = (cartItems: Product[], product: Product): Product[] => {
  if (cartItems.some((item) => item.id === product.id)) {
    return cartItems
  }

  return [...cartItems, product]
}

const removeCartItem = (cartItems: Product[], product: Product): Product[] => {
  return cartItems.filter((item) => item.id !== product.id)
}

export const CartContext = createContext({} as CartContextType)

export function CartProvider({ children }: CartProviderType) {
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [cartItems, setCartItems] = useState<Product[]>([])
  const [cartCount, setCartCount] = useState(0)
  const [cartTotal, setCartTotal] = useState(0)

  const updateCart = (newCartItems: Product[]) => {
    const newCartCount = newCartItems.length

    const newCartTotal = newCartItems.reduce(
      (total, item) => (total += item.price),
      0,
    )

    setCartItems(newCartItems)
    setCartCount(newCartCount)
    setCartTotal(newCartTotal)
  }

  const addItemToCart = (product: Product) => {
    const updatedItems = addCartItem(cartItems, product)
    updateCart(updatedItems)
  }

  const removeItemFromCart = (product: Product) => {
    const updatedItems = removeCartItem(cartItems, product)
    updateCart(updatedItems)
  }

  return (
    <CartContext.Provider
      value={{
        isCartOpen,
        cartItems,
        cartCount,
        cartTotal,
        setIsCartOpen,
        addItemToCart,
        removeItemFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
