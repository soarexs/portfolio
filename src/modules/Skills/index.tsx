import * as S from './styles'
import { Text } from '@/components/Text'
import {
  SiNextdotjs,
  SiTailwindcss,
  SiReact,
  SiTypescript,
  SiNodedotjs,
  SiNestjs,
  SiGraphql,
  SiStyledcomponents,
  SiTestinglibrary,
  SiJest,
  SiHtml5,
  SiCss3,
  SiSass
} from 'react-icons/si'
import { DiJavascript1 } from 'react-icons/di'
import { RxStitchesLogo } from 'react-icons/rx'
import { ButtonImg } from '@/components/ButtonImg'



export const Skills = () => {

  return (
    <S.Container id="my-skills">
      <Text>
        MINHAS
        <br />
        <span>
          HABILIDADES
        </span>
      </Text>
      <S.Skills>
        <S.IconsContainer>
          <RxStitchesLogo color="#343434" />
          <SiTailwindcss color="#5ed3f3" />
          <SiSass color="#c76494" />
          <SiReact color="#5ed3f3" />
          <SiTypescript color="#67c2ff" />
          <SiNextdotjs color="#353535" />
          <SiNodedotjs color="#80de21" />
          <SiNestjs color="#d5214a" />
          <DiJavascript1 color="#ffe600" />
          <SiGraphql color="#d932a2" />
          <SiStyledcomponents color="#ffffff" />
          <SiTestinglibrary color="#c32121" />
          <SiJest color="#b2394b" />
          <SiHtml5 color="#d84923" />
          <SiCss3 color="#67c2ff" />
        </S.IconsContainer>

        <ButtonImg type="projects" />
      </S.Skills>
    </S.Container>
  )
}