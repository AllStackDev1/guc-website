import React from 'react'
import { Box, Text, Image, Container } from '@chakra-ui/react'

export default function ExamDate() {
  return (
    <Container
      d='flex'
      maxW='7xl'
      py={{ lg: 14 }}
      flexDir={{ base: 'column-reverse', lg: 'row' }}
      justifyContent={{ xl: 'space-between' }}
    >
      <Box w={{ lg: '40%' }} pt={{ base: 10, lg: 0 }} fontSize={{ lg: 'lg' }}>
        <Image
          w='full'
          h='full'
          src='/images/calendar-img.png'
          alt='calendar img'
        />
      </Box>
      <Box w={{ lg: '45%' }} px={{ base: 2, lg: 0 }} pt={{ base: 14, lg: 32 }}>
        <Text
          mb={{ base: 3, lg: 8 }}
          fontFamily='heading'
          lineHeight={{ lg: '60px' }}
          fontSize={{ base: '2xl', lg: '42px' }}
          textAlign={{ base: 'center', lg: 'left' }}
          textTransform='uppercase'
        >
          Boarding arrangements
        </Text>
        <Text
          mb={5}
          fontSize={{ base: 'sm', lg: 'md' }}
          lineHeight={{ base: '27px', lg: '32px' }}
        >
          On resumption, the well-trained housemaster takes primary
          responsibility for the pastoral care of every boy in his house. He
          develops an elaborate understanding of the life of each boy at the
          school, caring for his mental wellness, physical health and his
          academic and extra-curricular profile.
        </Text>
      </Box>
    </Container>
  )
}
