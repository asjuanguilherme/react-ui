import { styled, css } from 'styled-components'
import { StepsProgressDirection } from '../Root'

export const Wrapper = styled.ol<{ $direction: StepsProgressDirection }>`
  display: flex;

  ${({ $direction }) => {
    switch ($direction) {
      case 'column':
        return css`
          flex-direction: column;
          align-items: flex-start;
        `
      default:
      case 'row':
        return css`
          flex-direction: row;
          align-items: flex-start;
        `
    }
  }}
`
