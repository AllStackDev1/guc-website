import React from 'react'
import { Box, Text, Image, Container } from '@chakra-ui/react'

export default function Athletics() {
  return (
    <Container
      d='flex'
      maxW='7xl'
      justifyContent='space-between'
      py={{ base: 8, lg: 14 }}
    >
      <Box w={{ lg: '40%' }} fontSize={{ lg: 'lg' }}>
        <Image w='full' h='full' src='/images/tennis.png' alt='calendar img' />
      </Box>
      <Box w={{ lg: '55%' }} pt={{ lg: 32 }}>
        <Text
          mb={{ lg: 8 }}
          fontFamily='heading'
          fontSize={{ lg: '42px' }}
          lineHeight={{ lg: '60px' }}
        >
          ATHLETICS
        </Text>
        <Text lineHeight={{ lg: '32px' }}>
          Government College Umuahia believes that athletics can help improve
          physical and emotional wellness. We develop and implement strong
          values with athletic activities to demonstrate the importance of
          movement and physical fitness.
        </Text>
      </Box>
    </Container>
  )
}
