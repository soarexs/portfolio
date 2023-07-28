import { styled } from "@/stitches.config";

export const IconsContainer = styled('div', {
  position: 'fixed',
  left: '4vw',
  top: '90%',
  zIndex: '10000',
  display: 'flex',
  gap: "16px",
  '& svg': {
    color: "$primary100",
    fontSize: '36px'
  },
  '@media(max-width: 1500px)': {
    position: 'inherit',
    '& svg': {
      fontSize: '24px'
    },
  },
})