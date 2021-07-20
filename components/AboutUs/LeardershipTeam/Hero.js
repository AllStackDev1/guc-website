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
      <Box mb={{ base: 10, lg: 14 }} w={{ lg: 129 }}>
        <Heading
          mb={{ base: 3, lg: 6 }}
          fontSize={{ base: '1.5rem', lg: '60px' }}
        >
          Leadership & Governance
        </Heading>
        <Text
          color='#6A7986'
          fontSize={{ base: 'sm', lg: '21px' }}
          lineHeight={{ lg: '32px' }}
        >
          Government College Umuahia is owned and managed by Fisher Educational
          Development Trust (FEDT). We are keenly interested in maintaining the
          quality education that made us stand out since the beginning, in 1929.
        </Text>
      </Box>
      <Image
        w='full'
        h='full'
        alt='calendar img'
        d={{ base: 'none', xl: 'block' }}
        src={require('public/images/leadership-team-hero.png')}
      />
      <Image
        w='full'
        h='full'
        alt='calendar img'
        d={{ base: 'block', xl: 'none' }}
        src={require('public/images/leadership-team-hero-mobile.png')}
      />
    </Container>
  )
}
