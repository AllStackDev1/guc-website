import React from 'react'
import { Box, Text, Container, Heading, Grid, GridItem } from '@chakra-ui/react'

const SchoolAnthem = () => {
  return (
    <Container
      d='flex'
      maxW='7xl'
      bgColor='#FDF9F9'
      py={{ lg: 20 }}
      px={{ lg: 10 }}
      // mx={{ lg: 14 }}
      justifyContent='space-between'
    >
      <Heading
        as='h4'
        color='#0A083B'
        fontWeight='normal'
        fontSize={{ base: '2xl', lg: '42px' }}
        lineHeight='59px'
      >
        SCHOOL ANTHEM
      </Heading>
      <Box w={{ lg: '60%' }}>
        <Heading as='h4' color='#0A083B' fontSize={{ base: 'md', lg: '2xl' }}>
          THE WILL TO SHINE AS ONE
        </Heading>
        <Grid
          color='#64646C'
          templateRows='repeat(2, 1fr)'
          templateColumns='repeat(2, 1fr)'
          gap={4}
          mb={{ lg: 10 }}
        >
          <GridItem mt={4} mb={6}>
            <Heading
              as='h4'
              color='#0A083B'
              fontSize={{ base: 'md', lg: 'lg' }}
            >
              Verse One
            </Heading>
            <Text fontSize='lg' lineHeight='28px'>
              We lift our voice to thee, O Lord To Thee we sing with one accord
              To grant us through Thy Son Adored The will to shine as one.
            </Text>
          </GridItem>
          <GridItem mt={4} mb={6}>
            <Heading
              as='h4'
              color='#0A083B'
              fontSize={{ base: 'md', lg: 'lg' }}
            >
              Verse Two
            </Heading>
            <Text fontSize='lg' lineHeight='28px'>
              From Morning till the approach of Night With humble minds, with
              all our might We seek this gift which is Thy Light The will to
              shine as one.
            </Text>
          </GridItem>
          <GridItem mt={4} mb={6}>
            <Heading
              as='h4'
              color='#0A083B'
              fontSize={{ base: 'md', lg: 'lg' }}
            >
              Verse Three
            </Heading>
            <Text fontSize='lg' lineHeight='28px'>
              As all of us, or black or white Beseech Thee now us to unite That
              all may seek this gift Thy Light The will to shine as one.
            </Text>
          </GridItem>
          <GridItem mt={4} mb={6}>
            <Heading
              as='h4'
              color='#0A083B'
              fontSize={{ base: 'md', lg: 'lg' }}
            >
              Verse Four
            </Heading>
            <Text fontSize='lg' lineHeight='28px'>
              We beg thee now to show the way That all of us may kneel and pray
              And seek and keep from day to day The will to shine as one.
            </Text>
          </GridItem>
        </Grid>
        <Text
          textAlign='right'
          fontStyle='heading'
          fontWeight='semibold'
          fontSize='20px'
          color='#0A083B'
        >
          By Edward Chukwukere ’47
        </Text>
      </Box>
    </Container>
  )
}

export default SchoolAnthem
