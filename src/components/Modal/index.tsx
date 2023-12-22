import React, { ReactNode } from 'react'

import { ThemeLayerIndex } from '~/lib/theming'

import { IconButton } from '~/components'
import { XmarkIcon } from '~/icons'

import * as S from './styles'

export type ModalVariant = 'default' | 'discret'

export type ModalContentCallbackProps = {
  onClose: VoidFunction
}

export type ModalComponentProps = {
  onClose: () => void
  content?: ReactNode
  title?: string
  opened?: boolean
  width?: number
  positionY?: string
  showX?: boolean
  closeOnBlur?: boolean
  variant?: ModalVariant
  layer?: ThemeLayerIndex
  footer?: ((props: ModalContentCallbackProps) => ReactNode) | ReactNode
  header?: ((props: ModalContentCallbackProps) => ReactNode) | ReactNode
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
  header,
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
        {header && (
          <S.BoxHeader>
            {typeof header === 'function' ? header({ onClose }) : header}
          </S.BoxHeader>
        )}
        {!header && (title || showX) && (
          <S.BoxHeader>
            <S.Title>{title}</S.Title>
            {showX && (
              <IconButton
                icon={XmarkIcon}
                onClick={onClose}
                variant="layerBased"
              />
            )}
          </S.BoxHeader>
        )}
        <S.BoxContent>{content}</S.BoxContent>
        {footer && (
          <S.BoxFooter>
            {typeof footer === 'function' ? footer({ onClose }) : footer}
          </S.BoxFooter>
        )}
      </S.Box>
    </S.Wrapper>
  )
}
