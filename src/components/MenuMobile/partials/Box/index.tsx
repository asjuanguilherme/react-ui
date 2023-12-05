import * as S from './styles'
import { MenuMobileRootCallbackProps } from '../Root'
import { HeartIcon } from 'icons'
import { ReactNode } from 'react'

export type MenuMobileBoxProps = MenuMobileRootCallbackProps & {
  title: string
  children?: ReactNode
}

export const MenuMobileBox = ({
  setOpened,
  opened,
  htmlIDPrefix,
  title,
  locale,
  children,
}: MenuMobileBoxProps) => {
  return (
    <S.Wrapper
      aria-hidden={!opened}
      id={htmlIDPrefix + 'box'}
      $opened={opened}
      onClick={e => setOpened(false)}
    >
      <S.Box onClick={e => e.stopPropagation()} roundedCorners="large">
        <S.Header>
          <S.Title id={htmlIDPrefix + 'heading'} role="heading">
            {title}
          </S.Title>
        </S.Header>
        <S.Body aria-labelledby={htmlIDPrefix + 'heading'}>{children}</S.Body>
        <S.Footer>
          <S.PoweredByText>
            Desenvolvido por <a>juanguilher.me</a>
          </S.PoweredByText>
        </S.Footer>
      </S.Box>
    </S.Wrapper>
  )
}
