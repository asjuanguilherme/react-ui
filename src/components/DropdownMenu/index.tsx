import React from 'react'

import { HTMLStyleAttributes } from '~/types'

import { ThemeLayerIndex } from '~/lib/theming'

import { ChevronButton, Menu, Popover } from '~/components'
import { MenuItemProps } from '~/components/Menu/partials'
import { IconComponent } from '~/icons'

export type DropdownMenuItem = MenuItemProps & { key: string }

export type DropdownMenuProps = {
  title?: string
  layer?: ThemeLayerIndex
  fillWidth?: boolean
  disabled?: boolean
  loading?: boolean
  maxHeight?: number
  closeOnSelect?: boolean
  icon?: IconComponent
  size?: 'small' | 'medium' | 'large'
  triggerOn?: 'hover' | 'click'
  items?: DropdownMenuItem[]
  borderLess?: boolean
  transparent?: boolean
} & HTMLStyleAttributes

export const DropdownMenu = ({
  title,
  layer = 1,
  icon,
  fillWidth,
  closeOnSelect = true,
  disabled = false,
  loading = false,
  maxHeight,
  size,
  triggerOn = 'click',
  items,
  borderLess,
  transparent,
}: DropdownMenuProps) => {
  return (
    <Popover.Root triggerOn={triggerOn}>
      {({ isActive, setIsActive, triggerRef, popoverBoxProps }) => (
        <>
          <ChevronButton
            active={isActive}
            borderLess={borderLess}
            disabled={loading || disabled}
            fillWidth={fillWidth}
            icon={icon}
            layer={layer}
            loading={loading}
            setRef={triggerRef}
            showChevron={!loading}
            size={size}
            title={title}
            transparent={transparent}
          />
          <Popover.Box layer={layer} {...popoverBoxProps}>
            <Menu.List maxHeight={maxHeight}>
              {items?.map(({ key, ...item }) => (
                <Menu.Item
                  key={key}
                  layer={layer}
                  {...item}
                  onClick={e => {
                    item.onClick && item.onClick(e)

                    if (closeOnSelect) setIsActive(false)
                  }}
                />
              ))}
            </Menu.List>
          </Popover.Box>
        </>
      )}
    </Popover.Root>
  )
}
