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
          At GCU, we are committed to bringing out the great potential in our
          students. With{' '}
          <b>
            <em>Excellence</em>
          </b>{' '}
          as our watchword, we can assure you of a propitious and promising
          future for your wards. We help all students build honesty, integrity,
          diligence, self-motivation, creativity, and leadership skills.
        </Text>
      </Box>
      <Image
        w='full'
        h='full'
        alt='calendar img'
        d={{ base: 'block', xl: 'none' }}
        src={require('/public/images/calendar-hero-mobile.png')}
      />
      <Image
        w='full'
        h='full'
        alt='calendar img'
        d={{ base: 'none', xl: 'block' }}
        src={require('/public/images/calendar-hero.png')}
      />
    </Container>
  )
}
