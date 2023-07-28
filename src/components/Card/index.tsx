import { styled } from "@/stitches.config";

export const Card = styled('div', {
  height: '100%',
  width: '100%',
  background: '$primary100',
  borderRadius: '6px',
  boxShadow: '$shadows$boxShadow',
  display: 'flex',
  justifyContent: 'start',
  flexDirection: 'column',
  '& img': {
    borderRadius: '6px 6px 0 0',
    borderBottom: '1px solid $primary200',
  },
})