import React, { ReactNode } from 'react'

import { ThemeLayerIndex } from 'lib/theming'

import { Button } from 'components'
import { XmarkIcon } from 'icons'

import * as S from './styles'

export type ModalVariant = 'default' | 'discret'

export type ModalComponentProps = {
  onClose: () => void
  content?: ReactNode
  title?: string
  opened?: boolean
  width?: number
  positionY?: string
  footer?: ReactNode
  showX?: boolean
  closeOnBlur?: boolean
  variant?: ModalVariant
  layer?: ThemeLayerIndex
}

export const Modal = ({
  title,
  content,
  opened = true,
  width = 350,
  positionY = '0',
  footer,
  showX = true,
  closeOnBlur = true,
  onClose,
  variant = 'default',
  layer = 0,
}: ModalComponentProps) => {
  return (
    <S.Wrapper
      $opened={opened}
      $variant={variant}
      onClick={closeOnBlur ? onClose : undefined}
    >
      <S.Box
        $hasTitle={Boolean(title)}
        $layer={layer}
        $positionY={positionY}
        $width={width}
        onClick={e => e.stopPropagation()}
      >
        {(title || showX) && (
          <S.BoxHeader>
            <S.Title>{title}</S.Title>
            {showX && (
              <Button
                icon={XmarkIcon}
                onClick={onClose}
                size="small"
                variant="layerBased"
              />
            )}
          </S.BoxHeader>
        )}
        <S.BoxContent>{content}</S.BoxContent>
        {footer && <S.BoxFooter>{footer}</S.BoxFooter>}
      </S.Box>
    </S.Wrapper>
  )
}
