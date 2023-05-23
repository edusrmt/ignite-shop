import { Handbag } from '@phosphor-icons/react'

import { Badge, CartButtonContainer } from '@/src/styles/components/CartButton'
import { useContext } from 'react'
import { CartContext } from '../contexts/CartContext'

interface CartButtonProps {
  handleClick: () => void
  badge?: boolean
}

export function CartButton({ handleClick, badge = false }: CartButtonProps) {
  const { cartCount } = useContext(CartContext)

  return (
    <CartButtonContainer onClick={handleClick}>
      <Handbag size={24} />
      {badge && cartCount > 0 && <Badge>{cartCount}</Badge>}
    </CartButtonContainer>
  )
}
