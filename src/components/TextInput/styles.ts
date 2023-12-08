import styled, { keyframes } from 'styled-components'
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
  animation-duration: ${props => props.theme.transition.fast};
  flex-shrink: 0;
`

export const Suffix = styled.span`
  height: 100%;
  display: inline-flex;
  align-items: center;
  padding: 0 ${props => props.theme.spacing.components.xlarge};
  color: ${props => props.theme.colors.content.detail};
`

export const Prefix = styled(Suffix)``

export const Input = styled(FormTextField.Input)<{
  $hasPrefix: boolean
}>`
  padding-left: ${props =>
    props.$hasPrefix ? 'initial' : props.theme.spacing.components.large};
`
