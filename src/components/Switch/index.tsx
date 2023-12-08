import { ThemeLayerIndex } from 'lib/theming'
import * as S from './styles'
import { ChangeEventHandler } from 'react'
import { HTMLStyleAttributes } from 'types'

export type SwitchProps = {
  onChange?: ChangeEventHandler
  checked?: boolean
  label?: string
  labelPosition?: 'start' | 'end'
  layer?: ThemeLayerIndex
} & HTMLStyleAttributes

export const Switch = ({
  label,
  labelPosition = 'end',
  checked,
  onChange,
  className,
  style,
  layer = 1,
}: SwitchProps) => {
  return (
    <S.Wrapper className={className} style={style} $layer={layer}>
      {labelPosition === 'start' && label}
      <input type="checkbox" checked={checked} onChange={onChange} hidden />
      <S.SwitchTrack>
        <S.SwitchDot />
      </S.SwitchTrack>
      {labelPosition === 'end' && label}
    </S.Wrapper>
  )
}
