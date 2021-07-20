import { useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
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

const MyApp = ({ Component, pageProps, router }) => {
  useEffect(() => {
    TagManager.initialize(tagManagerArgs)
  }, [])

  return (
    <ChakraProvider theme={theme} resetCSS>
      <AppContextProvider>
        <ApiContextProvider>
          <AnimatePresence exitBeforeEnter key={router.route}>
            <motion.div
              key={router.route}
              initial='pageInitial'
              animate='pageAnimate'
              variants={{
                pageInitial: {
                  opacity: 0
                },
                pageAnimate: {
                  opacity: 1
                },
                transition: {
                  duration: 2
                }
              }}
            >
              <Box fontFamily='body' overflowX='hidden'>
                <Component {...pageProps} />
              </Box>
            </motion.div>
          </AnimatePresence>
        </ApiContextProvider>
      </AppContextProvider>
    </ChakraProvider>
  )
}

MyApp.propTypes = {
  Component: PropTypes.func.isRequired,
  pageProps: PropTypes.object.isRequired,
  router: PropTypes.object.isRequired
}

export default MyApp
