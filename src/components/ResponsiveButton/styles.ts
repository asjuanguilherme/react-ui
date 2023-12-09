import { opacify, rem } from 'polished'

import styled from 'styled-components'

export const Title = styled.span``

export const IconCircle = styled.span`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: ${rem(48)};
  width: ${rem(48)};
  background-color: ${props => props.theme.colors.layers};
  background: ${props => opacify(-0.9, props.theme.colors.content.title)};
  border-radius: ${props => props.theme.borderRadius.circle};
  transition: ${props => props.theme.transitionDurations.fast} transform;

  svg {
    font-size: ${props => props.theme.fontSizes.xlarge};
  }
`

export const Box = styled.span<{ $borderDashed: boolean }>`
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;

  font-size: ${props => props.theme.fontSizes.small};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${props => props.theme.fontSizes.small};
  border-width: 1px;
  border-style: ${props => (props.$borderDashed ? 'dashed' : 'solid')};
  border-color: ${props => props.theme.colors.layers[1].border};
  background: transparent;
  border-radius: ${props => props.theme.borderRadius.medium};
  transition: ${props => props.theme.transitionDurations.fast};

  &:hover,
  &:active {
    background-color: ${props => props.theme.colors.layers[1].background};
    color: ${props => props.theme.colors.palette.primary.normal};
    cursor: pointer;

    ${IconCircle} {
      transform: scale(1.1);
    }
  }
`

export const Wrapper = styled.button<{ $height: number; $width: number }>`
  display: block;
  width: ${props => props.$width}%;
  padding-top: ${props => props.$height}%;
  text-decoration: none;
  position: relative;
  color: inherit;
  background: transparent;
`
