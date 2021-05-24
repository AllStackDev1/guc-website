import { useEffect } from 'react'
import PropTypes from 'prop-types'
import TagManager from 'react-gtm-module'
import { Box, ChakraProvider } from '@chakra-ui/react'
import { AppContextProvider } from 'context/app'
import { theme } from 'theme/theme'

import '../styles/globals.css'

const tagManagerArgs = {
  gtmId: process.env.NEXT_PUBLIC_GTM_TRACKING_ID
}

const MyApp = ({ Component, pageProps }) => {
  useEffect(() => {
    TagManager.initialize(tagManagerArgs)
  }, [])

  return (
    <ChakraProvider theme={theme} resetCSS>
      <AppContextProvider>
        <Box fontFamily='body' overflowX='hidden'>
          <Component {...pageProps} />
        </Box>
      </AppContextProvider>
    </ChakraProvider>
  )
}

MyApp.propTypes = {
  Component: PropTypes.func.isRequired,
  pageProps: PropTypes.object.isRequired
}

export default MyApp
