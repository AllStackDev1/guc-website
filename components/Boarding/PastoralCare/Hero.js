import React from 'react'
import { Box, Text, Container, Heading, Image } from '@chakra-ui/react'

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
          How do we support each boy
        </Heading>
        <Text
          color='gray.600'
          fontWeight={800}
          fontSize={{ base: 'sm', lg: '21px' }}
          lineHeight={{ lg: '32px' }}
        >
          “We are always at the front-line of ensuring our students’ personal,
          psychological growth and wellbeing are a top priority.”
        </Text>
      </Box>
      <Image
        w='full'
        h='full'
        alt='calendar img'
        src={require('/public/images/pastorial-care-hero-img.png')}
      />
    </Container>
  )
}
