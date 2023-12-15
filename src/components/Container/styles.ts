import { styled } from 'styled-components'

import { breakpoints } from '@/lib/responsiveness'

import { ContainerProps } from '.'

export const Wrapper = styled.div<{ $variant: ContainerProps['variant'] }>`
  max-width: ${props =>
    props.$variant
      ? breakpoints[props.$variant] + 'px'
      : props => props.theme.container.defaultWidth};
  padding: 0 ${props => props.theme.container.padding};
  width: 100%;
  margin: 0 auto;
`
