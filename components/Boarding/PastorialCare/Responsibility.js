import React from 'react'
import { Box, Text, Container } from '@chakra-ui/react'

export default function Responsibility() {
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
          Taking responsibility seriously
        </Text>
      </Box>
      <Box w={{ lg: '50%' }} fontSize={{ lg: 'lg' }}>
        <Text lineHeight={{ lg: '32px' }}>
          Throughout their time at Winchester, boys are supported by an
          extensive network of staff who are responsible for their emotional and
          physical wellbeing.
        </Text>
        <Text lineHeight={{ lg: '32px' }}>
          This network includes all of the teaching staff, the majority of whom
          are house tutors.
        </Text>
        <Text lineHeight={{ lg: '32px' }}>
          On joining the school, they are closely monitored to ensure that they
          are settling in to life at Winchester, with any early worries quickly
          spotted and addressed.
        </Text>
      </Box>
    </Container>
  )
}
