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

export const ArrowBtnRightIcon = createIcon({
  displayName: 'ArrowBtnRightIcon',
  viewBox: '0 0 48 48',
  path: (
    <>
      <circle cx='24' cy='24' r='24' fill='#C4C4C4' fillOpacity='0.5' />
      <circle
        cx='24'
        cy='24'
        r='23'
        fill='transparent'
        stroke='white'
        strokeWidth='2'
        strokeOpacity='0.5'
      />
      <path
        d='M31.7071 24.7071C32.0976 24.3166 32.0976 23.6834 31.7071 23.2929L25.3431 16.9289C24.9526 16.5384 24.3195 16.5384 23.9289 16.9289C23.5384 17.3195 23.5384 17.9526 23.9289 18.3431L29.5858 24L23.9289 29.6569C23.5384 30.0474 23.5384 30.6805 23.9289 31.0711C24.3195 31.4616 24.9526 31.4616 25.3431 31.0711L31.7071 24.7071ZM17 25H31V23H17V25Z'
        fill='#FCFCFC'
      />
    </>
  )
})

export const QuoteIcon = createIcon({
  displayName: 'QuoteIcon',
  viewBox: '0 0 35 26',
  path: (
    <path
      d='M3.59313 23.4768C1.66188 21.4256 0.625 19.125 0.625 15.3956C0.625 8.83309 5.23187 2.95122 11.9312 0.0430908L13.6056 2.62684C7.3525 6.00934 6.13 10.3987 5.6425 13.1662C6.64938 12.645 7.9675 12.4631 9.25937 12.5831C12.6419 12.8962 15.3081 15.6731 15.3081 19.125C15.3081 20.8654 14.6167 22.5346 13.386 23.7654C12.1553 24.9961 10.4861 25.6875 8.74562 25.6875C6.73375 25.6875 4.81 24.7687 3.59313 23.4768ZM22.3431 23.4768C20.4119 21.4256 19.375 19.125 19.375 15.3956C19.375 8.83309 23.9819 2.95122 30.6813 0.0430908L32.3556 2.62684C26.1025 6.00934 24.88 10.3987 24.3925 13.1662C25.3994 12.645 26.7175 12.4631 28.0094 12.5831C31.3919 12.8962 34.0581 15.6731 34.0581 19.125C34.0581 20.8654 33.3667 22.5346 32.136 23.7654C30.9053 24.9961 29.2361 25.6875 27.4956 25.6875C25.4837 25.6875 23.56 24.7687 22.3431 23.4768Z'
      fill='#E0E0E0'
    />
  )
})

export const FacebookIcon = createIcon({
  displayName: 'FacebookIcon',
  viewBox: '0 0 34 34',
  path: (
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M34 17.1036C34.002 8.00668 26.9229 0.500725 17.8917 0.0238788C8.86046 -0.452968 1.03907 6.26625 0.0942185 15.3134C-0.850633 24.3605 5.41186 32.5679 14.3444 33.9893V22.0453H10.0287V17.1036H14.3444V13.3353C14.1563 11.5544 14.7646 9.78152 16.0048 8.49651C17.2449 7.2115 18.9886 6.54726 20.7638 6.68358C22.0388 6.70042 23.3109 6.81187 24.5696 7.01702V11.2299H22.4277C21.6886 11.1327 20.9456 11.3786 20.4083 11.8983C19.871 12.4179 19.5977 13.155 19.6653 13.9017V17.1078H24.3805L23.6261 22.0496H19.6567V34C27.9197 32.6852 34.0034 25.5185 34 17.1036Z'
      fill='#ADADAD'
    />
  )
})

export const YouTubeIcon = createIcon({
  displayName: 'YouTubeIcon',
  viewBox: '0 0 43 32',
  path: (
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M42.1333 7.46667C41.6 4 40 1.6 36.2667 1.06667C30.4 0 21.3333 0 21.3333 0C21.3333 0 12.2667 0 6.4 1.06667C2.66667 1.6 0.8 4 0.533333 7.46667C0 10.9333 0 16 0 16C0 16 0 21.0667 0.533333 24.5333C1.06667 28 2.66667 30.4 6.4 30.9333C12.2667 32 21.3333 32 21.3333 32C21.3333 32 30.4 32 36.2667 30.9333C40 30.1333 41.6 28 42.1333 24.5333C42.6667 21.0667 42.6667 16 42.6667 16C42.6667 16 42.6667 10.9333 42.1333 7.46667ZM15.9999 24V8L29.3333 16L15.9999 24Z'
      fill='#ADADAD'
    />
  )
})

export const InstaIcon = createIcon({
  displayName: 'InstaIcon',
  viewBox: '0 0 35 35',
  path: (
    <>
      <circle cx='26.5673' cy='8.5137' r='2.1' fill='#ADADAD' />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M17.5 26.25C12.6744 26.25 8.75 22.3256 8.75 17.5C8.75 12.6744 12.6744 8.75 17.5 8.75C22.3256 8.75 26.25 12.6744 26.25 17.5C26.25 22.3256 22.3256 26.25 17.5 26.25ZM17.5 13.125C15.0872 13.125 13.125 15.0872 13.125 17.5C13.125 19.9128 15.0872 21.875 17.5 21.875C19.9128 21.875 21.875 19.9128 21.875 17.5C21.875 15.0872 19.9128 13.125 17.5 13.125Z'
        fill='#ADADAD'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M26.25 35H8.75C4.2525 35 0 30.7475 0 26.25V8.75C0 4.2525 4.2525 0 8.75 0H26.25C30.7475 0 35 4.2525 35 8.75V26.25C35 30.7475 30.7475 35 26.25 35ZM8.75 4.375C6.70469 4.375 4.375 6.70469 4.375 8.75V26.25C4.375 28.3347 6.66531 30.625 8.75 30.625H26.25C28.2953 30.625 30.625 28.2953 30.625 26.25V8.75C30.625 6.70469 28.2953 4.375 26.25 4.375H8.75Z'
        fill='#ADADAD'
      />
    </>
  )
})
