import { font, spacing } from 'styles/tokens'
import styled, { css } from 'styled-components'
import { FormFieldStatusType } from '.'

export const Wrapper = styled.span<{ $type: FormFieldStatusType }>`
  display: flex;
  gap: ${spacing.components.small};
  align-items: center;
  font-size: ${font.sizes.smaller};
  padding-top: ${spacing.components.smaller};
  padding-left: ${spacing.components.small};

  ${props => {
    switch (props.$type) {
      case 'error':
        return css`
          color: ${props => props.theme.colors.main.error.light};
        `
      case 'success':
        return css`
          color: ${props => props.theme.colors.main.success.normal};
        `
      case 'info':
        css`
          color: ${props => props.theme.colors.content.text};
        `
    }
  }}
`
