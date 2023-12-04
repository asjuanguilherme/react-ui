import { borderRadius } from 'styles/tokens'
import { generateColorFromString } from '@asjuanguilherme/js-utils'
import { readableColor } from 'polished'
import styled, { css } from 'styled-components'
import { fontFamily } from 'fonts'

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
  border-radius: ${borderRadius.circle};
  overflow: hidden;
  font-weight: ${fontFamily.poppins.weights.bold};

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
