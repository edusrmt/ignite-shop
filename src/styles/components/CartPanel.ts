import { styled } from '..'

export const CartPanelContainer = styled('aside', {
  position: 'fixed',
  top: 0,
  right: 0,
  width: 480,
  height: '100vh',
  padding: '3rem',
  zIndex: 1,
  background: '$gray800',
  boxShadow: '-4px 0px 30px 0px #000000CC',

  display: 'flex',
  flexDirection: 'column',

  h3: {
    fontSize: '$lg',
    marginBottom: '2rem',
  },
})

export const CloseButton = styled('button', {
  margin: '-1.5rem 0 1.5rem',
  alignSelf: 'flex-end',
  marginTop: 'auto',
  border: 'none',
  background: 'transparent',
  color: '$gray400',
  cursor: 'pointer',
})

export const ItemsContainer = styled('div', {
  flex: 1,
  overflowY: 'auto',
})

export const ProductItem = styled('div', {
  display: 'flex',
  gap: '1.25rem',

  h4: {
    fontWeight: 'normal',
    fontSize: '1.125rem',
  },

  '& + &': {
    marginTop: '1.5rem',
  },
})

export const ImageContainer = styled('div', {
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  width: 90,
  height: 90,
  borderRadius: 8,
  padding: '0.25rem',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  img: {
    objectFit: 'cover',
  },
})

export const InfoContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  button: {
    alignSelf: 'flex-start',
    marginTop: 'auto',
    border: 'none',
    background: 'transparent',
    cursor: 'pointer',

    color: '$green500',
    fontWeight: 'bold',
    fontSize: '1rem',
  },
})

export const SummaryContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  marginTop: '0.5rem',
  marginBottom: '3.5rem',

  'div:first-child > span:last-child': {
    fontSize: '$md',
  },

  'div:last-child': {
    fontWeight: 'bold',

    'span:first-child': {
      fontSize: '$md',
    },

    'span:last-child': {
      fontSize: '$xl',
      lineHeight: '140%',
    },
  },
})

export const SummaryRow = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',

  '& + &': {
    marginTop: '0.5rem',
  },
})

export const CheckoutButton = styled('button', {
  marginTop: 'auto',
  backgroundColor: '$green500',
  border: 0,
  color: '$white',
  borderRadius: 8,
  padding: '1.25rem',
  cursor: 'pointer',
  fontWeight: 'bold',
  fontSize: '$md',

  '&:not(:disabled):hover': {
    backgroundColor: '$green300',
    transition: 'background-color 200ms',
  },

  '&:disabled': {
    opacity: 0.6,
    cursor: 'not-allowed',
  },
})
