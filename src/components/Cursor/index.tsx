import { useEffect, useRef } from "react"
import * as S from './styles'

export const Cursor = () => {
  const cursorRef = useRef(null) as any

  useEffect(() => {
    document.addEventListener('mousemove', (event) => {
      const { clientX, clientY } = event
      const mouseX = clientX - cursorRef.current?.clientWidth / 2
      const mouseY = clientY - cursorRef.current?.clientHeight / 2
      cursorRef.current.style.transform = `translate3D(${mouseX}px, ${mouseY}px, 0)`
    })
  }, [])

  return <S.Cursor ref={cursorRef} className="cursor" />
}