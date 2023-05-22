import { useContext } from 'react'

import { Handbag } from '@phosphor-icons/react'

import { CartButtonContainer } from '@/src/styles/components/CartButton'
import { CartContext } from '@/src/contexts/CartContext'

export function CartButton() {
  const { isCartOpen, setIsCartOpen } = useContext(CartContext)

  const toggleIsCartOpen = () => {
    setIsCartOpen(!isCartOpen)
  }

  return (
    <CartButtonContainer onClick={toggleIsCartOpen}>
      <Handbag size={24} />
    </CartButtonContainer>
  )
}
