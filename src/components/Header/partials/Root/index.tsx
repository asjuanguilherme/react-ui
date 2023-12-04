import { ReactNode, useEffect, useRef, useState } from 'react'
import * as S from './styles'

export type HeaderRootProps = {
  children?: ReactNode
  transparentStyle?: boolean
  getTotalHeight?: (value: number) => void
  sticky?: boolean
}

export const HeaderRoot = ({
  transparentStyle = false,
  children,
  getTotalHeight,
  sticky = true,
}: HeaderRootProps) => {
  const ref = useRef<HTMLDivElement | null>(null)
  const [elementHeight, setElementHeight] = useState<number>(0)

  useEffect(() => {
    if (!ref.current) return

    setElementHeight(ref.current.getBoundingClientRect().height)

    const handleResizeWindow = () => {
      setElementHeight(ref.current!.getBoundingClientRect().height)
    }

    document.addEventListener('resize', handleResizeWindow)

    return () => document.removeEventListener('resize', handleResizeWindow)
  }, [ref])

  useEffect(() => {
    if (!getTotalHeight) return

    getTotalHeight(elementHeight)
  }, [elementHeight])

  return (
    <S.Wrapper ref={ref} $transparent={transparentStyle} $sticky={sticky}>
      <S.Container>{children}</S.Container>
    </S.Wrapper>
  )
}
