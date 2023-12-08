import styled, { css, keyframes } from 'styled-components'
import { StateType } from '.'
import { opacify } from 'polished'
import { fontFamily } from 'fonts'

export const ActionButtons = styled.div`
  margin-top: ${props => props.theme.spacing.sections.small};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${props => props.theme.spacing.components.small};
`

export const Message = styled.div`
  font-size: ${props => props.theme.fontSizes.small};
  line-height: 1.5em;
`

export const Title = styled.span`
  font-size: ${props => props.theme.fontSizes.medium};
  font-weight: ${fontFamily.poppins.weights};
  line-height: 1.3em;
  margin-bottom: ${props => props.theme.spacing.components.medium};
`

const iconAppearKeyframes = keyframes`
  from {
    transform: scale(.5);
    opacity: 0
  }
  to {
    transform: initial;
    opacity: 1;
  }
`

export const Icon = styled.div<{ $type: StateType }>`
  font-size: 2rem;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${iconAppearKeyframes} ${props => props.theme.transition.default}
    ease;
  color: ${props => props.theme.colors.content.title};
  margin-bottom: ${props => props.theme.spacing.components.medium};

  ${({ $type }) =>
    $type !== 'loading' &&
    css`
      width: 4rem;
      height: 4rem;
    `}

  ${({ theme, $type }) => {
    switch ($type) {
      case 'error':
      case 'warning':
        return css`
          background: ${theme.colors.pallete.primary.normal};
        `
      case 'success':
        return css`
          background: ${theme.colors.pallete.success.normal};
        `
      case 'loading':
        return css`
          background: transparent;
          color: ${props => props.theme.colors.pallete.primary.normal};
        `
      default:
        return css`
          background-color: ${opacify(-0.75, theme.colors.content.title)};
        `
    }
  }}
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: ${props => props.theme.spacing.components.large};
`
