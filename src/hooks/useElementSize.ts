import { useRouter } from 'next/router'
import { MutableRefObject, useEffect, useState } from 'react'

export type UseElementSizeProps = {
  elementRef: MutableRefObject<HTMLElement | null>
  initialSize?: {
    height?: number
    width?: number
  }
}

export const useElementSize = ({
  elementRef,
  initialSize,
}: UseElementSizeProps) => {
  const router = useRouter()
  const [height, setHeight] = useState<number>(initialSize?.height || 0)
  const [width, setWidth] = useState<number>(initialSize?.width || 0)

  useEffect(() => {
    if (!elementRef.current) return

    const resizeObserver = new ResizeObserver(entries => {
      setHeight(entries[0].borderBoxSize[0].blockSize)
      setWidth(entries[0].contentRect.width)
    })

    resizeObserver.observe(elementRef.current)

    return () => resizeObserver.disconnect()
  }, [elementRef, router])

  return { height, width }
}
