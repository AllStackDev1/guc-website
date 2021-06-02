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
      <Box mb={{ base: 4, lg: 14 }} w={{ lg: 130 }}>
        <Heading mb={{ lg: 6 }} fontSize={{ base: '1.5rem', lg: '60px' }}>
          Boarding is just living with your friends.
        </Heading>
        <Text
          color='#6A7986'
          fontSize={{ base: 'sm', lg: '21px' }}
          lineHeight={{ lg: '32px' }}
        >
          The life of the boarding House is at the heart of every pupil’s GCU
          experience.
        </Text>
      </Box>
      <Box pos='relative'>
        <Box
          bottom={0}
          py={{ base: 2, lg: 10 }}
          px={{ base: 2, lg: 12 }}
          pos='absolute'
          textAlign='left'
          w={{ base: 52, lg: 124 }}
          bgColor='gcu.100'
        >
          <Text
            color='white'
            fontSize={{ base: 'xx-small', lg: '21px' }}
            lineHeight={{ lg: '32px' }}
          >
            “We strive to work closely together with our customers in solving
            their problems. We value honesty, integrity, and efficiency”
          </Text>
        </Box>
        <Image
          w='full'
          h='full'
          src='/images/about-us-hero-img.png'
          alt='about-us-img'
        />
      </Box>
    </Container>
  )
}
