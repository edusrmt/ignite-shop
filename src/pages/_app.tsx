import { AppProps } from 'next/app'
import Image from 'next/image'
import Link from 'next/link'

import { globalStyles } from '../styles/global'

import logoImg from '../assets/logo.svg'
import { Container, Header } from '../styles/pages/app'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <Link href="/">
          <Image src={logoImg} alt="Ignite Shop logo" />
        </Link>
      </Header>

      <Component {...pageProps} />
    </Container>
  )
}