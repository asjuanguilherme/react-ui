import { LayerIndex } from 'types'
import * as S from './styles'

export type RatingStarProps = {
  onMouseOver: VoidFunction
  onMouseLeave: VoidFunction
  onClick: VoidFunction
  filled?: boolean
  readOnly?: boolean
  layer?: LayerIndex
}

export const RatingStar = ({
  filled = false,
  onMouseOver,
  onMouseLeave,
  onClick,
  readOnly,
  layer = 0,
}: RatingStarProps) => {
  return (
    <S.Wrapper
      onMouseOver={onMouseOver}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
      $readOnly={readOnly}
    >
      <S.Svg
        xmlns="http://www.w3.org/2000/svg"
        width="2rem"
        viewBox="0 0 24 24"
        $filled={filled}
        $layer={layer}
      >
        <path d="M11.0137 2.76683C11.379 1.89022 12.6208 1.89022 12.9861 2.76683L14.9102 7.38462C15.0654 7.75726 15.4295 8 15.8332 8H20.893C21.8234 8 22.2893 9.12483 21.6314 9.78268L17.5391 13.875C17.2823 14.1318 17.185 14.5076 17.2847 14.8568L18.9076 20.5369C19.1816 21.496 18.1122 22.2767 17.2822 21.7234L12.5546 18.5716C12.2187 18.3477 11.7811 18.3477 11.4452 18.5717L6.72544 21.7182C5.89284 22.2732 4.81988 21.49 5.09479 20.5279L6.71509 14.8568C6.81486 14.5076 6.71747 14.1318 6.46068 13.875L2.38859 9.8029C1.72328 9.13758 2.19448 8 3.13538 8H8.16658C8.57028 8 8.93438 7.75726 9.08965 7.38462L11.0137 2.76683Z" />
      </S.Svg>
    </S.Wrapper>
  )
}
