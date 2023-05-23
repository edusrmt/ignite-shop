import { useContext, useState } from 'react'
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
import Image from 'next/image'
import { formatPrice } from '../utils/formatter'
import axios from 'axios'

export function CartPanel() {
  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] =
    useState(false)
  const { cartItems, cartCount, cartTotal, setIsCartOpen, removeItemFromCart } =
    useContext(CartContext)

  const handleClose = () => setIsCartOpen(false)

  async function handleCheckout() {
    try {
      setIsCreatingCheckoutSession(true)

      const cartPrices = cartItems.map((product) => product.defaultPriceId)

      const response = await axios.post('/api/checkout', {
        prices: cartPrices,
      })

      const { checkoutUrl } = response.data

      window.location.href = checkoutUrl
    } catch (err) {
      setIsCreatingCheckoutSession(false)
      alert('Failed to redirect to checkout!')
    }
  }

  return (
    <CartPanelContainer>
      <CloseButton onClick={handleClose}>
        <X size={24} />
      </CloseButton>

      <h3>Shopping Bag</h3>

      <ItemsContainer>
        {cartItems.map((product) => (
          <ProductItem key={product.id}>
            <ImageContainer>
              <Image src={product.imageUrl} width={104} height={96} alt="" />
            </ImageContainer>
            <InfoContainer>
              <h4>{product.name}</h4>
              <strong>{formatPrice(product.price)}</strong>
              <button onClick={() => removeItemFromCart(product)}>
                Remove
              </button>
            </InfoContainer>
          </ProductItem>
        ))}
      </ItemsContainer>

      <SummaryContainer>
        <SummaryRow>
          <span>Quantity</span>
          <span>{cartCount} items</span>
        </SummaryRow>
        <SummaryRow>
          <span>Total value</span>
          <span>{formatPrice(cartTotal)}</span>
        </SummaryRow>
      </SummaryContainer>
      <CheckoutButton
        disabled={isCreatingCheckoutSession}
        onClick={handleCheckout}
      >
        Checkout
      </CheckoutButton>
    </CartPanelContainer>
  )
}
