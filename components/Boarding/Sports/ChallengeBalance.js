import React from 'react'
import { Box, Text, Container } from '@chakra-ui/react'

export default function ChallengeBalance() {
  return (
    <Container
      d='flex'
      maxW='7xl'
      justifyContent='space-between'
      flexDir={{ base: 'column', lg: 'row' }}
      py={{ base: 8, lg: 14 }}
    >
      <Box w={{ lg: '40%' }} textAlign={{ base: 'center', lg: 'inherit' }}>
        <Text
          fontFamily='heading'
          fontSize={{ base: '21px', lg: '42px' }}
          lineHeight={{ lg: '59px' }}
        >
          Challenge & Balance
        </Text>
      </Box>
      <Box
        textAlign={{ base: 'justify', lg: 'inherit' }}
        w={{ lg: '50%' }}
        fontSize={{ base: 'sm', lg: 'lg' }}
      >
        <Text lineHeight={{ base: '25px', lg: '32px' }}>
          Here at Government College Umuahia, we challenge our students both
          academically and extra-curricularly. We provide several possibilities
          for students to master new abilities and kindle new interests outside
          of the traditional framework of any educational system.
        </Text>
        <Text my={4} lineHeight={{ base: '25px', lg: '32px' }}>
          Extracurricular activities are an integral component of any child’s
          physical and psychological development. They are well-structured to
          enhance our students’ team bonding, educational retainment, cultural
          exposure, and interpersonal skills.
        </Text>
        <Text lineHeight={{ base: '25px', lg: '32px' }}>
          At GCU, our extra-curricular activities are segmented into three
          layers: sports, intellectual and cultural activities.
        </Text>
      </Box>
    </Container>
  )
}
