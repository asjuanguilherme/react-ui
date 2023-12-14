import React from 'react'

import { ModalContextItemProps, useModal } from 'contexts/Modal'

import { ButtonProps, StateModalContent } from 'components'

type StateModalProps = {
  title?: string
  description?: string
  overrideModalProps?: ModalContextItemProps
  closeButtonLabel?: string
}

type ErrorStateModalProps = StateModalProps & {
  showCloseButton?: boolean
}

type SuccessStateModalProps = StateModalProps & {
  showCloseButton?: boolean
}

export const useStateModal = (modalIdentifier: string) => {
  const { update, close, reset } = useModal(modalIdentifier)

  const showLoadingModal = ({
    title,
    description = '',
    overrideModalProps,
  }: StateModalProps) => {
    reset({ opened: true, ...overrideModalProps })
    update({
      closeOnBlur: false,
      showX: false,
      ...overrideModalProps,
      content: (
        <StateModalContent
          description={description}
          title={title}
          type="loading"
        />
      ),
    })
  }

  const showErrorModal = ({
    title,
    description = '',
    overrideModalProps,
    closeButtonLabel,
  }: ErrorStateModalProps) => {
    const buttons = (() => {
      const buttonsList: (ButtonProps & { key: string })[] = []
      const closeButton = {
        key: 'close-btn',
        label: closeButtonLabel,
        onClick: close,
      }
      buttonsList.push(closeButton)
      return buttonsList
    })()

    reset({ opened: true, ...overrideModalProps })
    update({
      ...overrideModalProps,
      content: (
        <StateModalContent
          buttons={buttons}
          description={description}
          title={title}
          type="error"
        />
      ),
    })
  }

  const showSuccessModal = ({
    title,
    description = '',
    showCloseButton = true,
    overrideModalProps,
    closeButtonLabel,
  }: SuccessStateModalProps) => {
    const buttons = (() => {
      const buttonsList: (ButtonProps & { key: string })[] = []
      const closeButton = {
        key: 'close-btn',
        label: closeButtonLabel,
        onClick: close,
      }
      showCloseButton && buttonsList.push(closeButton)
      return buttonsList
    })()

    reset({ opened: true, ...overrideModalProps })
    update({
      opened: true,
      closeOnBlur: false,
      showX: false,
      content: (
        <StateModalContent
          buttons={buttons}
          description={description}
          title={title}
          type="success"
        />
      ),
    })
  }

  const destroy = () => {
    reset()
    update({
      opened: false,
      keepRenderedAfterClosing: false,
    })
  }

  const closeAndResetModal = () => {
    close()
    reset()
  }

  return {
    showErrorModal,
    showLoadingModal,
    showSuccessModal,
    destroy,
    closeAndResetModal,
  }
}
