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
          Welcome to Government College Umuahia, a boarding school for boys aged
          between 13 and 18 and a world class residential all boys secondary
          school located on Ikot - Ekpene Road, Umuahia in Abia State which
          offers a combination of British and Nigerian curricula.
        </Text>
      </Box>
      <Image
        w='full'
        h='full'
        d={{ base: 'none', xl: 'block' }}
        src='/images/leadership-team-hero.png'
        alt='calendar img'
      />
      <Image
        w='full'
        h='full'
        d={{ base: 'block', xl: 'none' }}
        src='/images/leadership-team-hero-mobile.png'
        alt='calendar img'
      />
    </Container>
  )
}
