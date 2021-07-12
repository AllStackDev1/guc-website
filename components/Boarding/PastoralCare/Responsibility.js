import React from 'react'
import { Box, Text, Container } from '@chakra-ui/react'

export default function Responsibility() {
  return (
    <Container
      d='flex'
      maxW='7xl'
      justifyContent='space-between'
      flexDir={{ base: 'column', lg: 'row' }}
      py={{ base: 4, lg: 14 }}
    >
      <Box w={{ lg: '40%' }} textAlign={{ base: 'center', lg: 'inherit' }}>
        <Text
          fontFamily='heading'
          fontSize={{ base: '21px', lg: '42px' }}
          lineHeight={{ lg: '59px' }}
        >
          Taking Responsibility Seriously
        </Text>
      </Box>
      <Box w={{ lg: '50%' }} fontSize={{ base: 'sm', lg: 'lg' }}>
        <Text lineHeight={{ base: '25px', lg: '32px' }}>
          Government College Umuahia is a full boarding school; this allows
          students to offer a variety of activities to help develop their
          skills, develop cordial relationships and have a well-rounded
          experience.
        </Text>
        <Text my={4} lineHeight={{ base: '25px', lg: '32px' }}>
          We cater for the well-being of our students in the school environment
          and beyond by providing a safe, nurturing and healthy environment.
        </Text>
        <Text lineHeight={{ base: '25px', lg: '32px' }}>
          We provide adequate care and attention that meet the full range of
          students’ needs – personal, social, emotional and intellectual.
        </Text>
      </Box>
    </Container>
  )
}
