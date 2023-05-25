import { useContext } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { CartContext } from '../contexts/CartContext'
import { CartButton } from './CartButton'

import { HeaderContainer } from '../styles/components/Header'

import logoImg from '../assets/logo.svg'
import { CartPanel } from './CartPanel'

export function Header() {
  const { isCartOpen, setIsCartOpen } = useContext(CartContext)

  const toggleIsCartOpen = () => {
    console.log(isCartOpen)
    setIsCartOpen(!isCartOpen)
  }

  return (
    <>
      {isCartOpen && <CartPanel />}
      <HeaderContainer>
        <Link href="/">
          <Image src={logoImg} alt="Ignite Shop logo" />
        </Link>
        <CartButton handleClick={toggleIsCartOpen} badge />
      </HeaderContainer>
    </>
  )
}
