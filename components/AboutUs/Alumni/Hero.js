import React from 'react'
import { Box, Flex, Text, Container, Heading, Image } from '@chakra-ui/react'

export default function Hero() {
  return (
    <Container
      d='flex'
      maxW='7xl'
      flexDir='column'
      textAlign='center'
      alignItems='center'
      py={{ base: 8, lg: 24 }}
    >
      <Box mb={{ base: 4, lg: 14 }} w={{ lg: 129 }}>
        <Heading mb={{ lg: 6 }} fontSize={{ base: '1.5rem', lg: '60px' }}>
          Alumni
        </Heading>
        <Text
          color='#6A7986'
          fontSize={{ base: 'sm', lg: '21px' }}
          lineHeight={{ lg: '32px' }}
        >
          The College enjoys deep connections with its alumni and looks forward
          to hosting its annual reunions. Great reunions rely on the domino
          effect – one person contacting another, contacting another, contacting
          another.
        </Text>
      </Box>
      <Flex pos='relative' bg='gcu.100' h={{ lg: 115 }}>
        <Box w={{ lg: '55%' }} p={{ lg: 28 }} textAlign='left' color='white'>
          <Text fontSize={{ lg: 'sm' }}>STAY CONNECTED</Text>
          <Text
            fontFamily='heading'
            fontWeight='bold'
            fontSize={{ lg: '34px' }}
          >
            Update your details
          </Text>
          <Text
            fontSize={{ base: 'sm', lg: '21px' }}
            lineHeight={{ lg: '32px' }}
          >
            The College enjoys deep connections with its alumni and looks
            forward to hosting its annual reunions. Great reunions rely on the
            domino effect – one person contacting another, contacting another,
            contacting another.
          </Text>
        </Box>
        <Box pos='absolute' top={24} right={16}>
          <Image
            pos='relative'
            src='/images/alumni-hero.png'
            alt='calender img'
          />
        </Box>
      </Flex>
    </Container>
  )
}
