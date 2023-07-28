import * as S from './styles'

interface Props {
  type: 'skills' | 'projects'
}

export const ButtonImg = ({ type }: Props) => {
  const typeButton = {
    skills: {
      url: 'assets/buttonskills.png',
      id: '#my-skills'
    },
    projects: {
      url: 'assets/lastprojectsbutton.png',
      id: '#last-projects'
    },
  }

  return (
    <S.ButtonImg>
      <img style={{ rotate: '180deg' }} src="assets/clickexpression.png" height="100%" alt="" />
      <a href={typeButton[type].id}>
        <img
          src={typeButton[type].url}
          alt=""
        />
      </a>
      <img src="assets/clickexpression.png" height="100%" alt="" />
    </S.ButtonImg>
  )
}