import React, {
  Dispatch,
  MutableRefObject,
  ReactNode,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from 'react'
import * as S from './styles'
import _uniqueId from 'lodash/uniqueId'

export type PopoverRootChildrenCallbackProps = {
  popoverId: string
  isActive: boolean
  setIsActive: Dispatch<SetStateAction<boolean>>
  triggerRef: MutableRefObject<HTMLElement | any>
}

export type PopoverRootProps = {
  children?: (props: PopoverRootChildrenCallbackProps) => ReactNode
  triggerOn?: 'hover' | 'click'
}

export const PopoverRoot = ({
  children,
  triggerOn = 'hover',
}: PopoverRootProps) => {
  const [isActive, setIsActive] = useState(false)
  const [popoverId] = useState(_uniqueId('popoverId-'))
  const triggerRef = useRef<HTMLElement | null>(null)
  const wrapperRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (triggerOn === 'hover') {
      if (!triggerRef.current) return

      const bodyEl = document.querySelector('body')

      const mouseoverHandler: EventListener = e => {
        setIsActive(true)
      }

      const mouseoutHandler: EventListener = e => {
        if (!isActive) return
        if (!wrapperRef.current) return
        if (!(e.target instanceof HTMLElement)) return
        if (wrapperRef.current.contains(e.target)) return

        setIsActive(false)
      }

      triggerRef.current.addEventListener('mouseover', mouseoverHandler)
      bodyEl?.addEventListener('mouseover', mouseoutHandler)

      return () => {
        triggerRef.current?.removeEventListener('mouseover', mouseoverHandler)
        bodyEl?.removeEventListener('mouseover', mouseoutHandler)
      }
    }
  }, [triggerRef.current, setIsActive])

  useEffect(() => {
    if (triggerOn === 'click') {
      const bodyEl = document.querySelector('body')

      if (!triggerRef.current) return
      if (!bodyEl) return

      const clickOnTriggerElementHandler = () => {
        setIsActive(state => !state)
      }

      const clickOutHandler: EventListener = e => {
        if (!wrapperRef.current) return
        if (!(e.target instanceof HTMLElement)) return
        if (wrapperRef.current.contains(e.target)) return

        setIsActive(false)
      }

      triggerRef.current.addEventListener('click', clickOnTriggerElementHandler)
      bodyEl.addEventListener('click', clickOutHandler)

      return () => {
        triggerRef.current?.removeEventListener(
          'click',
          clickOnTriggerElementHandler,
        )
        bodyEl.removeEventListener('click', clickOutHandler)
      }
    }
  }, [triggerRef, setIsActive])

  return (
    <S.Wrapper ref={wrapperRef}>
      {children && children({ popoverId, isActive, setIsActive, triggerRef })}
    </S.Wrapper>
  )
}
