import React from 'react'
import { Box, Text, Image, Heading, Container } from '@chakra-ui/react'

export default function Houses() {
  return (
    <Container
      maxW='7xl'
      d='flex'
      justifyContent='space-around'
      py={{ base: 8, lg: 14 }}
    >
      <Box w={{ lg: '35%' }}>
        <Image
          w={{ lg: 'full' }}
          h={{ lg: 'full' }}
          src='/images/captain.png'
          alt='about-us-img'
        />
      </Box>
      <Box py={{ lg: 20 }} fontSize={{ lg: 'lg' }} w={{ lg: '50%' }}>
        <Heading
          mb={{ lg: 4 }}
          fontFamily='heading'
          fontWeight='normal'
          fontSize={{ lg: '42px' }}
        >
          HOUSE CAPTAIN
        </Heading>
        <Text mb={{ lg: 4 }} lineHeight={{ lg: '32px' }}>
          The Housemaster takes primary responsibility for the pastoral care of
          every boy in his house. He has a detailed understanding of each boy’s
          life at the school, from his mental and physical health to his
          academic and extra-curricular profile.
        </Text>
        <Text lineHeight={{ lg: '32px' }}>
          The principal role of the Housemaster is to help boys to find their
          place and to thrive within the school community.
        </Text>
      </Box>
    </Container>
  )
}
