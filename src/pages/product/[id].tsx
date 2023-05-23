import { useContext, useState } from 'react'
import { GetStaticPaths, GetStaticProps } from 'next'
import Image from 'next/image'
import Head from 'next/head'
import Stripe from 'stripe'

import { stripe } from '@/src/lib/stripe'

import {
  ImageContainer,
  ProductContainer,
  ProductDetails,
} from '@/src/styles/pages/product'
import { CartContext, Product } from '@/src/contexts/CartContext'
import { formatPrice } from '@/src/utils/formatter'

interface ProductProps {
  product: Product
}

export default function Product({ product }: ProductProps) {
  const { addItemToCart } = useContext(CartContext)

  return (
    <>
      <Head>
        <title>{product.name} | Ignite Shop</title>
      </Head>

      <ProductContainer>
        <ImageContainer>
          <Image src={product.imageUrl} width={520} height={480} alt="" />
        </ImageContainer>
        <ProductDetails>
          <h1>{product.name}</h1>
          <span>{formatPrice(product.price)}</span>

          <p>{product.description}</p>

          <button onClick={() => addItemToCart(product)}>Add to Bag</button>
        </ProductDetails>
      </ProductContainer>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [{ params: { id: 'prod_NufZJRBE1qsasr' } }],
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps<any, { id: string }> = async ({
  params,
}) => {
  const productId = params.id
  const product = await stripe.products.retrieve(productId, {
    expand: ['default_price'],
  })

  const price = product.default_price as Stripe.Price

  return {
    props: {
      product: {
        id: product.id,
        name: product.name,
        imageUrl: product.images[0],
        price: price.unit_amount,
        description: product.description,
        defaultPriceId: price.id,
      },
    },
    revalidate: 3600, // 1 hour
  }
}
