import { ReactNode, useEffect, useState } from "react"
import * as S from './styles'
import { ButtonImg } from "@/components/ButtonImg"
import { LinksIcon } from "@/components/LinksIcon"

export const About = () => {
  const [text, setText] = useState<ReactNode[]>([])
  const textToShow = `Sou um desenvolvedor de softwares
  atuando no mercado de trabalho há 2 anos. Sendo minha atuação como dev frontend e backend.
  `

  const letters = textToShow.split('')

  useEffect(() => {
    const timeToShowLettersInMs = 50

    const textAnimation = setTimeout(() => {
      setText((t) => [...t, <span>{letters[t.length]}</span>])
    }, timeToShowLettersInMs)

    if (text.length === letters.length)
      clearTimeout(textAnimation)
  }, [text])

  return (
    <S.Container>
      <S.Information>
        <S.NameContainer>
          <LinksIcon />
          <S.Name>OI, EU SOU O ANDREY</S.Name>
        </S.NameContainer>
        <S.AnimatedTitle>
          <span style={{ "--i": 1 } as React.CSSProperties}>s</span>
          <span style={{ "--i": 2 } as React.CSSProperties}>o</span>
          <span style={{ "--i": 3 } as React.CSSProperties}>f</span>
          <span style={{ "--i": 4 } as React.CSSProperties}>t</span>
          <span style={{ "--i": 5 } as React.CSSProperties}>w</span>
          <span style={{ "--i": 6 } as React.CSSProperties}>a</span>
          <span style={{ "--i": 7 } as React.CSSProperties}>r</span>
          <span style={{ "--i": 8 } as React.CSSProperties}>e</span>
          <br className="breakText" />
          <span style={{ "--i": 9 } as React.CSSProperties}>d</span>
          <span style={{ "--i": 10 } as React.CSSProperties}>e</span>
          <span style={{ "--i": 11 } as React.CSSProperties}>v</span>
          <span style={{ "--i": 12 } as React.CSSProperties}>e</span>
          <span style={{ "--i": 13 } as React.CSSProperties}>l</span>
          <span style={{ "--i": 14 } as React.CSSProperties}>o</span>
          <span style={{ "--i": 15 } as React.CSSProperties}>p</span>
          <span style={{ "--i": 16 } as React.CSSProperties}>e</span>
          <span style={{ "--i": 17 } as React.CSSProperties}>r</span>
        </S.AnimatedTitle>
        <S.TextAnimation>
          {text}
        </S.TextAnimation>
      </S.Information>
      <S.ActionsContainer>
        <S.ImgContainer css={{ top: '28%' }}>
          <img src="assets/arrowmessage.png" height="200px" alt="" />
        </S.ImgContainer>

        <ButtonImg type="skills" />
      </S.ActionsContainer>
    </S.Container>
  )
}