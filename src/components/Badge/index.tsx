import * as S from './styles'

type Props = { name: string }

export const Badge = ({ name }: Props) => {
  return (
    <S.Badge>
      {name}
    </S.Badge>
  )
}