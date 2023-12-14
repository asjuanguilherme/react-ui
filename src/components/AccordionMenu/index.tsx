import React, { MouseEventHandler } from 'react'

import { HTMLStyleAttributes } from 'types'

import { ThemeLayerIndex } from 'lib/theming'

import { Accordion, Menu } from 'components'
import { IconComponent } from 'icons'

export type AccordionMenuItemProps = {
  key?: string
  title: string
  href?: string
  icon?: IconComponent
  isActive?: boolean
  onClick?: MouseEventHandler
}

export type AccordionMenuProps = {
  title: string
  opened?: boolean
  startsOpened?: boolean
  onClick?: MouseEventHandler
  href?: string
  items?: AccordionMenuItemProps[]
  layer?: ThemeLayerIndex
  icon?: IconComponent
  size?: 'small' | 'medium'
} & HTMLStyleAttributes

export const AccordionMenu = ({
  items,
  size = 'small',
  ...props
}: AccordionMenuProps) => {
  return (
    <Accordion size="small" {...props}>
      <Menu.List>
        {items?.map(item => (
          <Menu.Item
            key={item.key}
            {...item}
            href={item.href || ''}
            layer={props.layer}
            liTag
            size={size}
          />
        ))}
      </Menu.List>
    </Accordion>
  )
}
