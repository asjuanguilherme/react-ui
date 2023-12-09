import React from 'react'

import * as S from './styles'

import { MenuMobileRootCallbackProps } from '../Root'

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
      $opened={opened}
      onClick={() => setOpened(state => !state)}
      aria-controls={htmlIDPrefix + 'box'}
      aria-expanded={opened}
      id={htmlIDPrefix + 'toggle'}
      $navbarHeight={navbarHeight}
    >
      <S.TopBar />
      <S.MiddleBar />
      <S.BottomBar />
    </S.Wrapper>
  )
}
