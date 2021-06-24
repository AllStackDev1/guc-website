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
          Boys are thrown together in groups of 10 or 11 as 13-year-olds, and
          they grow up together over the next five intense and action-packed
          years. Friendships built up during this period and will last for the
          whole of a person’s life.
        </Text>
        <Text mb={{ lg: 5 }} lineHeight={{ lg: '32px' }}>
          The roles of House Master and Dame are complex and varied. No manual
          can fully prepare the members of staff who take them on, and the jobs
          make huge demands on them. However, the task of steering young people
          through this critical phase in their life is an immensely rewarding,
          important and worthwhile one. House staff make lasting relationships
          with many of the pupils who have been in their care and with some of
          their parents too.
        </Text>
      </Box>
    </Container>
  )
}
