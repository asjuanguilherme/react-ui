import { styled, css } from 'styled-components'

export const IconBar = styled.span`
  height: 2px;
  width: 100%;
  border-radius: ${props => props.theme.borderRadius.pill};
  transition: ${props => props.theme.transitionDurations.slow};
  transition-property: all;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  background-color: currentColor;
`

export const BottomBar = styled(IconBar)`
  bottom: 0;
`

export const MiddleBar = styled(IconBar)`
  top: 50%;
`

export const TopBar = styled(IconBar)`
  top: 0;
`

export const Wrapper = styled.button<{
  $opened: boolean
  $navbarHeight: number
}>`
  display: inline-flex;
  height: 1.8rem;
  width: 1.8rem;
  flex-direction: column;
  gap: ${props => props.theme.spacing.components.xsmall};
  background: unset;
  cursor: pointer;
  position: fixed;
  right: ${props => props.theme.container.padding};
  top: ${props => props.$navbarHeight / 2}px;
  transform: translateY(-50%);
  transition: ${props => props.theme.transitionDurations.slow};
  z-index: ${props => props.theme.zIndex.menuMobileToggle};

  &:hover {
    color: ${props => props.theme.colors.palette.primary.normal};
  }

  ${({ $opened, theme }) =>
    $opened &&
    css`
      transform: unset;
      top: calc(
        ${props => props.theme.container.padding} +
          ${props => props.theme.spacing.components.medium}
      );
      right: calc(
        ${props => props.theme.container.padding} +
          ${props => props.theme.spacing.components.medium}
      );
      color: ${theme.colors.palette.primary.normal};

      ${TopBar} {
        top: 50%;
        transform: translate(-50%, -50%) rotate(45deg);
      }

      ${BottomBar} {
        transform: translate(-50%, -50%) rotate(135deg);
        top: 50%;
        bottom: unset;
      }

      ${MiddleBar} {
        left: 100%;
        opacity: 0;
      }
    `};
`
