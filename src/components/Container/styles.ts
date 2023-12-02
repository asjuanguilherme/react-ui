import { breakpoints, layout } from 'styles/tokens'
import styled from 'styled-components'
import { ContainerProps } from '.'

export const Wrapper = styled.div<{ $variant: ContainerProps['variant'] }>`
  max-width: ${props =>
    props.$variant
      ? breakpoints[props.$variant] + 'px'
      : layout.containerMaxWidth};
  padding: 0 ${layout.gutter};
  width: 100%;
  margin: 0 auto;
`
