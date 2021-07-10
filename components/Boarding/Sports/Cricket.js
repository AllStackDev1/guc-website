import React from 'react'
import { Box, Text, Image, Container } from '@chakra-ui/react'

export default function Cricket() {
  return (
    <Container
      d='flex'
      maxW='7xl'
      justifyContent='space-between'
      py={{ base: 8, lg: 14 }}
    >
      <Box w={{ lg: '55%' }} pt={{ lg: 32 }}>
        <Text
          mb={{ lg: 8 }}
          fontFamily='heading'
          fontSize={{ lg: '42px' }}
          lineHeight={{ lg: '60px' }}
        >
          CRICKET
        </Text>
        <Text mb={{ lg: 5 }} lineHeight={{ lg: '32px' }}>
          GCU has a vast land for students to play cricket. The game, cricket,
          is meant to encourage our students’ team spirit, foster discipline,
          and improve their leadership qualities.
        </Text>
        <Text lineHeight={{ lg: '32px' }}>
          Being a part of the cricket team would help our students to learn how
          to compromise, how to collaborate and how they can transfer the skills
          to real-life situations.
        </Text>
      </Box>
      <Box w={{ lg: '40%' }} fontSize={{ lg: 'lg' }}>
        <Image
          w='full'
          h='full'
          src='/images/basketball.png'
          alt='calendar img'
        />
      </Box>
    </Container>
  )
}
