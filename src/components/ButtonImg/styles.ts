import { styled } from "@/stitches.config";

export const ButtonImg = styled('div', {
  cursor: 'pointer',
  display: 'flex',
  userSelect: 'none',
  alignItems: 'center',
  justifyContent: 'center',
  '& img': {
    visibility: 'hidden',
    height: '7.5rem'
  },
  '& a img': {
    visibility: 'visible',
    filter: '$shadows$dropShadow',
    height: '5.5rem'
  },
  '&:active': {
    '& img': {
      visibility: 'visible',
      filter: 'none',
    }
  },
  height: '7.5rem',
  '@media(max-width: 385px)': {
    '& img': {
      display: 'none'
    },
    '& a img': {
      display: 'block',
      height: '4.8rem',
    },
    height: '4.8rem',
  }
})

