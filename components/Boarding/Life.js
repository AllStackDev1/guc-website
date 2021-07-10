import React from 'react'
import { Box, Text, Container } from '@chakra-ui/react'

export default function Life() {
  return (
    <Container
      d='flex'
      maxW='7xl'
      justifyContent='space-between'
      py={{ base: 8, lg: 14 }}
    >
      <Box w={{ lg: '40%' }}>
        <Text
          fontFamily='heading'
          fontSize={{ lg: '42px' }}
          lineHeight={{ lg: '59px' }}
        >
          The life of the boarding house is at the heart of every pupil’s Eton
          experience.
        </Text>
      </Box>
      <Box w={{ lg: '50%' }} fontSize={{ lg: 'lg' }}>
        <Text mb={{ lg: 5 }} lineHeight={{ lg: '32px' }}>
          Government College Umuahia affords the opportunity to build
          everlasting relationships and create a solid foundation for adulthood.
          We also instill the habits of independence and self-responsibility in
          our students.
        </Text>
        <Text lineHeight={{ lg: '32px' }}>
          We build “a family” through our boarding and extra-curricular
          experiences in a way that will build long- lasting relationships.
        </Text>
      </Box>
    </Container>
  )
}
