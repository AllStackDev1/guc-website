import React from 'react'
import { Box, Text, Flex, Image, Heading, Container } from '@chakra-ui/react'

export default function FutureWins() {
  return (
    <Container maxW='full' py={{ base: 8, lg: 14 }}>
      <Flex
        bg='gcu.350'
        pl={{ lg: 20 }}
        flexDir={{ base: 'column-reverse', lg: 'row' }}
        justifyContent='space-between'
      >
        <Box
          py={{ lg: 32 }}
          textAlign={{ base: 'justify', lg: 'inherit' }}
          fontSize={{ base: 'sm', lg: 'lg' }}
          w={{ lg: '50%' }}
        >
          <Heading
            mb={4}
            fontFamily='heading'
            fontWeight='normal'
            fontSize={{ base: '21px', lg: '42px' }}
          >
            FUTURE WINS
          </Heading>
          <Text mb={4} lineHeight={{ base: '25px', lg: '32px' }}>
            The Housemaster takes primary responsibility for the pastoral care
            of every boy in his house. He has a detailed understanding of each
            boy’s life at the school, from his mental and physical health to his
            academic and extra-curricular profile.
          </Text>
        </Box>
        <Box w={{ lg: '35%' }} mb={{ base: 5, lg: 0 }}>
          <Image
            w={{ lg: 'full' }}
            h={{ lg: 'full' }}
            src='/images/future-win.png'
            alt='about-us-img'
          />
        </Box>
      </Flex>
    </Container>
  )
}
