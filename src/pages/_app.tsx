import { AppProps } from 'next/app'

import Container from './_container'
import { CartProvider } from '../contexts/CartContext'

import { globalStyles } from '../styles/global'

globalStyles()

export default function App(appProps: AppProps) {
  return (
    <CartProvider>
      <Container {...appProps} />
    </CartProvider>
  )
}
