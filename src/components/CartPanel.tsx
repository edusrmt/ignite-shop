import { useContext } from 'react'
import {
  CartPanelContainer,
  CheckoutButton,
  CloseButton,
  ImageContainer,
  InfoContainer,
  ItemsContainer,
  ProductItem,
  SummaryContainer,
  SummaryRow,
} from '../styles/components/CartPanel'

import { X } from '@phosphor-icons/react'
import { CartContext } from '../contexts/CartContext'

export function CartPanel() {
  const { setIsCartOpen } = useContext(CartContext)

  const handleClose = () => setIsCartOpen(false)

  return (
    <CartPanelContainer>
      <CloseButton onClick={handleClose}>
        <X size={24} />
      </CloseButton>

      <h3>Shopping Bag</h3>

      <ItemsContainer>
        <ProductItem>
          <ImageContainer></ImageContainer>
          <InfoContainer>
            <h4>Camiseta Beyond the Limits</h4>
            <strong>R$ 79,90</strong>
            <button>Remove</button>
          </InfoContainer>
        </ProductItem>
        <ProductItem>
          <ImageContainer></ImageContainer>
          <InfoContainer>
            <h4>Camiseta Beyond the Limits</h4>
            <strong>R$ 79,90</strong>
            <button>Remove</button>
          </InfoContainer>
        </ProductItem>
        <ProductItem>
          <ImageContainer></ImageContainer>
          <InfoContainer>
            <h4>Camiseta Beyond the Limits</h4>
            <strong>R$ 79,90</strong>
            <button>Remove</button>
          </InfoContainer>
        </ProductItem>
        <ProductItem>
          <ImageContainer></ImageContainer>
          <InfoContainer>
            <h4>Camiseta Beyond the Limits</h4>
            <strong>R$ 79,90</strong>
            <button>Remove</button>
          </InfoContainer>
        </ProductItem>
      </ItemsContainer>

      <SummaryContainer>
        <SummaryRow>
          <span>Quantity</span>
          <span>3 items</span>
        </SummaryRow>
        <SummaryRow>
          <span>Total value</span>
          <span>R$ 270,00</span>
        </SummaryRow>
      </SummaryContainer>
      <CheckoutButton>Checkout</CheckoutButton>
    </CartPanelContainer>
  )
}
