import { GetServerSideProps } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'
import Stripe from 'stripe'

import {
  ImageContainer,
  ProductsContainer,
  SuccessContainer,
} from '../styles/pages/success'
import { stripe } from '../lib/stripe'

interface SuccessProps {
  customerName: string
  productsCount: number
  productsImages: string[]
}

export default function Success({
  customerName,
  productsCount,
  productsImages,
}: SuccessProps) {
  return (
    <>
      <Head>
        <title>Purchase success | Ignite Shop</title>
        <meta name="robots" content="noindex" />
      </Head>

      <SuccessContainer>
        <ProductsContainer>
          {productsImages.map((productImg, index) => (
            <ImageContainer key={index}>
              <Image src={productImg} width={120} height={110} alt="" />
            </ImageContainer>
          ))}
        </ProductsContainer>

        <h1>Purchase made successfully!</h1>

        <p>
          Yay <strong>{customerName}</strong>, your purchase of {productsCount}{' '}
          shirts will be delivered to your home.
        </p>

        <Link href="/">Return to Home</Link>
      </SuccessContainer>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  if (!query.session_id) {
    return { redirect: { destination: '/', permanent: false } }
  }

  const sessionId = String(query.session_id)

  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ['line_items', 'line_items.data.price.product'],
  })

  const customerName = session.customer_details?.name

  const productsImages = session.line_items?.data.map((lineItem) => {
    const product = lineItem.price?.product as Stripe.Product
    return product.images[0]
  })

  return {
    props: {
      customerName,
      productsCount: productsImages?.length,
      productsImages: productsImages,
    },
  }
}
