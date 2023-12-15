import { styled, css } from 'styled-components'

import { Button as DefaultButton } from '@/components'

export const Wrapper = styled(DefaultButton)<{ $active: boolean }>`
  justify-content: space-between;

  ${({ $active }) =>
    $active &&
    css`
      color: ${props => props.theme.colors.palette.primary.normal};
    `}
`
