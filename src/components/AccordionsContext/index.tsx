import { ReactNode, useCallback, useState } from 'react'

import _uniqueId from 'lodash/uniqueId'

export type AccordionsContextCallbackProps = {
  openAccordion: (accordionIndex: number) => void
  handleAccordionClick: (accordionIndex: number) => void
  isAccordionOpen: (accordionIndex: number) => boolean
  accordionContextID: string
}

export type AccordionsContextProps = {
  children: (props: AccordionsContextCallbackProps) => ReactNode
}

export const AccordionsContext = ({
  children: callback,
}: AccordionsContextProps) => {
  const [openedIndex, setOpenedIndex] = useState<number | undefined>(undefined)
  const [accordionContextID] = useState(_uniqueId('accordion-context-id-'))

  const isAccordionOpen = useCallback(
    (accordionIndex: number) => accordionIndex === openedIndex,
    [openedIndex],
  )

  const openAccordion = useCallback((accordionIndex: number) => {
    setOpenedIndex(accordionIndex)
  }, [])

  const handleAccordionClick = useCallback(
    (accordionIndex: number) => {
      if (accordionIndex === openedIndex) return setOpenedIndex(undefined)

      setOpenedIndex(accordionIndex)
    },
    [openedIndex],
  )

  return callback({
    isAccordionOpen,
    openAccordion,
    accordionContextID,
    handleAccordionClick,
  })
}
