import React, { CSSProperties, ReactNode, useEffect, useState } from 'react'

import { ThemeLayerIndex } from '@/lib'

import { Button, ButtonProps } from '@/components/Button'
import {
  CheckIcon,
  InfoIcon,
  TriangleExclamationIcon,
  XmarkIcon,
} from '@/icons'

import * as S from './styles'

export type StatusBoxTypes = 'info' | 'error' | 'success' | 'warning'

export type StatusBoxProps = {
  children?: ReactNode
  title?: string
  type?: StatusBoxTypes
  opened?: boolean
  onClose?: () => void
  actionButtons?: (ButtonProps & { key: string })[]
  height?: string
  width?: string
  layer?: ThemeLayerIndex
  style?: CSSProperties
  className?: string
}

const iconByType: Record<StatusBoxTypes, JSX.Element> = {
  warning: <TriangleExclamationIcon />,
  success: <CheckIcon />,
  error: <XmarkIcon />,
  info: <InfoIcon />,
}

export const StatusBox = ({
  title,
  type = 'info',
  children,
  onClose,
  actionButtons,
  layer = 1,
  opened = true,
  height,
  width,
  ...props
}: StatusBoxProps) => {
  const [render, setRender] = useState(opened)

  useEffect(() => {
    if (opened) return setRender(true)

    if (!opened) {
      const timeout = setTimeout(() => {
        setRender(false)
      }, 250)

      return () => clearTimeout(timeout)
    }
  }, [opened])

  if (!render) return <></>

  return (
    <S.Wrapper
      $height={height}
      $layer={layer}
      $opened={opened}
      $type={type}
      $width={width}
      {...props}
    >
      <S.Header>
        <S.Title>
          {iconByType[type]}
          {title}
        </S.Title>
        {onClose && (
          <S.CloseButton onClick={onClose}>
            <XmarkIcon />
          </S.CloseButton>
        )}
      </S.Header>
      {children && <S.Content>{children}</S.Content>}
      {actionButtons && (
        <S.ActionButtons>
          {actionButtons.map(button => (
            <Button {...button} key={button.key} />
          ))}
        </S.ActionButtons>
      )}
    </S.Wrapper>
  )
}
