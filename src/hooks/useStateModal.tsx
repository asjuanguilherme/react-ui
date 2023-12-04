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
          title={title}
          description={description}
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
      const buttonsList: ButtonProps[] = []
      const closeButton = {
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
          title={title}
          description={description}
          type="error"
          buttons={buttons}
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
      const buttonsList: ButtonProps[] = []
      const closeButton = {
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
          title={title}
          description={description}
          type="success"
          buttons={buttons}
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

  return { showErrorModal, showLoadingModal, showSuccessModal, destroy }
}
