import React, { ReactNode } from 'react'

import * as S from './styles'

import { Button } from 'components'
import { XmarkIcon } from 'icons'
import { ThemeLayerIndex } from 'lib/theming'

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
      onClick={closeOnBlur ? onClose : undefined}
      $opened={opened}
      $variant={variant}
    >
      <S.Box
        onClick={e => e.stopPropagation()}
        $positionY={positionY}
        $hasTitle={Boolean(title)}
        $layer={layer}
        $width={width}
      >
        {(title || showX) && (
          <S.BoxHeader>
            <S.Title>{title}</S.Title>
            {showX && (
              <Button
                icon={XmarkIcon}
                variant="layerBased"
                onClick={onClose}
                size="small"
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
