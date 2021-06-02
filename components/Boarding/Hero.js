import React from 'react'
import { Box, Text, Container, Heading, Image, Flex } from '@chakra-ui/react'

export default function Hero() {
  return (
    <Container
      d='flex'
      maxW='7xl'
      flexDir='column'
      textAlign='center'
      alignItems='center'
      py={{ base: 8, lg: 24 }}
    >
      <Box mb={{ base: 4, lg: 14 }} w={{ lg: 130 }}>
        <Heading mb={{ lg: 6 }} fontSize={{ base: '1.5rem', lg: '60px' }}>
          Boarding is just living with your friends.
        </Heading>
        <Text
          color='#6A7986'
          fontSize={{ base: 'sm', lg: '21px' }}
          lineHeight={{ lg: '32px' }}
        >
          The life of the boarding House is at the heart of every pupil’s GCU
          experience.
        </Text>
      </Box>
      <Flex>
        <Image
          w={{ lg: '690px' }}
          h={{ lg: '440px' }}
          src='/images/bording-1.png'
          alt='about-us-img'
        />
        <Box mx={{ lg: 4 }} />
        <Box pos='relative'>
          <Box
            zIndex={-1}
            mt={{ lg: 10 }}
            ml={{ lg: 10 }}
            bg='gcu.100'
            pos='absolute'
            w={{ lg: '480px' }}
            h={{ lg: '440px' }}
          />
          <Box zIndex={1}>
            <Image
              w={{ lg: '480px' }}
              h={{ lg: '440px' }}
              src='/images/bording-2.png'
              alt='about-us-img'
            />
          </Box>
        </Box>
      </Flex>
    </Container>
  )
}
