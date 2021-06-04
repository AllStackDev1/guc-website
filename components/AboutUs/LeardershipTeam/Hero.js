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
      <Box mb={{ base: 4, lg: 14 }} w={{ lg: 129 }}>
        <Heading mb={{ lg: 6 }} fontSize={{ base: '1.5rem', lg: '60px' }}>
          Leadership & Governance
        </Heading>
        <Text
          color='#6A7986'
          fontSize={{ base: 'sm', lg: '21px' }}
          lineHeight={{ lg: '32px' }}
        >
          We are an industry-leading company that values honesty, integrity, and
          efficiency. Building quality products and caring for the users are
          what made us stand out since the beginning.
        </Text>
      </Box>
      <Image
        w='full'
        h='full'
        src='/images/leadership-team-hero.png'
        alt='calender img'
      />
    </Container>
  )
}
