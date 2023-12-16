import { styled, css } from 'styled-components'

import { poppinsFontFamily } from '~/lib/font'

import { CardBase } from '~/components/CardBase'

export const Title = styled.span`
  font-size: ${props => props.theme.fontSizes.large};
  font-weight: ${poppinsFontFamily.weights.bold};
  text-transform: uppercase;
  color: ${props => props.theme.colors.palette.primary.normal};
`

export const PoweredByText = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: ${props => props.theme.colors.palette.primary.normal};

  svg {
    margin-left: ${props => props.theme.spacing.components.small};
    margin-right: ${props => props.theme.spacing.components.small};
  }
`

export const Footer = styled.div`
  padding-top: ${props => props.theme.spacing.components.xlarge};
`

export const Body = styled.div`
  flex: 1;
  overflow: auto;
`

export const Header = styled.div`
  padding-bottom: ${props => props.theme.spacing.components.xlarge};
`

export const Box = styled(CardBase)`
  padding: ${props => props.theme.spacing.components.medium};
  display: flex;
  flex-direction: column;
  height: 100%;
`

export const Wrapper = styled.div<{ $opened: boolean }>`
  position: fixed;
  z-index: ${props => props.theme.zIndex.menuMobile};
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  max-height: 100%;
  padding: ${props => props.theme.container.padding};
  transition: ${props => props.theme.transitionDurations.slow};

  ${({ $opened }) =>
    $opened
      ? css`
          background-color: rgba(0, 0, 0, 0.1);
          backdrop-filter: blur(2px);
        `
      : css`
          pointer-events: none;
          opacity: 0;
          transform: scale(1.1);
        `}
`
