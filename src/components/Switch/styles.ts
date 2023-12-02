import styled from 'styled-components'
import { borderRadius, font, spacing, transition } from 'styles/tokens'
import { LayerIndex } from 'types'

export const SwitchDot = styled.div`
  display: inline-block;
  height: 1.3rem;
  width: 1.3rem;
  border-radius: ${borderRadius.circle};
  background-color: white;
  transition: ${transition.default};
  position: absolute;
  left: 5%;
  top: 50%;
  transform: translateY(-50%);
`

export const SwitchTrack = styled.span``

export const Wrapper = styled.span<{ $layer: LayerIndex }>`
  font-size: ${font.sizes.small};
  display: flex;
  align-items: center;
  gap: ${spacing.components.small};
  cursor: pointer;

  ${SwitchTrack} {
    display: inline-flex;
    height: 1.5rem;
    width: 3rem;
    border-radius: ${borderRadius.pill};
    background: ${props => props.theme.colors.layers[props.$layer].background};
    display: flex;
    position: relative;
    flex-shrink: 0;
    transition: ${transition.fast};
  }

  &:hover {
    background: ${props =>
      props.theme.colors.layers[props.$layer].hoveredBackground};
  }

  input:checked ~ ${SwitchTrack} {
    background: ${props => props.theme.colors.main.primary.normal};

    ${SwitchDot} {
      left: 100%;
      transform: translate(-110%, -50%);
    }
  }
`
