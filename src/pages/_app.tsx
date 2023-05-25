import { AppProps } from 'next/app'

import { Header } from '../components/Header'
import { CartProvider } from '../contexts/CartContext'

import { globalStyles } from '../styles/global'
import { ContentContainer } from '../styles/pages/app'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CartProvider>
      <ContentContainer>
        <Header />
        <Component {...pageProps} />
      </ContentContainer>
    </CartProvider>
  )
}
