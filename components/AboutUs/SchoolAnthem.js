import React from 'react'
import { Box, Text, Container, Heading, Grid, GridItem } from '@chakra-ui/react'

const SchoolAnthem = () => {
  return (
    <Container
      d='flex'
      maxW='7xl'
      bgColor='#FDF9F9'
      py={{ base: 6, lg: 20 }}
      px={{ base: 4, lg: 10 }}
      alignItems={{ base: 'center', xl: 'flex-start' }}
      flexDir={{ base: 'column', xl: 'row' }}
      justifyContent={{ xl: 'space-between' }}
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
        <Heading
          as='h4'
          color='#0A083B'
          mt={{ base: 4, xl: 0 }}
          fontSize={{ base: 'md', lg: '2xl' }}
        >
          THE WILL TO SHINE AS ONE
        </Heading>
        <Grid
          gap={4}
          color='#64646C'
          mb={{ lg: 10 }}
          templateColumns={{ xl: 'repeat(2, 1fr)' }}
        >
          <GridItem mt={6}>
            <Heading as='h4' color='#0A083B' fontSize='lg'>
              Verse One
            </Heading>
            <Text fontSize='lg' lineHeight='28px'>
              We lift our voice to thee, O Lord To Thee we sing with one accord
              To grant us through Thy Son Adored The will to shine as one.
            </Text>
          </GridItem>
          <GridItem mt={6}>
            <Heading as='h4' color='#0A083B' fontSize='lg'>
              Verse Two
            </Heading>
            <Text fontSize='lg' lineHeight='28px'>
              From Morning till the approach of Night With humble minds, with
              all our might We seek this gift which is Thy Light The will to
              shine as one.
            </Text>
          </GridItem>
          <GridItem mt={6}>
            <Heading as='h4' color='#0A083B' fontSize='lg'>
              Verse Three
            </Heading>
            <Text fontSize='lg' lineHeight='28px'>
              As all of us, or black or white Beseech Thee now us to unite That
              all may seek this gift Thy Light The will to shine as one.
            </Text>
          </GridItem>
          <GridItem mt={6}>
            <Heading as='h4' color='#0A083B' fontSize='lg'>
              Verse Four
            </Heading>
            <Text fontSize='lg' lineHeight='28px'>
              We beg thee now to show the way That all of us may kneel and pray
              And seek and keep from day to day The will to shine as one.
            </Text>
          </GridItem>
        </Grid>
        <Text
          color='#0A083B'
          fontStyle='heading'
          fontWeight='semibold'
          mt={{ base: 4, xl: 0 }}
          fontSize={{ base: 'sm', xl: '20px' }}
          textAlign={{ base: 'center', xl: 'right' }}
        >
          By Edward Chukwukere ’47
        </Text>
      </Box>
    </Container>
  )
}

export default SchoolAnthem
