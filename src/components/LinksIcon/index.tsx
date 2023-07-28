import * as S from './styles'
import { BsGithub, BsLinkedin } from "react-icons/bs"

export const LinksIcon = () => {
  return (
    <S.IconsContainer>
      <a href="https://github.com/anndross" target='_blank'>
        <BsGithub />
      </a>
      <a href="https://www.linkedin.com/in/andy-soares/" target='_blank'>
        <BsLinkedin />
      </a>
    </S.IconsContainer>
  )
}