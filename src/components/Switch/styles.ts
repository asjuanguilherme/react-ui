import { ThemeLayerIndex } from 'lib/theming'
import styled from 'styled-components'

export const SwitchDot = styled.div`
  display: inline-block;
  height: 1.3rem;
  width: 1.3rem;
  border-radius: ${props => props.theme.borderRadius.circle};
  background-color: white;
  transition: ${props => props.theme.transition.default};
  position: absolute;
  left: 5%;
  top: 50%;
  transform: translateY(-50%);
`

export const SwitchTrack = styled.span``

export const Wrapper = styled.span<{ $layer: ThemeLayerIndex }>`
  font-size: ${props => props.theme.fontSizes.small};
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing.components.small};
  cursor: pointer;

  ${SwitchTrack} {
    display: inline-flex;
    height: 1.5rem;
    width: 3rem;
    border-radius: ${props => props.theme.borderRadius.pill};
    background: ${props => props.theme.colors.layers[props.$layer].background};
    display: flex;
    position: relative;
    flex-shrink: 0;
    transition: ${props => props.theme.transition.fast};
  }

  &:hover {
    ${SwitchTrack} {
      background: ${props =>
        props.theme.colors.layers[props.$layer].hoveredBackground};
    }
  }

  input:checked ~ ${SwitchTrack} {
    background: ${props => props.theme.colors.palette.primary.normal};

    ${SwitchDot} {
      left: 100%;
      transform: translate(-110%, -50%);
    }
  }
`
