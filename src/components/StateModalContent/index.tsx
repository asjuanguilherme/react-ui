import React, { ReactNode, useMemo } from 'react'

import * as S from './styles'

import { Button, ButtonProps, Spinner } from 'components'
import { CheckIcon, InfoIcon, TriangleExclamationIcon, XmarkIcon } from 'icons'

export type StateType = 'info' | 'error' | 'loading' | 'warning' | 'success'

export type StateModalContentProps = {
  type?: StateType
  title?: ReactNode
  description?: ReactNode
  buttons?: (ButtonProps & { customRender?: ReactNode })[]
}

export const StateModalContent = ({
  type = 'info',
  title,
  description,
  buttons,
}: StateModalContentProps) => {
  const typeIcon = useMemo(() => {
    switch (type) {
      case 'warning':
        return <TriangleExclamationIcon />
      case 'error':
        return <XmarkIcon />
      case 'loading':
        return <Spinner />
      case 'success':
        return <CheckIcon />
      default:
        return <InfoIcon />
    }
  }, [type])

  return (
    <S.Wrapper>
      <S.Icon $type={type}>{typeIcon}</S.Icon>
      {title && <S.Title>{title}</S.Title>}
      {description && <S.Message>{description}</S.Message>}
      {buttons && buttons.length > 0 && (
        <S.ActionButtons>
          {buttons.map((button, index) => {
            if (button?.customRender) return button.customRender

            // eslint-disable-next-line react/react-in-jsx-scope
            return <Button key={index} {...button} />
          })}
        </S.ActionButtons>
      )}
    </S.Wrapper>
  )
}
