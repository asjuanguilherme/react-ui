import * as S from './styles'
import { MenuMobileRootCallbackProps } from '../Root'

export type MenuMobileToggleButtonProps = MenuMobileRootCallbackProps & {
  navbarHeight: number
}

const ariaLabel = {
  'pt-BR': {
    opened: 'Fechar menu',
    closed: 'Abrir menu',
  },
  en: {
    opened: 'Close menu',
    closed: 'Open menu',
  },
}

export const MenuMobileToggleButton = ({
  opened,
  setOpened,
  locale,
  htmlIDPrefix,
  navbarHeight,
}: MenuMobileToggleButtonProps) => {
  return (
    <S.Wrapper
      $opened={opened}
      onClick={() => setOpened(state => !state)}
      aria-controls={htmlIDPrefix + 'box'}
      aria-expanded={opened}
      aria-label={ariaLabel[locale][opened ? 'opened' : 'closed']}
      id={htmlIDPrefix + 'toggle'}
      $navbarHeight={navbarHeight}
    >
      <S.TopBar />
      <S.MiddleBar />
      <S.BottomBar />
    </S.Wrapper>
  )
}
