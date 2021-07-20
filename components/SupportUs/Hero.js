import React from 'react'
import { Box, Text, Image, Container, Heading } from '@chakra-ui/react'

export default function Hero() {
  return (
    <Container
      py={{ lg: 24 }}
      d='flex'
      maxW='7xl'
      flexDir='column'
      textAlign='center'
      alignItems='center'
    >
      <Box mb={{ base: 4, lg: 14 }} w={{ lg: 125 }}>
        <Heading mb={{ lg: 6 }} fontSize={{ base: '1.875rem', lg: '60px' }}>
          How can you stay more involved?
        </Heading>
        <Text
          color='#6A7986'
          fontSize={{ base: 'sm', lg: '21px' }}
          lineHeight={{ lg: '32px' }}
        >
          Minimalism, optimization and precision, your business is skyrocketing.
        </Text>
      </Box>
      <Image
        w='full'
        h='full'
        alt='calendar img'
        src={require('/public/images/leadership-team-hero.png')}
      />
    </Container>
  )
}
