import { styled } from "@/stitches.config";

export const Container = styled('div', {
  minHeight: '$sizes$oneScreen',
  width: '100vw',
  display: 'grid',
  gridTemplateColumns: '10% 90%',
  justifyItems: 'left',
  alignItems: 'center',
  padding: '0 4vw',
  position: 'relative',
  flexShrink: '0',
  '@media(max-width: 1500px)': {
    gridTemplateColumns: '1fr',
    justifyItems: 'center',
    alignItems: 'start',
    padding: '0',
    gap: '5rem',
    '& span span': {
      color: '$red',
      marginLeft: '1rem'
    },
    '& .alignText': {
      width: '100%',
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    '& span:first-of-type br': {
      display: 'none'
    }
  },
  '@media(max-width: 560px)': {
    '& span:first-of-type br': {
      display: 'block'
    },
    '& span': {
      textAlign: 'center'
    },
    '& span span': {
      marginLeft: '0'
    },
  },
})

export const CardsContainer = styled('div', {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr 1fr',
  padding: '0 10rem',
  gap: '5rem',
  '@media(max-width: 1500px)': {
    padding: '2rem',
  },
  '@media(max-width: 1000px)': {
    padding: '0',

    gridTemplateColumns: '1fr',
    width: 'max(270px, 50vw)'
  },
})

export const TextContainer = styled('div', {
  position: 'absolute',
  left: '80px',
  top: '50%',
  transform: 'translateY(-50%)'
})

export const CardContent = styled('div', {
  padding: '14px',
  display: 'grid',
  gap: '14px'
})


export const BadgeContainer = styled('div', {
  display: 'flex',
  gap: '10px',
  flexWrap: 'wrap',
})

export const ProjectLink = styled('a', {
  textDecoration: 'none',
  color: '$blue',
  width: 'fit-content',
  '&:hover': {
    textDecoration: 'underline'
  }
})