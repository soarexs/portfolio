import { styled } from "@/stitches.config";

export const Container = styled('div', {
  minHeight: '$sizes$oneScreen',
  width: '100vw',
  display: 'grid',
  gridTemplateColumns: '29% 71%',
  justifyItems: 'left',
  alignItems: 'center',
  flexShrink: '0',
  padding: '0 4vw',
  '@media(max-width: 1500px)': {
    gridTemplateColumns: '1fr',
    justifyItems: 'center',
    padding: '0',
    paddingBottom: '3rem',
    alignItems: 'center',
    gap: '5rem',
    '& span span': {
      color: '$red',
      marginLeft: '1rem'
    },
    '& span:first-of-type br': {
      display: 'none'
    }
  },
  '@media(max-width: 560px)': {
    '& span:first-of-type br': {
      display: 'block',
    },
    '& span': {

      textAlign: 'center'
    },
    '& span span': {
      marginLeft: '0',
    },
  }
})

export const Skills = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'end',
  gap: '3rem',
  '@media(max-width: 1500px)': {
    alignItems: 'center',
    gap: '5rem',

  }
})

export const IconsContainer = styled('div', {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr',
  width: '100%',
  gap: '8vw',
  justifyItems: 'center',
  alignItems: 'center',
  '& svg': {
    filter: '$shadows$dropShadow',
    fontSize: 'max(4rem, 4vw)'
  },
  '@media(max-width: 1000px)': {
    gridTemplateColumns: '1fr 1fr 1fr 1fr',
  },
  '@media(max-width: 800px)': {
    gridTemplateColumns: '1fr 1fr 1fr',
  },
  '@media(max-width: 560px)': {
    gridTemplateColumns: '1fr 1fr',
  }
})