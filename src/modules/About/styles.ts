import { styled, keyframes } from "@/stitches.config";

export const Container = styled('div', {
  minHeight: '$sizes$oneScreen',
  width: '100vw',
  display: 'grid',
  gridTemplateColumns: '70% 30%',
  position: 'relative',
  padding: '0 4vw',
  flexShrink: '0',
  '@media(max-width: 1500px)': {
    gridTemplateColumns: '1fr',
    justifyContent: 'center',
    alignContent: 'center',
    padding: '0',
  }
})

const animation = keyframes({
  '0%, 40%, 100%': {
    transform: 'translateY(0)'
  },
  '20%': {
    transform: 'translateY(-20px)'
  }
})

export const Information = styled('div', {
  height: '$sizes$total',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  gap: '10px',
  '@media(max-width: 1500px)': {
    alignItems: 'center',
  }
})

export const NameContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '6px'
})

export const Name = styled('span', {
  fontSize: 'max(1.1rem, 2vw)',
  fontWeight: 'bold',
  color: '$primary100',
  textShadow: '$shadows$textShadow100'
})

export const AnimatedTitle = styled('span', {
  position: 'relative',
  '-webkit-box-reflect': 'below -20px linear-gradient(transparent, rgba(0,0,0,.2))',
  fontSize: 'max(60px, 5vw)',
  fontWeight: '900',
  fontFamily: "Oswald",
  zIndex: '1',
  '& .breakText': {
    display: 'none'
  },
  userSelect: 'none', /* supported by Chrome and Opera */
  '-webkit-user-select': 'none', /* Safari */
  '-khtml-user-select': 'none', /* Konqueror HTML */
  '-moz-user-select': 'none', /* Firefox */
  '-ms-user-select': 'none', /* Internet Explorer/Edge */
  '& span': {
    position: 'relative',
    display: 'inline-block',
    color: '$colors$primary200',
    textTransform: 'uppercase',
    animation: `${animation} 2.5s infinite`,
    animationDelay: 'calc(.1s * var(--i))',
    textShadow: '$shadows$textShadow200'
  },
  '& span:nth-child(n+9):nth-child(-n+18)': {
    color: '$red',
  },
  '@media(max-width: 675px)': {
    '-webkit-box-reflect': 'none !important',
    '& .breakText': {
      display: 'block'
    },
    textAlign: 'center',
    fontSize: 'max(3rem, 11vw)',
    '& span:nth-child(n+9):nth-child(-n+18)': {
      fontSize: 'max(3.2rem, 13vw)',
    },
  }
})

export const TextAnimation = styled('div', {
  width: '80%',
  maxWidth: '800px',
  height: '200px',
  fontSize: 'max(1rem, 1vw)',
  letterSpacing: '1px',
  lineHeight: '30px',
  textAlign: 'left',
  color: '$primary100',
  textShadow: '$shadows$textShadow100',
  marginTop: '60px',
  '& span:last-of-type': {
    color: '$colors$tertiary300'
  },
  '@media(max-width: 1500px)': {
    textAlign: 'center',
  }
})

export const ActionsContainer = styled('div', {
  height: '$sizes$total',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-around',
})

export const ImgContainer = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  userSelect: 'none',
  '@media (max-width: 1500px)': {
    display: 'none'
  }
})

