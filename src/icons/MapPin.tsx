import React from 'react'

import { createIconComponent } from './createIconComponent'

export const MapPinIcon = createIconComponent({
  content: <>
    <path d="M128 316.941V460.223C128 465.189 129.156 470.09 131.379 474.533L145.689 503.154C151.586 514.947 168.414 514.947 174.311 503.154L188.621 474.533C190.844 470.09 192 465.189 192 460.223V316.941C181.607 318.861 170.941 320 160 320S138.393 318.861 128 316.941ZM160 0C80.471 0 16 64.471 16 144S80.471 288 160 288S304 223.529 304 144S239.529 0 160 0ZM160 80C124.719 80 96 108.719 96 144C96 152.844 88.844 160 80 160S64 152.844 64 144C64 91.062 107.062 48 160 48C168.844 48 176 55.156 176 64S168.844 80 160 80Z"/>
  </>,
  viewBox: '0 0 320 512',
})

