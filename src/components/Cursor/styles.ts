import { styled } from "@/stitches.config";

export const Cursor = styled('div', {
  zIndex: '1000',
  borderRadius: '50%',
  width: '200px',
  height: '200px',
  background: 'radial-gradient(circle, rgba(45,108,223,0.4514180672268907) 4%, rgba(94,130,196,0.44861694677871145) 33%, rgba(255,255,255,1) 100%)',
  filter: 'blur(80px)',
  backgroundSize: '2px 2px',
  pointerEvents: 'none',
  overflow: 'hidden',
  transform: 'translate3d(0, 0, 0)',
  position: 'fixed',
  '@media(max-width: 1500px)': {
    display: 'none'
  }
})