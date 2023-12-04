import { css } from 'styled-components'
import { fontFamily } from 'fonts'

export const resets = css`
  * {
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
    font-size: 100%;
    vertical-align: baseline;
    font-family: inherit;
    box-sizing: border-box;
    color: inherit;
  }

  html {
    font-family: ${fontFamily.poppins.name};
    font-weight: ${fontFamily.poppins.weights.regular};
    color: ${props => props.theme.colors.content.text};
    background-color: ${props => props.theme.colors.layers[0].background};
  }

  html,
  body,
  #__next {
    height: 100vh;
    max-height: 100%;
  }

  /* HTML5 display-role reset for older browsers */
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: block;
  }

  ol,
  ul {
    list-style: none;
  }

  blockquote,
  q {
    quotes: none;
  }

  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
    content: '';
    content: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
`
