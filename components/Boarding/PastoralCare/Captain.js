import React from 'react'
import { Box, Text, Image, Heading, Container } from '@chakra-ui/react'

export default function Houses() {
  return (
    <Container
      maxW='7xl'
      d='flex'
      justifyContent='space-around'
      flexDir={{ base: 'column', lg: 'row' }}
      py={{ base: 8, lg: 14 }}
    >
      <Box w={{ lg: '35%' }}>
        <Image
          w={{ lg: 'full' }}
          h={{ lg: 'full' }}
          alt='about-us-img'
          src={require('/public/images/captain.png')}
        />
      </Box>
      <Box
        py={{ base: 8, lg: 20 }}
        fontSize={{ base: 'sm', lg: 'lg' }}
        w={{ lg: '50%' }}
      >
        <Heading
          mb={{ lg: 4 }}
          fontFamily='heading'
          fontWeight='normal'
          fontSize={{ base: '21px', lg: '42px' }}
        >
          HOUSE CAPTAIN
        </Heading>
        <Text mb={{ lg: 4 }} lineHeight={{ base: '25px', lg: '32px' }}>
          The House captain is an elected student prefect that oversees the
          activities of his fellow colleagues in the house. He reports directly
          to the housemaster and acts as a bridge between the hostel management
          and the students.
        </Text>
        <Text lineHeight={{ base: '25px', lg: '32px' }}>
          He also leads and supports the boys of your house in a variety of
          house competitions.
        </Text>
      </Box>
    </Container>
  )
}
