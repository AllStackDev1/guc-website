import React from 'react'
import { Box, Text, Container } from '@chakra-ui/react'

export default function ChallengeBalance() {
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
          Challenge & balance
        </Text>
      </Box>
      <Box w={{ lg: '50%' }} fontSize={{ lg: 'lg' }}>
        <Text mb={{ lg: 4 }} lineHeight={{ lg: '32px' }}>
          Sport brings challenge, and a vital balance to academic life. Every
          afternoon, boys can participate in a wide range of sporting
          opportunities.
        </Text>
        <Text lineHeight={{ lg: '32px' }}>
          Our coaching staff consists of former international sportsmen and
          professionals, as well as current county and district level coaches.
          Their expertise and enthusiasm readies boys to represent their sport
          at regional, county, national and international level.
        </Text>
      </Box>
    </Container>
  )
}
