import React from 'react'
import { Box, Text, Container } from '@chakra-ui/react'

import ContactUsForm from './Form'

export default function Hero() {
  return (
    <Container
      d='flex'
      maxW='7xl'
      py={{ xl: 20 }}
      pos='relative'
      justifyContent='space-between'
    >
      <Box w={{ xl: '55%' }}>
        <Text
          fontFamily='heading'
          color='gcu.100'
          fontSize={{ lg: '42px' }}
          lineHeight={{ lg: '59px' }}
        >
          Contact Us
        </Text>
        <Text
          color='#6A7986'
          fontSize={{ base: 'sm', lg: '21px' }}
          lineHeight={{ lg: '32px' }}
        >
          We are an industry-leading company that values honesty, integrity, and
          efficiency. Building quality products and caring.
        </Text>
      </Box>
      <ContactUsForm />
    </Container>
  )
}
