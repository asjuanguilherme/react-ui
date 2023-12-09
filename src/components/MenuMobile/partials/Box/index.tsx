import React from 'react'
import { ReactNode } from 'react'

import * as S from './styles'

import { MenuMobileRootCallbackProps } from '../Root'

export type MenuMobileBoxProps = MenuMobileRootCallbackProps & {
  title: string
  children?: ReactNode
}

export const MenuMobileBox = ({
  setOpened,
  opened,
  htmlIDPrefix,
  title,
  children,
}: MenuMobileBoxProps) => {
  return (
    <S.Wrapper
      aria-hidden={!opened}
      id={htmlIDPrefix + 'box'}
      $opened={opened}
      onClick={() => setOpened(false)}
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
