import React from 'react'
import {
  Box,
  Flex,
  Link,
  Container,
  Text,
  Icon,
  Heading
} from '@chakra-ui/react'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
    <Flex
      mt={8}
      py={{ xl: 10 }}
      pos='relative'
      justify='space-between'
      align='flex-end'
    >
      <Container
        pt={10}
        d='flex'
        maxW='7xl'
        align='center'
        borderTop='1px'
        justify='center'
        borderColor='gray.400'
        flexDirection='column'
        fontFamily='heading'
      >
        <Box mx='auto' bgImage="url('/images/logo.svg')" w='7.5rem' h={32} />

        <Heading
          w={125}
          as='h4'
          mx='auto'
          fontWeight='bold'
          fontSize='54px'
          lineHeight='72px'
        >
          <Text as='span' color='gcu.100'>
            “Your Journey
          </Text>{' '}
          of a life time begins{' '}
          <Text as='span' color='gcu.100'>
            here”
          </Text>
        </Heading>
        <Flex
          fontFamily='body'
          fontSize='lg'
          mx='auto'
          mt='24'
          w={125}
          justify='space-between'
        >
          <Text>Terms & Condition</Text>
          <Text>Privacy</Text>
          <Text>FAQ</Text>
          <Text>Careers</Text>
        </Flex>

        <Flex
          fontFamily='body'
          fontSize='lg'
          mx='auto'
          borderTop='1px'
          borderColor='gray.400'
          mt={10}
          pt={10}
          w='100%'
          align='center'
          justify='space-between'
        >
          <Text fontFamily='heading' fontSize='md' fontWeight='bold'>
            © 2021 GCU. All rights reserved
          </Text>
          <Flex align='center'>
            <Text
              color='gcu.100'
              fontFamily='heading'
              fontSize='sm'
              fontWeight='bold'
              mr={10}
            >
              Follow us
            </Text>

            <Link
              isExternal
              href='https://www.facebook.com/GCUOBANational'
              rel='noreferrer'
            >
              <Icon as={FaFacebook} color='gray.500' boxSize={6} />
            </Link>

            <Link
              mx={8}
              isExternal
              href='https://www.twitter.com/gcumuahia'
              rel='noreferrer'
            >
              <Icon as={FaTwitter} color='gray.500' boxSize={6} />
            </Link>
            <Link
              isExternal
              href='https://www.instagram.com/gcu.umuahia'
              rel='noreferrer'
            >
              <Icon as={FaInstagram} color='gray.500' boxSize={6} />
            </Link>
          </Flex>
        </Flex>
      </Container>
    </Flex>
  )
}

export default Footer
