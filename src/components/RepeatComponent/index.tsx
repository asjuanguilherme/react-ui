import React, { ReactNode } from 'react'

export type RepeatComponentProps = {
  amount?: number
  component: ReactNode
}

export const RepeatComponent = ({
  amount = 1,
  component,
}: RepeatComponentProps) => {
  return (() => {
    const list = []

    for (let i = 0; i < amount; i++) {
      list.push(component)
    }

    return <>{list}</>
  })()
}
