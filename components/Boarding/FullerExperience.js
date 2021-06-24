import React from 'react'
import { Box, Text, Image, Container } from '@chakra-ui/react'

export default function FullerExperience() {
  return (
    <Container
      d='flex'
      maxW='7xl'
      justifyContent='space-between'
      py={{ base: 8, lg: 14 }}
    >
      <Box w={{ lg: '55%' }}>
        <Text
          mb={{ lg: 8 }}
          fontFamily='heading'
          fontSize={{ lg: '42px' }}
          lineHeight={{ lg: '60px' }}
        >
          How do we achieve a fuller experience?
        </Text>
        <Text mb={{ lg: 5 }} lineHeight={{ lg: '32px' }}>
          Boarding is perhaps an inaccurate term for the personal atmosphere at
          Winchester. Every House here is its own family. It is extensive in
          number (a Winchester house has about sixty boys), and diverse in its
          influences (Winchester boys are from many countries and their parents
          from many walks of life). Most of all, it is abundant in facilities,
          opportunities and professionalism.
        </Text>
        <Text mb={{ lg: 5 }} lineHeight={{ lg: '32px' }}>
          We believe that a great education should be experienced to the full
          and fullness is what a boarding education offers. Full boarding may be
          a tradition, but in reality, at Winchester, it is a way of life - and
          we are unashamedly proud of it.
        </Text>
      </Box>
      <Box w={{ lg: '40%' }} fontSize={{ lg: 'lg' }}>
        <Image
          w='full'
          h='full'
          src='/images/boarding-3.png'
          alt='calendar img'
        />
      </Box>
    </Container>
  )
}
