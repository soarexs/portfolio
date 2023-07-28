import * as S from './styles'
import { Card } from "@/components/Card"
import { Text } from '@/components/Text'
import { Badge } from '@/components/Badge'

export const Projects = () => {

  return (
    <S.Container id="last-projects">
      <div className="alignText">
        <Text>
          ÚLTIMOS
          <br />
          <span>
            PROJETOS
          </span>
        </Text>
      </div>
      <S.CardsContainer>
        <Card>
          <img src="assets/infinitescrollimg.png" alt="" width={'100%'} />
          <S.CardContent>
            <h3 >Infinite Scroll</h3>
            <S.BadgeContainer>
              <Badge name='Next.js' />
              <Badge name='Node.js' />
              <Badge name='typescript' />
              <Badge name='graphql' />
              <Badge name='styled-components' />
              <Badge name='Express.js' />
            </S.BadgeContainer>
            <p>Oferecendo um dos serviços dado pela api da Nasa, onde trás uma foto com contexto astronomico por dia,
              tendo ainda a funcionalidade de scroll infinito.
            </p>
            <S.ProjectLink href="https://github.com/anndross/infinite-scroll-app" target='_blank'>PROJETO</S.ProjectLink>
          </S.CardContent>
        </Card>
        <Card>
          <img src="assets/landingpageimg.png" alt="" width={'100%'} />
          <S.CardContent>
            <h3 >Landing Page</h3>
            <S.BadgeContainer>
              <Badge name='React' />
              <Badge name='styled-components' />
              <Badge name='typescript' />
            </S.BadgeContainer>
            <p>Uma simples landing page com tema referente a serviços de um dev freelancer.
            </p>
            <S.ProjectLink href="https://github.com/anndross/landing-page" target='_blank'>PROJETO</S.ProjectLink>
          </S.CardContent>
        </Card>
        <Card>
          <img src="assets/infinitescrollimg2.png" alt="" width={'100%'} />
          <S.CardContent>
            <h3>Notepad</h3>
            <S.BadgeContainer>
              <Badge name='Next.js' />
              <Badge name='Javascript' />
              <Badge name='typescript' />
              <Badge name='tailwind css' />
              <Badge name='mongodb' />
            </S.BadgeContainer>
            <p>Um Notepad feito para criar seus arquivos e anotar suas tarefas, listas e o que quiser escrever no editor.</p>
            <S.ProjectLink href="https://github.com/anndross/Notepad" target='_blank'>PROJETO</S.ProjectLink>
          </S.CardContent>
        </Card>
      </S.CardsContainer>
    </S.Container>
  )
}