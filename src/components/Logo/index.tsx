import { colors } from 'styles/tokens'

import { HTMLStyleAttributes } from '../../types'

export type LogoVariants =
  | 'standard'
  | 'standard-with-white-b'
  | 'black-with-white-b'

type LogoProps = {
  variant?: LogoVariants
  simplified?: boolean
} & HTMLStyleAttributes

const colorsByVariant: Record<LogoVariants, { b: string; others: string }> = {
  standard: {
    b: 'black',
    others: colors.primary.normal,
  },
  'standard-with-white-b': {
    b: 'white',
    others: colors.primary.normal,
  },
  'black-with-white-b': {
    b: 'white',
    others: 'black',
  },
}

export const Logo = ({
  variant = 'standard',
  className,
  simplified = false,
  style,
}: LogoProps) => {
  const { b, others } = colorsByVariant[variant]

  const viewBoxX = simplified ? 232.3 : 462.3

  return (
    <svg
      viewBox={`0 0 ${viewBoxX} 176.6`}
      height="1em"
      className={className}
      style={style}
    >
      <g fill={b}>
        <path d="M72.1 168.3H64v-8.4h8.1v2.4H157l13.8-10.6h8.9l24.4-24.4v-10.6l-19.5-19.5H97.7V82.8h86.9l19.5-19.5V52.7l-24.4-24.4H80.4l-.1 7h2.4l-.1 8.1h-8.4l.1-8.1h2.3l.1-10.7h104.5l26.6 26.5v13.7l-21.7 21.7h-84.7v6.9h84.7l21.7 21.7v13.7l-26.6 26.6h-9.1L158.3 166H72.1v2.3z" />
        <path d="m216.7 41.7 5.7 5.7-6 6-5.7-5.8 1.7-1.6L184 17.7h-68L102.5 7.1H59.5v121.2H62v8.1h-8.4v-8h2.3V3.3h47.9L117.4 14h68.2L215 43.4Z" />
        <path d="M90 11.6h8.1V20H90v-2.3H70V142l-10.7 13.8.2 17h129l36.8-36.8v-28.1l-18-17.9L223 74.4l-1.6-1.7L227 67l6 6-5.7 5.7-1.7-1.7-13 13 16.4 16.3v31.3l-39 39H55.7l-.1-22.1 10.6-13.8V14H90Z" />
        <path d="M184.5 168.3h-8.1v-8.4h8.1v1.9l30.2-30.1v-19.4L192.4 90l22.3-22.3v-5.6l10.6-13.9v-4.3L188.4 7.1h-58.5v2.3h-8.1V1h8.1v2.4H190l39 39v7.1l-10.6 13.9v5.8L197.7 90l20.7 20.7v22.5L185.6 166h-1.1v2.3z" />
        <path d="m181.7 76 15.5-15.5v-5l-20.4-20.4H87.1v12.6L76.7 61.5v94h68v2.3h8v-8.5h-8v2.4H80.4v-89L90.8 49V38.9h84.5L193.5 57v1.8l-13.3 13.3H87v72.6h89.7l20.4-20.4v-4.9L181.7 104H90.8V76Zm-1.5 31.8 13.3 13.3v1.8l-18.2 18.2H90.8v-33.4Z" />
      </g>
      <g fill={others}>
        <path d="m18.9 45.1-.1 8.1h-8.4v-8.1h2.4V2.2h24.6l-.1 113.1L27 129.1l-.1 45.3H2.3V85H0v-8.1h8.4V85H6.1L6 170.7h17.2l.1-42.9L33.5 114l.2-108.1H16.5v39.2h2.4z" />
        <path d="M20.9 18.5v-8.1h8.4v8.1H27l-.1 83.1h2.3v8.1h-8.4v-8.1h2.4V18.5h-2.3zM39.7 168.5v8.1h-8.4v-8.1h2.3v-27h-2.3v-8.1h8.4v8.1h-2.4v27h2.4zM8.4 8.1V0H0v8.1h2.4v50.7l10.3 13.7v85.6h-2.3v8.1h8.4v-8.1h-2.4V71.3L6.2 57.5 6.1 8.1h2.3zM441.4 45.1v8.1H433v-8.1h2.3l.1-42.9H460l-.2 113.1-10.2 13.8-.1 45.3h-24.6V85h-2.3v-8.1h8.4V85h-2.4v85.7h17.1l.1-42.9 10.3-13.8.1-108.1h-17.1v39.2h2.3z" />
        <path d="m443.4 18.5.1-8.1h8.4v8.1h-2.4v83.1h2.3v8.1h-8.4v-8.1h2.4V18.5h-2.4zM462.3 168.5v8.1h-8.5v-8.1h2.4v-27h-2.4l.1-8.1h8.4v8.1h-2.4v27h2.4zM431 8.1V0h-8.4v8.1h2.3l.1 50.7 10.3 13.7v85.6h-2.4l.1 8.1h8.4v-8.1H439V71.3l-10.3-13.8V8.1h2.3zM395.5 23.8l8.1.1v8.4h-8.1v-2.4h-63l-.1 77.9-10.4 14v36.1h2.3v8.1h-8.4v-8.1h2.3l.1-37.4 10.4-14V26.2h66.8v-2.4z" />
        <path d="M326.4 134.1V126h8.4v8.1h-2.4v40.3h-24.6l.1-134.3-31.5.2v2.3h-8l-.1-8.4h8.1v2.3l35.2-.1-.1 134.3h17.2v-36.6h-2.3z" />
        <path d="M345.2 168.5v8.1h-8.4v-8.1h2.3l.1-131.9h69V19.5h-7.6l-14-10.4L242.5 9v14.9h2.3V32h-8.4v-8.1h2.3V5.2l149.2.1 13.9 10.5H412v24.6l-69.1-.1v128.2h2.3z" />
        <path d="M375.2 13.6h8.1V22h-8.2v-2.4l-119.9-.2v2.4h-8.1l.1-8.5h8.1v2.4l119.9.2v-2.3zM244.8 34.1l-8.1-.2-.2 8.4 8.1.2v-2.3l5.7.1 10-10.4h58v64.3h-2.4v8.1h8.4v-8.1H322v-68l-63.3-.1-10 10.4-4-.1.1-2.3z" />
      </g>
    </svg>
  )
}
