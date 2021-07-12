import React from 'react'
import { Box, Text, Container } from '@chakra-ui/react'

export default function Life() {
  return (
    <Container
      d='flex'
      maxW='7xl'
      flexDir={{ base: 'column', lg: 'row' }}
      py={{ base: 8, lg: 14 }}
      justifyContent='space-between'
    >
      <Box
        textAlign={{ base: 'center', lg: 'inherit' }}
        w={{ lg: '40%' }}
        mb={{ base: 5, lg: 0 }}
      >
        <Text
          fontFamily='heading'
          fontSize={{ base: '21px', lg: '42px' }}
          lineHeight={{ lg: '59px' }}
        >
          The life of the boarding house is at the heart of every pupil’s Eton
          experience.
        </Text>
      </Box>
      <Box w={{ lg: '50%' }} fontSize={{ base: 'sm', lg: 'lg' }}>
        <Text mb={{ base: 4, lg: 5 }} lineHeight={{ base: '25px', lg: '32px' }}>
          Government College Umuahia affords the opportunity to build
          everlasting relationships and create a solid foundation for adulthood.
          We also instill the habits of independence and self-responsibility in
          our students.
        </Text>
        <Text lineHeight={{ base: '25px', lg: '32px' }}>
          We build “a family” through our boarding and extra-curricular
          experiences in a way that will build long- lasting relationships.
        </Text>
      </Box>
    </Container>
  )
}
