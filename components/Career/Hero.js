import React from 'react'
import { Box, Text, Container, Heading } from '@chakra-ui/react'

export default function Hero() {
  return (
    <Container
      d='flex'
      maxW='7xl'
      flexDir='column'
      textAlign='center'
      alignItems='center'
      py={{ base: 8, lg: 24 }}
    >
      <Box mb={{ base: 4, lg: 14 }} w={{ lg: 125 }}>
        <Heading mb={{ lg: 6 }} fontSize={{ base: '1.5rem', lg: '60px' }}>
          Career & Opportunities
        </Heading>
        <Text
          color='#6A7986'
          lineHeight={{ lg: '32px' }}
          fontSize={{ base: 'sm', lg: '21px' }}
        >
          We’re on a mission to build great minds, boys that would contribute to
          building a greater future for everyone.
        </Text>
      </Box>
    </Container>
  )
}
