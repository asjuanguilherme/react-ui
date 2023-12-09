import React, { CSSProperties, ReactNode, useEffect, useState } from 'react'

import * as S from './styles'

import { Button, ButtonProps } from 'components/Button'
import { CheckIcon, InfoIcon, TriangleExclamationIcon, XmarkIcon } from 'icons'
import { ThemeLayerIndex } from 'lib'

export type StatusBoxTypes = 'info' | 'error' | 'success' | 'warning'

export type StatusBoxProps = {
  children?: ReactNode
  title?: string
  type?: StatusBoxTypes
  opened?: boolean
  onClose?: () => void
  actionButtons?: ButtonProps[]
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
    <S.Wrapper opened={opened} type={type} layer={layer} {...props}>
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
          {actionButtons.map((button, index) => (
            <Button {...button} key={index} />
          ))}
        </S.ActionButtons>
      )}
    </S.Wrapper>
  )
}
