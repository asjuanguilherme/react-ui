import { useEffect, useState } from 'react'

type ScreenSize = {
  height: number
  width: number
}

export type UseScreenSizeProps = () => ScreenSize

export const useScreenSize: UseScreenSizeProps = () => {
  const [currentScreen, setCurrentScreen] = useState<ScreenSize>({
    height: 720,
    width: 1250,
  })

  useEffect(() => {
    setCurrentScreen({
      width: window.innerWidth,
      height: window.innerHeight,
    })

    const handler = () => {
      const size = {
        width: window.innerWidth,
        height: window.innerHeight,
      }

      setCurrentScreen(size)
    }

    window.addEventListener('resize', handler)

    return () => window.removeEventListener('resize', handler)
  }, [])

  return currentScreen
}
