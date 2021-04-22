import React from 'react'
import { createIcon } from '@chakra-ui/icon'

export const OpenMenuIcon = createIcon({
  displayName: 'OpenMenuIcon',
  viewBox: '0 0 28 20',
  path: (
    <>
      <path
        d='M27.3333 18.0073C27.3333 18.7407 26.7387 19.334 26.0067 19.334H15.3267C14.9748 19.334 14.6374 19.1942 14.3886 18.9454C14.1398 18.6966 14 18.3592 14 18.0073C14 17.6555 14.1398 17.318 14.3886 17.0692C14.6374 16.8204 14.9748 16.6807 15.3267 16.6807H26.0067C26.74 16.6807 27.3333 17.274 27.3333 18.0073Z'
        fill='currentColor'
      />
      <path
        d='M27.3346 10.0005C27.3346 10.7338 26.74 11.3272 26.008 11.3272H1.99464C1.64278 11.3272 1.30534 11.1874 1.05654 10.9386C0.807742 10.6898 0.667969 10.3523 0.667969 10.0005C0.667969 9.64864 0.807742 9.3112 1.05654 9.0624C1.30534 8.8136 1.64278 8.67383 1.99464 8.67383H26.008C26.7413 8.67383 27.3346 9.26849 27.3346 10.0005Z'
        fill='currentColor'
      />
      <path
        d='M26.008 3.32033C26.3598 3.32033 26.6973 3.18055 26.9461 2.93175C27.1949 2.68296 27.3346 2.34551 27.3346 1.99366C27.3346 1.6418 27.1949 1.30436 26.9461 1.05556C26.6973 0.806765 26.3598 0.666992 26.008 0.666992H9.99464C9.82041 0.666992 9.6479 0.701307 9.48694 0.767979C9.32598 0.83465 9.17973 0.932371 9.05654 1.05556C8.93335 1.17876 8.83563 1.32501 8.76896 1.48597C8.70228 1.64692 8.66797 1.81944 8.66797 1.99366C8.66797 2.16788 8.70228 2.34039 8.76896 2.50135C8.83563 2.66231 8.93335 2.80856 9.05654 2.93175C9.17973 3.05495 9.32598 3.15267 9.48694 3.21934C9.6479 3.28601 9.82041 3.32033 9.99464 3.32033H26.008Z'
        fill='currentColor'
      />
    </>
  )
})

export const CloseMenuIcon = createIcon({
  displayName: 'CloseMenuIcon',
  viewBox: '0 0 24 24',
  path: (
    <path
      stroke='currentColor'
      fill='currentColor'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth='2'
      d='M6 18L18 6M6 6l12 12'
    />
  )
})

export const ScrollDown = createIcon({
  displayName: 'ScrollDown',
  viewBox: '0 0 21 46',
  path: (
    <>
      <mask id='path-1-inside-1' fill='white'>
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M21 10.5C21 10.6676 20.9961 10.8343 20.9883 11H21V35.5V36H20.9883C20.7273 41.5668 16.1314 46 10.5 46C4.86862 46 0.272672 41.5668 0.0116951 36H0V35.5V11H0.0116951C0.00392737 10.8343 0 10.6676 0 10.5C0 4.70101 4.70101 0 10.5 0C16.299 0 21 4.70101 21 10.5Z'
        />
      </mask>
      <path
        d='M20.9883 11L19.9894 10.9532L19.9403 12H20.9883V11ZM21 11H22V10H21V11ZM21 36V37H22V36H21ZM20.9883 36V35H20.0341L19.9894 35.9532L20.9883 36ZM0.0116951 36L1.0106 35.9532L0.965913 35H0.0116951V36ZM0 36H-1V37H0V36ZM0 11V10H-1V11H0ZM0.0116951 11V12H1.05967L1.0106 10.9532L0.0116951 11ZM21.9872 11.0468C21.9957 10.8655 22 10.6832 22 10.5H20C20 10.652 19.9964 10.8031 19.9894 10.9532L21.9872 11.0468ZM21 10H20.9883V12H21V10ZM22 35.5V11H20V35.5H22ZM22 36V35.5H20V36H22ZM20.9883 37H21V35H20.9883V37ZM19.9894 35.9532C19.7533 40.989 15.5948 45 10.5 45V47C16.668 47 21.7013 42.1446 21.9872 36.0468L19.9894 35.9532ZM10.5 45C5.40522 45 1.24668 40.989 1.0106 35.9532L-0.987208 36.0468C-0.701339 42.1446 4.33202 47 10.5 47V45ZM0 37H0.0116951V35H0V37ZM-1 35.5V36H1V35.5H-1ZM-1 11V35.5H1V11H-1ZM0.0116951 10H0V12H0.0116951V10ZM-1 10.5C-1 10.6832 -0.995706 10.8655 -0.987208 11.0468L1.0106 10.9532C1.00356 10.8031 1 10.652 1 10.5H-1ZM10.5 -1C4.14873 -1 -1 4.14873 -1 10.5H1C1 5.25329 5.25329 1 10.5 1V-1ZM22 10.5C22 4.14873 16.8513 -1 10.5 -1V1C15.7467 1 20 5.25329 20 10.5H22Z'
        fill='white'
        fillOpacity='0.5'
        mask='url(#path-1-inside-1)'
      />
      <path
        d='M10.6464 37.3536C10.8417 37.5488 11.1583 37.5488 11.3536 37.3536L14.5355 34.1716C14.7308 33.9763 14.7308 33.6597 14.5355 33.4645C14.3403 33.2692 14.0237 33.2692 13.8284 33.4645L11 36.2929L8.17157 33.4645C7.97631 33.2692 7.65973 33.2692 7.46447 33.4645C7.2692 33.6597 7.2692 33.9763 7.46447 34.1716L10.6464 37.3536ZM10.5 10L10.5 37H11.5L11.5 10H10.5Z'
        fill='#FCFCFC'
      />
    </>
  )
})
