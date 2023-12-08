import styled, { css } from 'styled-components'
import { FormFieldStatusType } from '.'

export const Wrapper = styled.span<{ $type: FormFieldStatusType }>`
  display: flex;
  gap: ${props => props.theme.spacing.components.small};
  align-items: center;
  font-size: ${props => props.theme.fontSizes.xsmall};
  padding-top: ${props => props.theme.spacing.components.xsmall};
  padding-left: ${props => props.theme.spacing.components.small};

  ${props => {
    switch (props.$type) {
      case 'error':
        return css`
          color: ${props => props.theme.colors.pallete.error.light};
        `
      case 'success':
        return css`
          color: ${props => props.theme.colors.pallete.success.normal};
        `
      case 'info':
        css`
          color: ${props => props.theme.colors.content.text};
        `
    }
  }}
`
