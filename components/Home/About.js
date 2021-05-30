import React from 'react'
import {
  Box,
  Flex,
  Text,
  Center,
  Divider,
  Container,
  Heading
} from '@chakra-ui/react'

const About = () => {
  return (
    <Flex
      id='about-us'
      py={{ base: 16, xl: 10 }}
      pos='relative'
      align='center'
      justify='center'
      direction='column'
      pr={{ md: '3.125rem', xl: '8.75rem' }}
      pl={{ md: '3.125rem', xl: '7.5rem' }}
    >
      <Container
        d='flex'
        maxW='4xl'
        align='center'
        textColor='gcu.500'
        flexDirection='column'
        justify='center'
        fontFamily='heading'
      >
        <Center height={{ base: 10, lg: 16 }}>
          <Divider orientation='vertical' borderColor='gray.700' />
        </Center>

        <Text
          letterSpacing='0.41em'
          fontSize={{ base: 'sm', lg: 'lg' }}
          my={{ base: 4, lg: 6 }}
        >
          EXPLORE
        </Text>
        <Heading
          as='h4'
          fontWeight='normal'
          fontSize={{ base: '2xl', lg: '2.625rem' }}
          lineHeight='35px'
        >
          About GCU
        </Heading>
        <Text
          textAlign='center'
          fontFamily='body'
          fontWeight={{ base: '300', lg: 'normal' }}
          fontSize={{ base: 'xs', lg: 'lg' }}
          lineHeight={{ base: '24px', lg: '35px' }}
          my={{ base: 6, lg: 12 }}
        >
          Welcome to Government College Umuahia, a boarding school for boys aged
          between 10 and 17. A world class residential all boys secondary school
          located on Ikot - Ekpene Road, Umuahia in Abia State, which offers a
          combination of British and Nigerian curricula.
        </Text>
        <Text
          fontFamily='body'
          letterSpacing='4px'
          fontWeight={600}
          fontSize='sm'
          d='none'
          color='gcu.100'
        >
          DISCOVER MORE
        </Text>
      </Container>
      <Box
        w={138}
        h={129.5}
        top='55%'
        pos='absolute'
        bgSize='cover'
        bgPos='center'
        bgRepeat='no-repeat'
        bgImage="url('/images/CrestArrows.png')"
      />
    </Flex>
  )
}

export default About
