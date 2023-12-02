import { createIconComponent } from './createIconComponent'
import React from 'react'

export const QuestionMarkIcon = createIconComponent({
  content: (
    <>
      <path d="M144 376C113.072 376 88 401.072 88 432S113.072 488 144 488S200 462.928 200 432S174.928 376 144 376ZM201.344 32H112C50.25 32 0 82.25 0 144C0 170.516 21.5 192 48 192S96 170.516 96 144C96 135.172 103.188 128 112 128H201.344C213.844 128 224 138.172 224 150.672C224 158.844 219.562 166.422 212.438 170.438L120.469 222.172C105.344 230.672 96 246.656 96 264V288C96 314.516 117.5 336 144 336C169.094 336 189.719 316.734 191.812 292.172L259.5 254.094C296.812 233.109 320 193.484 320 150.672C320 85.234 266.781 32 201.344 32Z" />
    </>
  ),
  viewBox: '0 0 320 512',
})
