import React from 'react'

import { ChevronButton, Menu, Popover } from 'components'
import { MenuItemProps } from 'components/Menu/partials'
import { IconComponent } from 'icons'
import { ThemeLayerIndex } from 'lib/theming'
import { HTMLStyleAttributes } from 'types'

export type DropdownMenuItem = MenuItemProps

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
      {({ isActive, setIsActive, triggerRef }) => (
        <>
          <ChevronButton
            active={isActive}
            layer={layer}
            disabled={loading || disabled}
            icon={icon}
            loading={loading}
            title={title}
            size={size}
            setRef={triggerRef}
            showChevron={!loading}
            fillWidth={fillWidth}
            borderLess={borderLess}
            transparent={transparent}
          />
          <Popover.Box visible={isActive} layer={layer}>
            <Menu.List maxHeight={maxHeight}>
              {items?.map((item, index) => (
                <Menu.Item
                  key={index}
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
