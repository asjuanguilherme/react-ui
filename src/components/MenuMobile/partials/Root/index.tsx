import { Dispatch, ReactNode, SetStateAction, useState } from 'react'
import _uniqueId from 'lodash/uniqueId'

export type MenuMobileRootCallbackProps = {
  opened: boolean
  setOpened: Dispatch<SetStateAction<boolean>>
  htmlIDPrefix: string
  locale: 'pt-BR' | 'en'
}

export type MenuMobileRootProps = {
  locale: 'pt-BR' | 'en'
  children?: (props: MenuMobileRootCallbackProps) => ReactNode
}

export const MenuMobileRoot = ({
  children: callback,
  locale,
}: MenuMobileRootProps) => {
  const [opened, setOpened] = useState(false)
  const [htmlIDPrefix] = useState(_uniqueId('ibti-ds-menu-mobile-'))

  if (!callback) return <></>

  return callback({ opened, setOpened, htmlIDPrefix, locale })
}
