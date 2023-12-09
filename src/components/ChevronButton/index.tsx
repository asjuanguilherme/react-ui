import React, { MouseEventHandler, MutableRefObject } from 'react'

import * as S from './styles'

import { Chevron, ChevronDirection } from 'components'
import { IconComponent } from 'icons'
import { FieldSizesToken, ThemeLayerIndex } from 'lib/theming'

export type ChevronButtonProps = {
  [key: string]: unknown
} & {
  title?: string
  icon?: IconComponent
  setRef?: MutableRefObject<HTMLElement | null>
  disabled?: boolean
  loading?: boolean
  layer?: ThemeLayerIndex
  active?: boolean
  onClick?: MouseEventHandler
  chevronActiveDirection?: ChevronDirection
  chevronDefaultDirection?: ChevronDirection
  size?: keyof FieldSizesToken
  fillWidth?: boolean
  showChevron?: boolean
  borderLess?: boolean
  transparent?: boolean
}

export const ChevronButton = ({
  title,
  icon: Icon,
  chevronActiveDirection,
  chevronDefaultDirection,
  active = false,
  showChevron = true,
  disabled = false,
  ...props
}: ChevronButtonProps) => {
  return (
    <S.Wrapper
      label={title}
      prefix={Icon && <Icon />}
      suffix={
        showChevron && (
          <Chevron
            active={active}
            activeDirection={chevronActiveDirection}
            defaultDirection={chevronDefaultDirection}
          />
        )
      }
      shape="rounded"
      variant="layerBased"
      active={active}
      disabled={disabled}
      {...props}
    />
  )
}
