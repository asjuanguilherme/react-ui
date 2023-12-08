import styled from 'styled-components'
import { ChevronDownIcon } from 'icons'
import { ChevronDirection } from '.'

const angleByDirection = {
  down: 0,
  right: -90,
  top: -180,
  left: 90,
}

export const ChevronIcon = styled(ChevronDownIcon)<{
  $direction: ChevronDirection
}>`
  transition-duration: ${props => props.theme.transition.default};
  transition-property: transform;
  transform: rotate(${({ $direction }) => angleByDirection[$direction]}deg);
`
