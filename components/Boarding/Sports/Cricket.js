import React from 'react'
import { Box, Text, Image, Container } from '@chakra-ui/react'

export default function Cricket() {
  return (
    <Container
      d='flex'
      maxW='7xl'
      justifyContent='space-between'
      flexDir={{ base: 'column-reverse', lg: 'row' }}
      py={{ base: 8, lg: 14 }}
    >
      <Box
        w={{ lg: '55%' }}
        pt={{ lg: 32 }}
        textAlign={{ base: 'justify', lg: 'inherit' }}
        fontSize={{ base: 'sm', lg: 'lg' }}
      >
        <Text
          mb={{ lg: 8 }}
          fontFamily='heading'
          fontSize={{ base: '21px', lg: '42px' }}
          lineHeight={{ lg: '60px' }}
        >
          CRICKET
        </Text>
        <Text mb={{ lg: 5 }} lineHeight={{ base: '25px', lg: '32px' }}>
          GCU has a vast land for students to play cricket. The game, cricket,
          is meant to encourage our students’ team spirit, foster discipline,
          and improve their leadership qualities.
        </Text>
        <Text lineHeight={{ base: '25px', lg: '32px' }}>
          Being a part of the cricket team would help our students to learn how
          to compromise, how to collaborate and how they can transfer the skills
          to real-life situations.
        </Text>
      </Box>
      <Box mb={{ base: 5, lg: 0 }} w={{ lg: '40%' }}>
        <Image
          w='full'
          h='full'
          src='/images/cricket.jpeg'
          alt='calendar img'
        />
      </Box>
    </Container>
  )
}
