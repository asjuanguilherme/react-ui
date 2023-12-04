import { HTMLStyleAttributes, LayerIndex } from 'types'
import * as S from './styles'
import {
  MouseEventHandler,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from 'react'
import _uniqueId from 'lodash/uniqueId'
import { ChevronButton, IconComponent } from 'components'

export type AccordionSize = 'small' | 'medium'

export type AccordionProps = {
  title?: string
  icon?: IconComponent
  children?: ReactNode
  layer?: LayerIndex
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
    <S.Wrapper className={className} style={style} layer={layer} {...props}>
      <ChevronButton
        title={title}
        icon={icon}
        size={size}
        onClick={handleClick}
        id={`${htmlId}-button`}
        aria-expanded={handledOpenedState}
        aria-controls={`${htmlId}-content`}
        fillWidth
        active={handledOpenedState}
        layer={layer}
      />
      <S.Body
        id={`${htmlId}-content`}
        aria-labelledby={`${htmlId}-button`}
        ref={accordionBodyRef}
        $maxHeight={maxHeight}
        $opened={handledOpenedState}
      >
        <S.ContentWrapper $enableContentPadding={enableContentPadding}>
          {children}
        </S.ContentWrapper>
      </S.Body>
    </S.Wrapper>
  )
}
