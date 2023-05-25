import { styled } from '..'

export const CartButtonContainer = styled('button', {
  background: '$gray800',
  border: 'none',
  borderRadius: 6,
  color: '$gray300',
  cursor: 'pointer',
  width: '3rem',
  height: '3rem',

  '&:hover': {
    backgroundColor: '$gray600',
    transition: 'background-color 200ms',
  },
})

export const Badge = styled('span', {
  display: 'inline-flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'absolute',
  marginTop: '-1rem',
  width: '1.5rem',
  height: '1.5rem',
  borderRadius: '50%',
  fontSize: '$sm',
  textAlign: 'center',
  background: '$green500',
  fontWeight: 'bold',
})
