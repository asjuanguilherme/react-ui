import React from 'react'

import { createIconComponent } from './createIconComponent'

export const FilePlusIcon = createIconComponent({
  content: <>
    <path d="M256 0V128H384L256 0ZM224 128V0H48C21.492 0 0 21.492 0 48V464C0 490.508 21.492 512 48 512H336C362.508 512 384 490.508 384 464V160H256C238.328 160 224 145.672 224 128ZM296 336C296 349.258 285.262 359.998 272 359.998H216V416.002C216 429.262 205.258 440 192 440C178.734 440 168 429.258 168 416.002V359.998H112C98.73 359.998 88 349.256 88 336C88 322.742 98.738 312.002 112 312.002H168V255.998C168 242.738 178.742 232 192 232S216 242.738 216 255.998V312.002H272C285.262 312.002 296 322.742 296 336Z"/>
  </>,
  viewBox: '0 0 384 512',
})

