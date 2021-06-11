import React from 'react'
import { Box, Text, Image, Container } from '@chakra-ui/react'

export default function Resumption() {
  return (
    <Container
      d='flex'
      maxW='7xl'
      py={{ base: 8, lg: 14 }}
      flexDir={{ base: 'column', lg: 'row' }}
      justifyContent={{ lg: 'space-between' }}
    >
      <Box w={{ lg: '45%' }} pt={{ lg: 32 }}>
        <Text
          mb={{ base: 3, lg: 8 }}
          fontFamily='heading'
          lineHeight={{ lg: '60px' }}
          fontSize={{ base: '2xl', lg: '42px' }}
          textAlign={{ base: 'center', lg: 'left' }}
        >
          RESUMPTION DATE
        </Text>
        <Text
          mb={{ lg: 5 }}
          fontSize={{ base: 'sm', lg: 'md' }}
          lineHeight={{ base: '27px', lg: '32px' }}
        >
          The Housemaster takes primary responsibility for the pastoral care of
          every boy in his house. He has a detailed understanding of each boy’s
          life at the school, from his mental and physical health to his
          academic and extra-curricular profile.
        </Text>
      </Box>
      <Box w={{ lg: '40%' }} pt={{ base: 10, lg: 0 }} fontSize={{ lg: 'lg' }}>
        <Image
          w='full'
          h='full'
          src='/images/resumption-image.png'
          alt='calendar img'
        />
      </Box>
    </Container>
  )
}
