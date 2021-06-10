import React from 'react'
import { Box, Flex, Text, Container, Heading, Image } from '@chakra-ui/react'

export default function Hero() {
  return (
    <Container
      d='flex'
      flexDir='column'
      textAlign='center'
      alignItems='center'
      maxW={{ base: 'full', xl: '7xl' }}
      px={{ base: 0, xl: 4 }}
      py={{ base: 10, lg: 24 }}
    >
      <Box px={{ base: 4, xl: 0 }} mb={{ base: 10, lg: 14 }} w={{ lg: 129 }}>
        <Heading mb={{ lg: 6 }} fontSize={{ base: '1.875rem', lg: '60px' }}>
          Alumni
        </Heading>
        <Text
          color='#6A7986'
          fontSize={{ base: 'sm', lg: '21px' }}
          lineHeight={{ lg: '32px' }}
        >
          Welcome to Government College Umuahia, a boarding school for boys aged
          between 13 and 18 and a world class residential all boys secondary
          school located on Ikot -Ekpene Road, Umuahia in Abia State which
          offers a combination of British and Nigerian curricula.
        </Text>
      </Box>
      <Flex
        pos='relative'
        bg='gcu.100'
        h={{ lg: 115 }}
        flexDir={{ base: 'column', xl: 'row' }}
      >
        <Box
          w={{ lg: '55%' }}
          p={{ base: 10, lg: 28 }}
          textAlign='left'
          color='white'
        >
          <Text fontSize={{ lg: 'sm' }}>STAY CONNECTED</Text>
          <Text
            fontFamily='heading'
            fontWeight='bold'
            fontSize={{ lg: '34px' }}
            my={{ base: 4, xl: 0 }}
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
        <Box pos={{ xl: 'absolute' }} top={24} right={16}>
          <Image
            pos='relative'
            w='full'
            h='full'
            src='/images/alumni-hero.png'
            alt='calendar img'
          />
        </Box>
      </Flex>
    </Container>
  )
}
