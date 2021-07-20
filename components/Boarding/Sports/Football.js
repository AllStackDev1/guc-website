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
      <Box w={{ lg: '40%' }} mb={{ base: 5, lg: 0 }}>
        <Image
          w='full'
          h='full'
          alt='calendar img'
          // src='/images/football.jpeg'
          src={require('/public/images/football.jpeg')}
        />
      </Box>
      <Box w={{ lg: '55%' }} pt={{ lg: 32 }}>
        <Text
          mb={{ lg: 8 }}
          fontFamily='heading'
          fontSize={{ base: '21px', lg: '42px' }}
          lineHeight={{ lg: '60px' }}
        >
          FOOTBALL
        </Text>
        <Text
          textAlign={{ base: 'justify', lg: 'inherit' }}
          fontSize={{ base: 'sm', lg: 'lg' }}
          lineHeight={{ base: '25px', lg: '32px' }}
        >
          At GCU, football has been a part of the school's sports since its
          inception in 1929. We engage in constant football training and prepare
          our students for intra and inter-football competitions. We,
          additionally, track our students’ football performance and engage them
          in adequate drills to unravel their football skills and enhance their
          teamwork.
        </Text>
      </Box>
    </Container>
  )
}
