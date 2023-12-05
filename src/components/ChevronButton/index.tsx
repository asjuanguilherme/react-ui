import { MouseEventHandler, MutableRefObject } from 'react'
import { Chevron, ChevronDirection } from 'components'
import * as S from './styles'
import { LayerIndex } from 'types'
import { fieldSizes } from 'styles/tokens'
import { IconComponent } from 'icons'

export type ChevronButtonProps = {
  [key: string]: any
} & {
  title?: string
  icon?: IconComponent
  setRef?: MutableRefObject<HTMLButtonElement | HTMLAnchorElement | null>
  disabled?: boolean
  loading?: boolean
  layer?: LayerIndex
  active?: boolean
  onClick?: MouseEventHandler
  chevronActiveDirection?: ChevronDirection
  chevronDefaultDirection?: ChevronDirection
  size?: keyof typeof fieldSizes
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
      {...props}
    />
  )
}
