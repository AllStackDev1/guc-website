import { useEffect } from 'react'
import PropTypes from 'prop-types'
import TagManager from 'react-gtm-module'
import { Box, ChakraProvider } from '@chakra-ui/react'
import { AppContextProvider } from 'context/app'
import { ApiContextProvider } from 'context/api'
import { theme } from 'theme/theme'

import '../styles/globals.css'

const tagManagerArgs = {
  gtmId: 'GTM-NGVKN2K'
}

const MyApp = ({ Component, pageProps }) => {
  useEffect(() => {
    TagManager.initialize(tagManagerArgs)
  }, [])

  return (
    <ChakraProvider theme={theme} resetCSS>
      <AppContextProvider>
        <ApiContextProvider>
          <Box fontFamily='body' overflowX='hidden'>
            <Component {...pageProps} />
          </Box>
        </ApiContextProvider>
      </AppContextProvider>
    </ChakraProvider>
  )
}

MyApp.propTypes = {
  Component: PropTypes.func.isRequired,
  pageProps: PropTypes.object.isRequired
}

export default MyApp
