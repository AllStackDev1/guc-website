import React from 'react'
import { Box, Text, Container, Heading, Image } from '@chakra-ui/react'

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
      <Box mb={{ lg: 14 }} w={{ lg: 125 }}>
        <Heading
          mb={{ lg: 6 }}
          fontSize={{ base: '1.875rem', lg: '60px' }}
          lineHeight='66px'
        >
          About GCU
        </Heading>
        <Text color='#6A7986' fontSize='21px' lineHeight='32px'>
          We are an industry-leading company that values honesty, integrity, and
          efficiency. Building quality products and caring for the users are
          what made us stand out since the beginning.
        </Text>
      </Box>
      <Box pos='relative'>
        <Box
          bottom={0}
          py={{ lg: 10 }}
          px={{ lg: 12 }}
          pos='absolute'
          textAlign='left'
          w={{ lg: 124 }}
          bgColor='gcu.100'
        >
          <Text color='white' fontSize='21px' lineHeight='32px'>
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
