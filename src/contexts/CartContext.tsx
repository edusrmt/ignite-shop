import { ReactNode, SetStateAction, createContext, useState } from 'react'

interface CartContextType {
  isCartOpen: boolean
  setIsCartOpen: (value: SetStateAction<boolean>) => void
}

interface CartProviderType {
  children: ReactNode
}

export const CartContext = createContext({} as CartContextType)

export function CartProvider({ children }: CartProviderType) {
  const [isCartOpen, setIsCartOpen] = useState(false)

  return (
    <CartContext.Provider value={{ isCartOpen, setIsCartOpen }}>
      {children}
    </CartContext.Provider>
  )
}
