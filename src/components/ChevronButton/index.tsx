import React, { MouseEventHandler, MutableRefObject } from 'react'

import { ButtonHeightToken, ThemeLayerIndex } from '@/lib/theming'

import { Chevron, ChevronDirection } from '@/components'
import { IconComponent } from '@/icons'

import * as S from './styles'

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
  size?: ButtonHeightToken
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
      disabled={disabled}
      label={title}
      prefix={Icon && <Icon />}
      shape="rounded"
      suffix={
        showChevron && (
          <Chevron
            active={active}
            activeDirection={chevronActiveDirection}
            defaultDirection={chevronDefaultDirection}
          />
        )
      }
      variant="layerBased"
      {...props}
    />
  )
}
