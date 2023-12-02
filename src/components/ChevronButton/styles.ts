import { Button as DefaultButton } from 'components'
import styled, { css } from 'styled-components'

export const Wrapper = styled(DefaultButton)<{ $active: boolean }>`
  justify-content: space-between;

  ${({ $active }) =>
    $active &&
    css`
      color: ${props => props.theme.colors.main.primary.normal};
    `}
`
