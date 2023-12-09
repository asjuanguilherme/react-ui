import React, { CSSProperties } from 'react'

import * as S from './styles'

export type PaginationProps = {
  pagesCount?: number
  className?: string
  style?: CSSProperties
  currentPage?: number
  onPageChange?: (newPage: number) => void
}

export const Pagination = ({
  currentPage,
  pagesCount,
  className,
  style,
  onPageChange,
}: PaginationProps) => {
  if (!pagesCount || pagesCount <= 1) return <></>

  const pages = (() => {
    const pagesArray: number[] = []

    for (let i = 1; i <= pagesCount; i++) {
      pagesArray.push(i)
    }

    return pagesArray
  })()

  return (
    <S.Wrapper className={className} style={style}>
      {pages.map(pageNumber => (
        <S.Button
          key={pageNumber}
          $active={pageNumber === currentPage}
          onClick={() => onPageChange && onPageChange(pageNumber)}
        >
          {pageNumber}
        </S.Button>
      ))}
    </S.Wrapper>
  )
}
