import { fontFamily } from 'fonts'

import { ThemeTokens } from './tokens'

export const defaultThemeTokens: ThemeTokens = {
  blurRadius: { subtle: '4px', normal: '8px', strong: '16px' },
  borderRadius: {
    small: '0.2rem',
    medium: '0.4rem',
    large: '0.6rem',
    pill: '99999999px',
    circle: '50%',
  },
  container: { defaultWidth: '1200px', padding: '1.5rem' },
  field: {
    height: '3rem',
    borderRadius: '0.4rem',
  },
  button: {
    shape: 'pill',
    height: {
      small: '2.375rem',
      medium: '3rem',
      large: '3.375rem',
    },
    borderRadius: '0.4rem',
  },
  fontSizes: {
    xxsmall: '0.4rem',
    xsmall: '0.6rem',
    small: '0.8rem',
    medium: '1rem',
    large: '1.2rem',
    xlarge: '1.5rem',
    xxlarge: '2rem',
    xxxlarge: '2.5rem',
  },
  fontWeights: fontFamily.poppins.weights,
  spacing: {
    components: {
      xsmall: '0.25rem',
      small: '0.5rem',
      medium: '1rem',
      large: '1.25rem',
      xlarge: '1.5rem',
    },
    sections: {
      xsmall: '2rem',
      small: '2.5rem',
      medium: '3rem',
      large: '3.5rem',
      xlarge: '4rem',
    },
  },
  transitionDurations: {
    faster: '.1s',
    fast: '.25s',
    default: '.4s',
    slow: '.6s',
    slower: '1s',
  },
  zIndex: {
    navbar: 100,
    floatButtons: 105,
    menuMobile: 110,
    menuMobileToggle: 115,
    modals: 120,
  },
}
