import React from 'react'
import PropTypes from 'prop-types'
import { Box, Heading } from '@chakra-ui/react'

export default function HeroDetails({ title, url }) {
  return (
    <Box bgSize='cover' h={{ xl: 120, '2xl': 125 }} bgImg={`url('${url}')`}>
      <Box
        pos='relative'
        bgColor='rgba(200, 43, 56, 0.37)'
        bgSize='cover'
        h='full'
      >
        <Box
          pos='absolute'
          left={{ xl: 28, '2xl': 44 }}
          bottom={{ xl: 24 }}
          w={{ xl: 125 }}
        >
          <Heading
            lineHeight='61px'
            color='white'
            fontWeight='normal'
            fontSize={{ base: '1.875rem', lg: '54px' }}
          >
            {title}
          </Heading>
        </Box>
      </Box>
    </Box>
  )
}

HeroDetails.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
}
