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
      py={{ base: 10, lg: 24 }}
    >
      <Box mb={{ base: 10, lg: 14 }} w={{ base: '95%', lg: 125 }}>
        <Heading mb={{ lg: 6 }} fontSize={{ base: '1.875rem', lg: '60px' }}>
          About GCU
        </Heading>
        <Text
          color='#6A7986'
          fontSize={{ base: 'sm', lg: '21px' }}
          lineHeight={{ lg: '32px' }}
        >
          Welcome to Government College Umuahia, a boarding school for boys aged
          between 13 and 18 and a world class residential all boys secondary
          school located on Ikot -Ekpene Road, Umuahia in Abia State which
          offers a combination of British and Nigerian curricula.
        </Text>
      </Box>
      <Box pos='relative'>
        <Image
          w='full'
          h='full'
          d={{ base: 'block', xl: 'none' }}
          src='/images/about-us-hero-img-mobile.png'
          alt='about-us-img'
        />
        <Box
          bottom={{ xl: 0 }}
          py={{ base: 8, lg: 10 }}
          px={{ base: 6, lg: 12 }}
          pos={{ xl: 'absolute' }}
          textAlign='left'
          w={{ lg: 124 }}
          bgColor='gcu.100'
        >
          <Text
            color='white'
            fontSize={{ lg: 'lg' }}
            lineHeight={{ lg: '32px' }}
          >
            “GCU, as the “Eton of the East”, strives towards excellence. We
            provide a conducive learning environment, and offer our students the
            right knowledge, skills, creativity and dispositions to thrive in a
            world of constant change.”
          </Text>
        </Box>
        <Image
          w='full'
          h='full'
          d={{ base: 'none', xl: 'block' }}
          src='/images/about-us-hero-img.png'
          alt='about-us-img'
        />
      </Box>
    </Container>
  )
}
