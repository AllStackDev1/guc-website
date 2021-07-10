import React from 'react'
import { Box, Text, Container } from '@chakra-ui/react'

export default function ChallengeBalance() {
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
          Challenge & Balance
        </Text>
      </Box>
      <Box w={{ lg: '50%' }} fontSize={{ lg: 'lg' }}>
        <Text lineHeight={{ lg: '32px' }}>
          Here at Government College Umuahia, we challenge our students both in
          academic and extra-curricular space. We provide several possibilities
          for students to master new abilities and kindle new interests outside
          of the traditional framework of any educational system.
        </Text>
        <Text my={{ lg: 4 }} lineHeight={{ lg: '32px' }}>
          Extracurricular activities are an integral component of any child’s
          physical and psychological development. They are well-structured to
          enhance our students’ team bonding, educational retainment, cultural
          exposure, and building their interpersonal relationship.
        </Text>
        <Text lineHeight={{ lg: '32px' }}>
          At GCU, our extra-curricular activities are segmented into three
          layers: sports, intellectual and cultural activities.
        </Text>
      </Box>
    </Container>
  )
}
