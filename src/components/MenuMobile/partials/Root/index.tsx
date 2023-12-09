import React from 'react'
import { Dispatch, ReactNode, SetStateAction, useState } from 'react'

import _uniqueId from 'lodash/uniqueId'

export type MenuMobileRootCallbackProps = {
  opened: boolean
  setOpened: Dispatch<SetStateAction<boolean>>
  htmlIDPrefix: string
}

export type MenuMobileRootProps = {
  children?: (props: MenuMobileRootCallbackProps) => ReactNode
}

export const MenuMobileRoot = ({ children: callback }: MenuMobileRootProps) => {
  const [opened, setOpened] = useState(false)
  const [htmlIDPrefix] = useState(_uniqueId('ibti-ds-menu-mobile-'))

  if (!callback) return <></>

  return callback({ opened, setOpened, htmlIDPrefix })
}
