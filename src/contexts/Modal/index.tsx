import React, {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'

import { Modal, ModalComponentProps } from '@/components'

export type ModalContextItemProps = Partial<ModalComponentProps> & {
  identifier: string
  keepRenderedAfterClosing?: boolean
}

export type ModalContextProps = {
  modals: ModalContextItemProps[]
  addModal: (modal: ModalContextItemProps) => void
  closeModal: (identifier: string) => void
  updateModal: (
    identifier: string,
    newProps: Partial<ModalComponentProps>,
  ) => void
}

export type ModalProviderProps = {
  children: ReactNode
}

export const ModalContext = createContext({} as ModalContextProps)

export const useModal = (
  identifier: string,
  modalProps?: Partial<ModalContextItemProps>,
) => {
  const context = useContext(ModalContext)

  if (!context) {
    throw new Error('useModal must be used within a ModalProvider')
  }

  const initialProps = useMemo(
    () => ({
      identifier,
      keepRenderedAfterClosing: true,
      content: <></>,
      opened: false,
      ...modalProps,
    }),
    [],
  )

  useEffect(() => {
    context.addModal(initialProps)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const update = useCallback(
    (newProps: Partial<ModalContextItemProps>) =>
      context.updateModal(identifier, newProps),
    [context, identifier],
  )

  const close = useCallback(() => {
    modalProps?.onClose && modalProps.onClose()
    context.closeModal(identifier)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const open = useCallback(
    () => context.updateModal(identifier, { opened: true }),
    [context, identifier],
  )

  const reset = useCallback(
    (overrideProps?: Partial<ModalContextItemProps>) =>
      context.updateModal(identifier, { ...initialProps, ...overrideProps }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  )

  return {
    update,
    close,
    open,
    reset,
  }
}

export const useModals = () => {
  const context = useContext(ModalContext)

  if (!context) {
    throw new Error('useModals must be used within a ModalProvider')
  }

  return context
}

export const ModalProvider = ({ children }: ModalProviderProps) => {
  const [modals, setModals] = useState<ModalContextItemProps[]>([])

  const addModal = useCallback((modal: ModalContextItemProps) => {
    setModals(prevModals => {
      if (prevModals.some(modals => modals.identifier === modal.identifier))
        return prevModals

      return [
        ...prevModals,
        { ...modal, opened: modal.opened === undefined ? true : modal.opened },
      ]
    })
  }, [])

  const closeModal = useCallback((identifier: string) => {
    setModals(state =>
      state.map(modal => {
        if (modal.identifier === identifier) return { ...modal, opened: false }

        return modal
      }),
    )
  }, [])

  const updateModal = useCallback(
    (identifier: string, newProps: Partial<ModalComponentProps>) => {
      setModals(state =>
        state.map(modal => {
          if (modal.identifier === identifier)
            return {
              ...modal,
              ...newProps,
              identifier,
            }

          return modal
        }),
      )
    },
    [],
  )

  const removeModalFromList = useCallback((identifier: string) => {
    setModals(state => state.filter(modal => modal.identifier !== identifier))
  }, [])

  useEffect(() => {
    const closedModal = modals.find(
      modal => !modal.opened && !modal.keepRenderedAfterClosing,
    )

    if (closedModal) {
      const timeoutBeforeRemove = setTimeout(
        () => removeModalFromList(closedModal.identifier),
        500,
      )

      return () => clearTimeout(timeoutBeforeRemove)
    }
  }, [modals, removeModalFromList])

  return (
    <ModalContext.Provider
      value={{
        modals,
        addModal,
        closeModal,
        updateModal,
      }}
    >
      {modals.map(modal => (
        <Modal
          key={modal.identifier}
          {...modal}
          onClose={() => {
            modal.onClose && modal.onClose()
            closeModal(modal.identifier)
          }}
        />
      ))}
      {children}
    </ModalContext.Provider>
  )
}
