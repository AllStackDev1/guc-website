import React from 'react'
import { Box, Text, Container } from '@chakra-ui/react'

export default function Responsibility() {
  return (
    <Container
      d='flex'
      maxW='7xl'
      justifyContent='space-between'
      py={{ base: 8, lg: 14 }}
    >
      <Box w={{ lg: '40%' }}>
        <Text
          fontFamily='heading'
          fontSize={{ lg: '42px' }}
          lineHeight={{ lg: '59px' }}
        >
          Taking Responsibility Seriously
        </Text>
      </Box>
      <Box w={{ lg: '50%' }} fontSize={{ lg: 'lg' }}>
        <Text lineHeight={{ lg: '32px' }}>
          Government College Umuahia is a full boarding school; this allows
          students to offer a variety of activities to help develop their
          skills, develop cordial relationships and have a well-rounded
          experience.
        </Text>
        <Text my={{ lg: 4 }} lineHeight={{ lg: '32px' }}>
          We cater for the well-being of our students in the school environment
          and beyond by providing a safe, nurturing and healthy environment.
        </Text>
        <Text lineHeight={{ lg: '32px' }}>
          We provide adequate care and attention that meet the full range of
          students’ needs – personal, social, emotional and intellectual.
        </Text>
      </Box>
    </Container>
  )
}
