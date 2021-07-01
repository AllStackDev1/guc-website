import React from 'react'
import { Box, Text, Image, Container, Heading } from '@chakra-ui/react'

const SeniorLeaderTeam = () => {
  return (
    <Container maxW='7xl' py={{ base: 10, lg: 20 }} px={{ base: 4, lg: 14 }}>
      <Heading
        as='h4'
        color='#0A083B'
        w={{ lg: 120 }}
        fontWeight='normal'
        fontSize={{ base: '2xl', lg: '42px' }}
        lineHeight={{ base: '40px', xl: '59px' }}
        textAlign={{ base: 'center', xl: 'left' }}
      >
        SENIOR LEADERSHIP TEAM
      </Heading>
      <Box>
        <Text
          mt={4}
          mb={6}
          fontSize={{ base: 'sm', xl: 'lg' }}
          lineHeight='32px'
        >
          Government College Umuahia is a privately - owned educational
          institution that was established in 1929. The College is secured and
          owned by the Fisher Educational Development Trust to restore a citadel
          of excellence and ensure good management structure.
        </Text>

        <Text
          mt={4}
          mb={6}
          fontSize={{ base: 'sm', xl: 'lg' }}
          lineHeight='32px'
        >
          Government College Umuahia is also piloted by top teaching and
          non-teaching professionals, using a well-designed hierarchical model.
        </Text>
      </Box>
      <Box mt={{ base: 10, lg: 20 }} px={{ xl: 20 }}>
        <Image src='/images/graph.png' />
      </Box>
    </Container>
  )
}

export default SeniorLeaderTeam
