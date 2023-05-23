import { Handbag } from '@phosphor-icons/react'

import { CartButtonContainer } from '@/src/styles/components/CartButton'

interface CartButtonProps {
  handleClick: () => void
}

export function CartButton({ handleClick }: CartButtonProps) {
  return (
    <CartButtonContainer onClick={handleClick}>
      <Handbag size={24} />
    </CartButtonContainer>
  )
}
