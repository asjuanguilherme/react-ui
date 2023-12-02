import {
  borderRadius,
  fieldSizes,
  font,
  spacing,
  transition,
} from 'styles/tokens'
import { mix } from 'polished'
import styled, { css } from 'styled-components'
import { fontFamily } from 'styles'
import { LayerIndex } from 'types'

export type TextFieldSharedStyleProps = {
  $layer: LayerIndex
  $focused: boolean
  $hasError: boolean
  $hasSuccess: boolean
  $disabled?: boolean
  $hasCharsCounter?: boolean
}

const textFieldSharedStyle = css`
  width: 100%;
  font-size: ${font.sizes.medium};
  font-weight: ${fontFamily.montserrat.weight.regular};
  background: transparent;
  color: ${props => props.theme.colors.content.title};

  &::placeholder {
    font-weight: ${fontFamily.montserrat.weight.regular};
    color: ${props => props.theme.colors.content.detail};
  }
`

const TextArea = styled.textarea`
  ${textFieldSharedStyle}
  padding: ${spacing.components.medium};
  resize: none;
`

const Input = styled.input`
  ${textFieldSharedStyle}
  height: ${fieldSizes.medium};
`

const Wrapper = styled.span<TextFieldSharedStyleProps>`
  display: flex;
  align-items: center;
  color: ${props => props.theme.colors.content.text};
  background-color: ${props =>
    props.theme.colors.layers[props.$layer].background};
  border: 1px solid ${props => props.theme.colors.layers[props.$layer].border};
  border-radius: ${borderRadius.medium};
  overflow: hidden;
  transition: ${transition.fast};
  transition-property: border-color background;
  position: relative;

  ${({ $focused, $disabled, $layer, theme }) =>
    !$disabled &&
    !$focused &&
    css`
      &:hover {
        background-color: ${theme.colors.layers[$layer].hoveredBackground};
      }
    `}

  ${({ $focused, $layer, theme }) =>
    $focused &&
    css`
      border-color: ${mix(
        0.3,
        theme.colors.main.primary.normal,
        theme.colors.layers[$layer].border,
      )};
    `}

  ${({ theme, $hasError }) =>
    $hasError &&
    css`
      border-color: ${theme.colors.main.error.normal};
    `}

  ${({ theme, $hasSuccess }) =>
    $hasSuccess &&
    css`
      border-color: ${theme.colors.main.success.normal};
    `}

  ${({ theme, $disabled, $layer }) =>
    $disabled &&
    css`
      background: ${theme.colors.layers[$layer].border};
      color: ${theme.colors.content.detail};
    `}

    ${({ $hasCharsCounter }) =>
    $hasCharsCounter &&
    css`
      padding-bottom: 2rem;
    `}
`

export const FormTextField = {
  Wrapper,
  Input,
  TextArea,
}
