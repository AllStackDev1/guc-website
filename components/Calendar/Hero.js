import React from 'react'
import Fade from 'react-reveal/Fade'
import Pulse from 'react-reveal/Pulse'
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
        <Pulse>
          <Heading mb={{ lg: 6 }} fontSize={{ base: '1.5rem', lg: '60px' }}>
            Academic Calendar
          </Heading>
        </Pulse>
        <Fade top cascade>
          <Text
            color='#6A7986'
            fontSize={{ base: 'sm', lg: '21px' }}
            lineHeight={{ lg: '32px' }}
          >
            The life of the boarding house is at the heart of every pupil’s GCU
            experience.
          </Text>
        </Fade>
      </Box>
      <Fade right>
        <Image
          w='full'
          h='full'
          src='/images/calendar-hero.png'
          alt='calendar img'
        />
      </Fade>
    </Container>
  )
}
