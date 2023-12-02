import styled, { keyframes } from 'styled-components'
import { spacing, transition } from 'styles/tokens'
import { Button as DefaultButton } from '..'
import { FormTextField } from 'components/FormTextField'

const appearButtonKeyframes = keyframes`
  from {
    transform: translate(100%);
    width: 0px;
    overflow: hidden;
    padding: 0;
  }
`

export const Button = styled(DefaultButton)`
  animation: ${appearButtonKeyframes} ease;
  animation-duration: ${transition.fast};
  flex-shrink: 0;
`

export const Suffix = styled.span`
  height: 100%;
  display: inline-flex;
  align-items: center;
  padding: 0 ${spacing.components.larger};
  color: ${props => props.theme.colors.content.detail};
`

export const Prefix = styled(Suffix)``

export const Input = styled(FormTextField.Input)<{
  $hasPrefix: boolean
}>`
  padding-left: ${props =>
    props.$hasPrefix ? 'initial' : spacing.components.large};
`
