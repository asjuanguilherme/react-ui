import { css } from 'styled-components'

export const customScrollbar = css`
  ::-webkit-scrollbar {
    width: 8px;
    border-radius: 10px;
  }

  ::-webkit-scrollbar-track {
    background: ${props => props.theme.colors.layers[0].hoveredBackground};
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    ${props => props.theme.colors.layers[0].background};
    background: ${props => props.theme.colors.pallete.primary.normal};
    cursor: default;
  }
`
