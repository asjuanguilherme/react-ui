import { generateColorFromString } from '@asjuanguilherme/js-utils'
import { fontFamily } from 'fonts'
import { readableColor } from 'polished'
import styled, { css } from 'styled-components'

export const Image = styled.img`
  width: 100%;
`

export const Wrapper = styled.span<{
  $size: number
  $name: string
  $image?: string
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${props => props.theme.borderRadius.circle};
  overflow: hidden;
  font-weight: ${fontFamily.poppins.weights.bold};
  flex-shrink: 0;

  ${({ $size }) => css`
    width: ${$size}px;
    height: ${$size}px;
    font-size: ${$size ? `${$size * 0.25}px` : '16px'};
  `}

  ${({ $name }) => {
    const baseColor = generateColorFromString($name)

    return css`
      background-color: ${baseColor};
      color: ${readableColor(baseColor, 'black', 'white')};
    `
  }}
`
