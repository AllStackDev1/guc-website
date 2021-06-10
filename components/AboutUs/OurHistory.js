import React from 'react'
import { Box, Text, Container, Heading, Flex } from '@chakra-ui/react'

const OurHistory = () => {
  return (
    <Container
      d='flex'
      maxW='7xl'
      py={{ base: 6, lg: 10 }}
      px={{ base: 4, lg: 14 }}
      alignItems={{ base: 'center', xl: 'flex-start' }}
      flexDir={{ base: 'column', xl: 'row' }}
      justifyContent={{ xl: 'space-between' }}
    >
      <Heading
        as='h4'
        color='#0A083B'
        fontWeight='normal'
        fontSize={{ base: '2xl', lg: '42px' }}
        lineHeight={{ base: 'short', xl: '59px' }}
      >
        OUR HISTORY
      </Heading>
      <Box w={{ lg: '60%' }}>
        <Text
          mt={4}
          mb={6}
          fontSize={{ base: 'sm', xl: 'lg' }}
          lineHeight='28px'
        >
          We’re a fully distributed team of 97 people living and working in 12
          countries around the world. And we’re working to build the best
          products to help our customers build their brands and grow their
          businesses on social media.
        </Text>
        <Text
          mt={4}
          mb={6}
          fontSize={{ base: 'sm', xl: 'lg' }}
          lineHeight='28px'
        >
          We’ve always aimed to do things a little differently at Oval. Since
          the early days, we’ve had a focus on building one of the most unique
          and fulfilling workplaces by rethinking a lot of traditional
          practices.
        </Text>
        <Text
          mt={4}
          mb={6}
          fontSize={{ base: 'sm', xl: 'lg' }}
          lineHeight='28px'
        >
          A commitment to supporting our team and our customers has helped Oval
          grow from humble beginnings to now serving more than 73,000 customers.
          Our passion for making meaningful connections flows through everything
          we do.
        </Text>
        <Text
          mt={4}
          mb={6}
          fontSize={{ base: 'sm', xl: 'lg' }}
          lineHeight='28px'
        >
          We care about building a quality product, trusted relationships with
          our customers, and a sense of community that connects our customers
          and team with one another.
        </Text>

        <Flex
          mb={{ lg: 14 }}
          lineHeight='59px'
          fontSize='48px'
          color='gcu.100'
          justify='space-between'
          align={{ base: 'center', xl: 'initial' }}
          flexWrap={{ base: 'wrap', xl: 'nowrap' }}
        >
          <Box
            w={{ base: '50%', xl: '25%' }}
            mb={{ base: 3, xl: 0 }}
            lineHeight='28px'
          >
            <Text as='h2'>10</Text>
            <Text mt={-10} as='span' fontSize={{ base: 'sm', xl: 'lg' }}>
              Years experience
            </Text>
          </Box>
          <Box w={{ base: '50%', xl: '25%' }} lineHeight='28px'>
            <Text as='h2'>2K+</Text>
            <Text as='span' fontSize={{ base: 'sm', xl: 'lg' }}>
              Projects
            </Text>
          </Box>
          <Box w={{ base: '50%', xl: '25%' }} lineHeight='28px'>
            <Text as='h2'>70K</Text>
            <Text as='span' fontSize={{ base: 'sm', xl: 'lg' }}>
              Clients
            </Text>
          </Box>
          <Box w={{ base: '50%', xl: '25%' }} lineHeight='28px'>
            <Text as='h2'>80+</Text>
            <Text as='span' fontSize={{ base: 'sm', xl: 'lg' }}>
              Experts in place
            </Text>
          </Box>
        </Flex>
      </Box>
    </Container>
  )
}

export default OurHistory
