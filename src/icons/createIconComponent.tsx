import React, { createElement, CSSProperties, ReactNode } from 'react'

export type IconProps = {
  color?: string
  size?: string
  className?: string
  style?: CSSProperties
}

export type IconComponent = (props: IconProps) => JSX.Element

export type CreateIconComponentProps = {
  content: ReactNode | string
  viewBox: string
  size?: string
  color?: string
}

export const createIconComponent = ({
  content,
  viewBox,
}: CreateIconComponentProps): IconComponent => {
  const createIcon = ({
    size = '1em',
    color = 'currentColor',
    ...componentProps
  }: IconProps) => {
    const props = {
      height: size,
      width: size,
      fill: color,
      viewBox: viewBox,
      ...componentProps,
      className: componentProps.className,
    }

    return createElement(
      'svg',
      props,
      typeof content === 'string' ? (
        <g dangerouslySetInnerHTML={{ __html: content }} />
      ) : (
        content
      ),
    )
  }

  return createIcon
}
