import React from 'react'

import { MenuMobileRootCallbackProps } from '../Root'

import * as S from './styles'

export type MenuMobileToggleButtonProps = MenuMobileRootCallbackProps & {
  navbarHeight: number
}

export const MenuMobileToggleButton = ({
  opened,
  setOpened,
  htmlIDPrefix,
  navbarHeight,
}: MenuMobileToggleButtonProps) => {
  return (
    <S.Wrapper
      $navbarHeight={navbarHeight}
      $opened={opened}
      aria-controls={htmlIDPrefix + 'box'}
      aria-expanded={opened}
      id={htmlIDPrefix + 'toggle'}
      onClick={() => setOpened(state => !state)}
    >
      <S.TopBar />
      <S.MiddleBar />
      <S.BottomBar />
    </S.Wrapper>
  )
}
