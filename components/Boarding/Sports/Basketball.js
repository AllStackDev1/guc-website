import React from 'react'
import { Box, Text, Image, Container } from '@chakra-ui/react'

export default function Basketball() {
  return (
    <Container
      d='flex'
      maxW='7xl'
      justifyContent='space-between'
      py={{ base: 8, lg: 14 }}
    >
      <Box w={{ lg: '55%' }} pt={{ lg: 32 }}>
        <Text
          mb={{ lg: 8 }}
          fontFamily='heading'
          fontSize={{ lg: '42px' }}
          lineHeight={{ lg: '60px' }}
        >
          BASKETBALL
        </Text>
        <Text lineHeight={{ lg: '32px' }}>
          GCU enjoys training its students on how to play basketball to
          strengthen their endurance and develop fundamental movement skills.
          Basketball would help our students to develop self-confidence in
          different situations, and this will help them create more freedom from
          destructive thoughts.
        </Text>
      </Box>
      <Box w={{ lg: '40%' }} fontSize={{ lg: 'lg' }}>
        <Image
          w='full'
          h='full'
          src='/images/basketball.png'
          alt='calendar img'
        />
      </Box>
    </Container>
  )
}
