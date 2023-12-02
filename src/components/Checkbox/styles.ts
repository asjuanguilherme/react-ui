import { borderRadius, spacing, transition } from 'styles/tokens'
import { rem } from 'polished'
import styled, { css } from 'styled-components'
import { LayerIndex } from 'types'
import { CheckboxProps } from '.'
import { CheckIcon } from 'components/icons'

export const Text = styled.span`
  text-align: left;
`

export const Mark = styled(CheckIcon)<{ $layer: LayerIndex }>`
  opacity: 0;
  transform: scaleX(0.5) rotate(-40deg);
  transition-duration: ${transition.default};
  color: ${props => props.theme.colors.layers[props.$layer].background};
`

export const Box = styled.span<{ $layer: LayerIndex }>`
  flex-shrink: 0;
  display: inline-flex;
  width: ${rem(18)};
  height: ${rem(18)};
  border: 1px solid ${props => props.theme.colors.layers[props.$layer].border};
  background: ${props => props.theme.colors.layers[props.$layer].border};
  border-radius: ${borderRadius.small};
  position: relative;
  transition-duration: ${transition.default};
`

export const Wrapper = styled.label<{
  $layer: LayerIndex
  $alignment: CheckboxProps['alignment']
}>`
  display: flex;
  gap: ${spacing.components.small};
  cursor: pointer;

  ${({ $alignment }) => {
    switch ($alignment) {
      case 'top':
        return css`
          align-items: flex-start;
        `
      case 'center':
        return css`
          align-items: center;
        `
      case 'bottom':
        return css`
          align-items: flex-end;
        `
    }
  }}

  &:hover ${Box} {
    background: ${props =>
      props.theme.colors.layers[props.$layer].hoveredBackground};
  }

  input:checked ~ ${Box} {
    background-color: ${props => props.theme.colors.main.primary.normal};

    ${Mark} {
      opacity: 1;
      transform: initial;
    }
  }
`
