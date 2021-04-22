import PropTypes from 'prop-types'
import { Box, ChakraProvider } from '@chakra-ui/react'
import { AppContextProvider } from 'context/app'

import { theme } from 'theme/theme'

import '../styles/globals.css'

const MyApp = ({ Component, pageProps }) => {
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
