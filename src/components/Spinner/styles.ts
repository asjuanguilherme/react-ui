import styled, { keyframes } from 'styled-components'

const spinner = (size: number) => keyframes`
  0% {
      stroke-dashoffset: ${size * 0.66};
      transform: rotate(0deg);
    } 50% {
      stroke-dashoffset: ${size * 3.14};
      transform: rotate(720deg);
    } 100% {
      stroke-dashoffset: ${size * 0.66};
      transform: rotate(1080deg);
  }
`

export const Circle = styled.circle<{
  $size: number
  $strokeWidth: number
}>`
  transform-origin: ${props =>
    `${props.$size * 0.5}px ${props.$size * 0.5}px 0px`};
  animation: ${props => spinner(props.$size)} 3s linear infinite;
  fill: transparent;
  stroke: currentColor;
  stroke-width: ${props => props.$strokeWidth};
  stroke-linecap: round;
  stroke-dasharray: ${props => 3.14 * props.$size};
`
