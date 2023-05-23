import { GetStaticProps } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Head from 'next/head'
import Stripe from 'stripe'
import { useKeenSlider } from 'keen-slider/react'

import { stripe } from '../lib/stripe'
import { CartContext, Product } from '../contexts/CartContext'

import {
  HomeContainer,
  ProductContainer,
  ProductInfo,
} from '../styles/pages/home'

import 'keen-slider/keen-slider.min.css'
import { CartButton } from '../components/CartButton'
import { useContext } from 'react'
import { formatPrice } from '../utils/formatter'

interface HomeProps {
  products: Product[]
}

export default function Home({ products }: HomeProps) {
  const { addItemToCart } = useContext(CartContext)

  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    },
  })

  return (
    <>
      <Head>
        <title>Home | Ignite Shop</title>
      </Head>

      <HomeContainer ref={sliderRef} className="keen-slider">
        {products.map((product) => {
          return (
            <ProductContainer className="keen-slider__slide">
              <Link href={`/product/${product.id}`} key={product.id}>
                <Image src={product.imageUrl} width={520} height={480} alt="" />
              </Link>

              <footer>
                <ProductInfo>
                  <strong>{product.name}</strong>
                  <span>{formatPrice(product.price)}</span>
                </ProductInfo>
                <CartButton handleClick={() => addItemToCart(product)} />
              </footer>
            </ProductContainer>
          )
        })}
      </HomeContainer>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price'],
  })

  const products = response.data.map((product) => {
    const price = product.default_price as Stripe.Price

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: price.unit_amount,
    }
  })

  return {
    props: { products },
    revalidate: 7200, // 2 hours
  }
}
