import React from 'react'
import { Box, Text, Image, Container } from '@chakra-ui/react'

export default function Tennis() {
  return (
    <Container
      d='flex'
      maxW='7xl'
      justifyContent='space-between'
      flexDir={{ base: 'column', lg: 'row' }}
      py={{ base: 8, lg: 14 }}
    >
      <Box w={{ lg: '40%' }} fontSize={{ lg: 'lg' }}>
        <Image
          w='full'
          h='full'
          alt='calendar img'
          src={require('/public/images/tennis.png')}
        />
      </Box>
      <Box w={{ lg: '55%' }} pt={{ lg: 32 }}>
        <Text
          mb={{ lg: 8 }}
          fontFamily='heading'
          fontSize={{ base: '21px', lg: '42px' }}
          lineHeight={{ lg: '60px' }}
        >
          TENNIS
        </Text>
        <Text mb={{ lg: 5 }} lineHeight={{ lg: '32px' }}>
          The Housemaster takes primary responsibility for the pastoral care of
          every boy in his house. He has a detailed understanding of each boy’s
          life at the school, from his mental and physical health to his
          academic and extra-curricular profile.
        </Text>
        <Text mb={{ lg: 5 }} lineHeight={{ lg: '32px' }}>
          The principal role of the Housemaster is to help boys to find their
          place and to thrive within the school community.
        </Text>
      </Box>
    </Container>
  )
}
