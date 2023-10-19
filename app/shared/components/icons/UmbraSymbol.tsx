import React from 'react'

export default function UmbraSymbol({ className }: { className?: string }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='28'
      height='28'
      viewBox='0 0 77 75'
      fill='none'
      className={`umbra-symbol ${className}`}
    >
      <mask
        id='mask0_704_113'
        maskUnits='userSpaceOnUse'
        x='29'
        y='0'
        width='48'
        height='56'
      >
        <path d='M29 0.666687H77V55.3334H29V0.666687Z' fill='white' />
      </mask>
      <g mask='url(#mask0_704_113)'>
        <mask
          id='mask1_704_113'
          maskUnits='userSpaceOnUse'
          x='23'
          y='-5'
          width='62'
          height='62'
        >
          <path
            d='M23.9324 48.7344L31.2865 -4.00519L84.0261 3.34377L76.672 56.0886L23.9324 48.7344Z'
            fill='white'
          />
        </mask>
        <g mask='url(#mask1_704_113)'>
          <mask
            id='mask2_704_113'
            maskUnits='userSpaceOnUse'
            x='23'
            y='-5'
            width='62'
            height='62'
          >
            <path
              d='M23.9324 48.7344L31.2865 -4.00519L84.0261 3.34377L76.672 56.0886L23.9324 48.7344Z'
              fill='white'
            />
          </mask>
          <g mask='url(#mask2_704_113)'>
            <path
              d='M29.7188 7C55.8177 8.20834 71.8333 27.7344 65.6563 54.5885C78.1875 44.5156 80.5469 26.2604 70.7865 13.3438C61.0365 0.427086 42.8333 -2.29687 29.7188 7Z'
              fill='#CED9D9'
            />
          </g>
        </g>
      </g>
      <mask
        id='mask3_704_113'
        maskUnits='userSpaceOnUse'
        x='0'
        y='10'
        width='65'
        height='65'
      >
        <path d='M0 10.6719H64.1458V74.8177H0V10.6719Z' fill='white' />
      </mask>
      <g mask='url(#mask3_704_113)'>
        <mask
          id='mask4_704_113'
          maskUnits='userSpaceOnUse'
          x='0'
          y='10'
          width='65'
          height='65'
        >
          <path
            d='M32.0729 10.6719C14.3594 10.6719 0 25.0313 0 42.7448C0 60.4583 14.3594 74.8177 32.0729 74.8177C49.7865 74.8177 64.1458 60.4583 64.1458 42.7448C64.1458 25.0313 49.7865 10.6719 32.0729 10.6719Z'
            fill='white'
          />
        </mask>
        <g mask='url(#mask4_704_113)'>
          <path d='M0 10.6719H64.1458V74.8177H0V10.6719Z' fill='#737373' />
        </g>
      </g>
    </svg>
  )
}
