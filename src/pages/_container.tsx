import { AppProps } from 'next/app'
import Image from 'next/image'
import Link from 'next/link'

import logoImg from '../assets/logo.svg'

import { ContentContainer, Header } from '../styles/pages/app'
import { CartButton } from '../components/CartButton'
import { CartContext } from '../contexts/CartContext'
import { CartPanel } from '../components/CartPanel'
import { useContext } from 'react'

export default function Container({ Component, pageProps }: AppProps) {
  const { isCartOpen } = useContext(CartContext)

  return (
    <>
      {isCartOpen && <CartPanel />}
      <ContentContainer>
        <Header>
          <Link href="/">
            <Image src={logoImg} alt="Ignite Shop logo" />
          </Link>
          <CartButton />
        </Header>

        <Component {...pageProps} />
      </ContentContainer>
    </>
  )
}
