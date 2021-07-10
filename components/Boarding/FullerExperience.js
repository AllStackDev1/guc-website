import React from 'react'
import { Box, Text, Image, Container } from '@chakra-ui/react'

export default function FullerExperience() {
  return (
    <Container
      d='flex'
      maxW='7xl'
      justifyContent='space-between'
      py={{ base: 8, lg: 14 }}
    >
      <Box w={{ lg: '55%' }}>
        <Text
          mb={{ lg: 8 }}
          fontFamily='heading'
          fontSize={{ lg: '42px' }}
          lineHeight={{ lg: '60px' }}
        >
          How do we achieve a fuller experience?
        </Text>
        <Text mb={{ lg: 5 }} lineHeight={{ lg: '32px' }}>
          Government College Umuahia provides the best comfort and safe
          environment to its students. Being a boarding school, we combine
          academic & non-academic activities, motivational lectures & debates,
          mentorship and social development.
        </Text>
        <Text lineHeight={{ lg: '32px' }}>
          Each boarding house contains comfortable bedrooms with
          air-conditioning, study rooms, modern showers & toilet facilities,
          fire alarms and fire exits. Security guards, house masters and medical
          practitioners are also with the students to provide care and make
          their experience worthwhile.
        </Text>
      </Box>
      <Box w={{ lg: '40%' }} fontSize={{ lg: 'lg' }}>
        <Image
          w='full'
          h='full'
          src='/images/boarding-3.png'
          alt='calendar img'
        />
      </Box>
    </Container>
  )
}
