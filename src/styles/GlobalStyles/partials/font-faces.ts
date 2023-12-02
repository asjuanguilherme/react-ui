import { css } from 'styled-components'

export const fontFaces = css`
  @font-face {
    font-family: BankGothic;
    font-style: normal;
    font-weight: 300;
    src:
      local('BankGothic'),
      url('../../fonts/bank-gothic-300.ttf') format('truetype');
  }

  @font-face {
    font-family: BankGothic;
    font-weight: 400;
    font-style: normal;
    src:
      local('BankGothic'),
      url('../../fonts/bank-gothic-400.ttf') format('truetype');
  }

  @font-face {
    font-family: BankGothic;
    font-style: normal;
    font-weight: 700;
    src:
      local('BankGothic'),
      url('../../fonts/bank-gothic-700.ttf') format('truetype');
  }

  @font-face {
    font-family: Montserrat;
    font-style: normal;
    font-weight: 500;
    src:
      local('Montserrat'),
      url('../../fonts/montserrat-500.woff2') format('woff2'),
      url('../../fonts/montserrat-500.woff') format('woff');
  }

  @font-face {
    font-family: Montserrat;
    font-style: normal;
    font-weight: 600;
    src:
      local('Montserrat'),
      url('../../fonts/montserrat-600.woff2') format('woff2'),
      url('../../fonts/montserrat-600.woff') format('woff');
  }

  @font-face {
    font-family: Montserrat;
    font-style: normal;
    font-weight: 700;
    src:
      local('Montserrat'),
      url('../../fonts/montserrat-700.woff2') format('woff2'),
      url('../../fonts/montserrat-700.woff') format('woff');
  }
`
