import React, {
  MouseEventHandler,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from 'react'

import _uniqueId from 'lodash/uniqueId'
import { HTMLStyleAttributes } from '@/types'

import { ThemeLayerIndex } from '@/lib/theming'

import { ChevronButton } from '@/components'
import { IconComponent } from '@/icons'

import * as S from './styles'

export type AccordionSize = 'small' | 'medium'

export type AccordionProps = {
  title?: string
  icon?: IconComponent
  children?: ReactNode
  layer?: ThemeLayerIndex
  startsOpened?: boolean
  opened?: boolean
  onClick?: MouseEventHandler
  enableContentPadding?: boolean
  size?: AccordionSize
} & HTMLStyleAttributes

export const Accordion = ({
  title,
  children,
  layer = 1,
  startsOpened = false,
  opened: controlledOpenedState,
  onClick,
  icon,
  className,
  style,
  enableContentPadding = false,
  size = 'medium',
  ...props
}: AccordionProps) => {
  const [htmlId] = useState(_uniqueId('accordion-'))
  const [isOpened, setIsOpened] = useState(startsOpened)
  const accordionBodyRef = useRef<HTMLDivElement | null>(null)
  const [maxHeight, setMaxHeight] = useState<number>(() => {
    if (!accordionBodyRef.current) return 0

    return accordionBodyRef.current.scrollHeight
  })

  useEffect(() => {
    setMaxHeight(accordionBodyRef.current?.scrollHeight || 0)

    const resizeHandler: EventListener = () => {
      if (!accordionBodyRef.current) return

      setMaxHeight(accordionBodyRef.current.scrollHeight)
    }

    window.addEventListener('resize', resizeHandler)

    return () => window.removeEventListener('resize', resizeHandler)
  }, [accordionBodyRef.current])

  const handledOpenedState =
    typeof controlledOpenedState === 'undefined'
      ? isOpened
      : controlledOpenedState

  const handleClick: MouseEventHandler = e => {
    setIsOpened(state => !state)
    onClick && onClick(e)
  }

  return (
    <S.Wrapper className={className} layer={layer} style={style} {...props}>
      <ChevronButton
        active={handledOpenedState}
        aria-controls={`${htmlId}-content`}
        aria-expanded={handledOpenedState}
        fillWidth
        icon={icon}
        id={`${htmlId}-button`}
        layer={layer}
        onClick={handleClick}
        size={size}
        title={title}
      />
      <S.Body
        $maxHeight={maxHeight}
        $opened={handledOpenedState}
        aria-labelledby={`${htmlId}-button`}
        id={`${htmlId}-content`}
        ref={accordionBodyRef}
      >
        <S.ContentWrapper $enableContentPadding={enableContentPadding}>
          {children}
        </S.ContentWrapper>
      </S.Body>
    </S.Wrapper>
  )
}
