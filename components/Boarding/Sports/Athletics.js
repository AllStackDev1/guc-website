import React from 'react'
import { Box, Text, Image, Container } from '@chakra-ui/react'

export default function Athletics() {
  return (
    <Container
      d='flex'
      maxW='7xl'
      justifyContent='space-between'
      flexDir={{ base: 'column', lg: 'row' }}
      py={{ base: 8, lg: 14 }}
    >
      <Box mb={{ base: 5, lg: 0 }} w={{ lg: '40%' }}>
        <Image
          w='full'
          h='full'
          alt='calendar img'
          src={require('/public/images/tennis.png')}
        />
      </Box>
      <Box w={{ lg: '55%' }} pt={{ lg: 32 }}>
        <Text
          mb={{ lg: 8 }}
          fontFamily='heading'
          fontSize={{ base: '21px', lg: '42px' }}
          lineHeight={{ lg: '60px' }}
        >
          ATHLETICS
        </Text>
        <Text
          textAlign={{ base: 'justify', lg: 'inherit' }}
          fontSize={{ base: 'sm', lg: 'lg' }}
          lineHeight={{ base: '25px', lg: '32px' }}
        >
          Government College Umuahia believes that athletics can help improve
          physical and emotional wellness. We develop and implement strong
          values with athletic activities to demonstrate the importance of
          movement and physical fitness.
        </Text>
      </Box>
    </Container>
  )
}
