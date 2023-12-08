import { MouseEventHandler } from 'react'
import { ThemeLayerIndex } from 'lib/theming'
import { Menu, Accordion } from 'components'
import { IconComponent } from 'icons'
import { HTMLStyleAttributes } from 'types'

export type AccordionMenuItemProps = {
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
  anchorComponent?: any
  size?: 'small' | 'medium'
} & HTMLStyleAttributes

export const AccordionMenu = ({
  href,
  items,
  anchorComponent,
  size = 'small',
  ...props
}: AccordionMenuProps) => {
  return (
    <Accordion size="small" {...props}>
      <Menu.List>
        {items?.map((item, index) => (
          <Menu.Item
            key={index}
            {...item}
            liTag
            href={item.href || ''}
            size={size}
            layer={props.layer}
            anchorComponent={anchorComponent}
          />
        ))}
      </Menu.List>
    </Accordion>
  )
}
