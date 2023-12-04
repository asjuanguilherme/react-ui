import { MouseEventHandler } from 'react'
import * as S from './styles'
import { SupportedHTMLElements } from 'styled-components'
import { HTMLStyleAttributes } from 'types'
import { IconComponent } from 'components/icons'

export type ResponsiveButtonProps = {
  height?: number
  width?: number
  icon?: IconComponent
  title: string
  onClick?: MouseEventHandler
  borderDashed?: boolean
  as?: SupportedHTMLElements | any
} & HTMLStyleAttributes

export const ResponsiveButton = ({
  height = 100,
  width = 100,
  icon: Icon,
  title,
  borderDashed = false,
  ...props
}: ResponsiveButtonProps) => {
  return (
    <S.Wrapper {...props} $height={height} $width={width}>
      <S.Box $borderDashed={borderDashed}>
        {Icon && (
          <S.IconCircle>
            <Icon />
          </S.IconCircle>
        )}
        {title}
      </S.Box>
    </S.Wrapper>
  )
}
