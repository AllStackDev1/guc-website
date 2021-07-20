import React from 'react'
import { Box, Text, Image, Container } from '@chakra-ui/react'

export default function FullerExperience() {
  return (
    <Container
      d='flex'
      maxW='7xl'
      flexDir={{ base: 'column', lg: 'row' }}
      justifyContent='space-between'
      py={{ base: 8, lg: 14 }}
    >
      <Box
        fontSize={{ base: 'sm', lg: 'lg' }}
        mb={{ base: 5, lg: 0 }}
        w={{ lg: '55%' }}
      >
        <Text
          textAlign={{ base: 'center', lg: 'inherit' }}
          mb={{ base: 5, lg: 8 }}
          fontFamily='heading'
          fontSize={{ base: '21px', lg: '42px' }}
          lineHeight={{ lg: '60px' }}
        >
          How do we achieve a fuller experience?
        </Text>
        <Text mb={{ base: 8, lg: 5 }} lineHeight={{ base: '25px', lg: '32px' }}>
          Government College Umuahia provides the best comfort and safe
          environment to its students. Being a boarding school, we combine
          academic & non-academic activities, motivational lectures & debates,
          mentorship and social development.
        </Text>
        <Text lineHeight={{ base: '25px', lg: '32px' }}>
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
          alt='calendar img'
          src={require('/public/images/boarding-3.png')}
        />
      </Box>
    </Container>
  )
}
