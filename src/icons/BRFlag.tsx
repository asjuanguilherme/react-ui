import React from 'react'

import { createIconComponent } from './createIconComponent'

export const BRFlagIcon = createIconComponent({
  content: (
    <>
      <circle cx="256" cy="256" fill="#6DA544" r="256" />
      <polygon
        fill="#FFDA44"
        points="256,100.174 467.478,256 256,411.826 44.522,256 "
      />
      <circle cx="256" cy="256" fill="#F0F0F0" r="89.043" />
      <path
        d="M211.478,250.435c-15.484,0-30.427,2.355-44.493,6.725c0.623,48.64,40.227,87.884,89.015,87.884   c30.168,0,56.812-15.017,72.919-37.968C301.362,272.579,258.961,250.435,211.478,250.435z"
        fill="#0052B4"
      />
      <path
        d="M343.393,273.06c1.072-5.524,1.651-11.223,1.651-17.06c0-49.178-39.866-89.043-89.043-89.043   c-36.694,0-68.194,22.201-81.826,53.899c12.05-2.497,24.526-3.812,37.305-3.812C263.197,217.043,309.983,238.541,343.393,273.06z"
        fill="#0052B4"
      />
    </>
  ),
  viewBox: '0 0 512 512',
})
