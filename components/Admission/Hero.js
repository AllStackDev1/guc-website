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
      py={{ base: 14, lg: 24 }}
    >
      <Box mb={14} w={{ lg: 125 }}>
        <Heading mb={{ base: 3, lg: 6 }} fontSize={{ base: '2xl', lg: '60px' }}>
          Your Journey to GCU
        </Heading>
        <Text
          color='#6A7986'
          fontSize={{ base: 'sm', lg: '21px' }}
          lineHeight={{ base: '27px', lg: '32px' }}
        >
          We are an industry-leading company that values honesty, integrity, and
          efficiency. Building quality products and caring for the users are
          what made us stand out since the beginning.
        </Text>
      </Box>
      <Image
        w='full'
        h='full'
        src='/images/calendar-hero-mobile.png'
        alt='calendar img'
        d={{ base: 'block', xl: 'none' }}
      />
      <Image
        w='full'
        h='full'
        src='/images/calendar-hero.png'
        alt='calendar img'
        d={{ base: 'none', xl: 'block' }}
      />
    </Container>
  )
}
