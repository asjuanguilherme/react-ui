import { font, layout, spacing, transition, zIndex } from 'styles/tokens'
import { CardBase } from 'components/CardBase'
import styled, { css } from 'styled-components'
import { fontFamily } from 'fonts'

export const Title = styled.span`
  font-size: ${font.sizes.large};
  font-weight: ${fontFamily.poppins.weights.bold};
  text-transform: uppercase;
  color: ${props => props.theme.colors.main.primary.normal};
`

export const PoweredByText = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: ${props => props.theme.colors.main.primary.normal};

  svg {
    margin-left: ${spacing.components.small};
    margin-right: ${spacing.components.small};
  }
`

export const Footer = styled.div`
  padding-top: ${spacing.components.larger};
`

export const Body = styled.div`
  flex: 1;
  overflow: auto;
`

export const Header = styled.div`
  padding-bottom: ${spacing.components.larger};
`

export const Box = styled(CardBase)`
  padding: ${spacing.components.medium};
  display: flex;
  flex-direction: column;
  height: 100%;
`

export const Wrapper = styled.div<{ $opened: boolean }>`
  position: fixed;
  z-index: ${zIndex.menuMobile};
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  max-height: 100%;
  padding: ${layout.gutter};
  transition: ${transition.slow};

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
