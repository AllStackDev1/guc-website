import React from 'react'
import NextLink from 'next/link'
import {
  Box,
  Flex,
  Link,
  Text,
  Icon,
  Image,
  Heading,
  Divider,
  Container
} from '@chakra-ui/react'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'
import { Timeline } from 'react-twitter-widgets'

const Footer = () => {
  return (
    <Flex
      mt={8}
      as='footer'
      py={{ xl: 10 }}
      pos='relative'
      justify='space-between'
      align='flex-end'
    >
      <Container
        d='flex'
        maxW='7xl'
        align='center'
        justify='center'
        flexDirection='column'
        fontFamily='heading'
      >
        <Divider borderColor='gray.400' mb={8} />

        <Image
          mx='auto'
          src='/images/logo.svg'
          w={{ base: '5.438rem', lg: '7.5rem' }}
          h={{ base: '5.313rem', lg: 32 }}
        />

        <Heading
          as='h4'
          w={{ lg: 130 }}
          fontWeight='bold'
          mx={{ lg: 'auto' }}
          textAlign={{ base: 'left', md: 'center' }}
          fontSize={{ base: '2rem', lg: '3.375rem' }}
          lineHeight={{ base: '51px', lg: '72px' }}
        >
          <Text as='span' color='gcu.100'>
            “Your Journey
          </Text>{' '}
          of a life time begins{' '}
          <Text as='span' color='gcu.100'>
            here”
          </Text>
        </Heading>

        <Box mx='auto' my={{ base: 6, lg: 20 }} w={{ lg: 110 }}>
          <Timeline
            tweetId='1381539509834252289'
            dataSource={{
              sourceType: 'profile',
              screenName: 'gcumuahia'
            }}
            options={{ height: '400' }}
            renderError={_err => {
              return <Text>Could not load timeline</Text>
            }}
          />
        </Box>

        <Flex
          fontFamily='body'
          fontSize='lg'
          mx={{ md: 'auto' }}
          w={{ md: 125 }}
          h={{ base: 52, md: 'unset' }}
          flexDir={{ base: 'column', md: 'row' }}
          justify='space-between'
          align={{ base: 'flex-start', md: '' }}
        >
          <NextLink href='#' passHref>
            <Link _focus={{ outline: 'none' }} _hover={{ outline: 'none' }}>
              Terms & Condition
            </Link>
          </NextLink>
          <NextLink href='#' passHref>
            <Link _focus={{ outline: 'none' }} _hover={{ outline: 'none' }}>
              Privacy
            </Link>
          </NextLink>
          <NextLink href='#' passHref>
            <Link _focus={{ outline: 'none' }} _hover={{ outline: 'none' }}>
              FAQ
            </Link>
          </NextLink>
          <NextLink href='#' passHref>
            <Link _focus={{ outline: 'none' }} _hover={{ outline: 'none' }}>
              Careers
            </Link>
          </NextLink>
        </Flex>

        <Flex
          mt={10}
          w='100%'
          mx={{ lg: 'auto' }}
          fontSize='lg'
          align='center'
          borderTop='1px'
          fontFamily='body'
          borderColor='gray.400'
          justify='space-between'
          pt={{ base: 5, lg: 10 }}
          flexDir={{ base: 'column-reverse', lg: 'row' }}
        >
          <Text
            my={{ base: 4, lg: 'unset' }}
            fontFamily='heading'
            fontSize='md'
            fontWeight='bold'
            textColor='gcu.500'
          >
            © {new Date().getFullYear()} GCU. All rights reserved
          </Text>
          <Flex
            w={{ base: '100%', lg: 'unset' }}
            justify={{ base: 'space-between', lg: 'unset' }}
            align='center'
          >
            <Text
              color='gcu.100'
              fontFamily='heading'
              fontSize={{ base: 'md', lg: 'sm' }}
              fontWeight='bold'
              mr={10}
            >
              Follow us
            </Text>

            <Flex>
              <Link
                isExternal
                href='https://www.facebook.com/GCUOBANational'
                rel='noreferrer'
              >
                <Icon as={FaFacebook} color='#ADADAD' boxSize={6} />
              </Link>
              <Link
                mx={8}
                isExternal
                href='https://www.twitter.com/gcumuahia'
                rel='noreferrer'
              >
                <Icon as={FaTwitter} color='#ADADAD' boxSize={6} />
              </Link>
              <Link
                isExternal
                href='https://www.instagram.com/gcu.umuahia'
                rel='noreferrer'
              >
                <Icon as={FaInstagram} color='#ADADAD' boxSize={6} />
              </Link>
            </Flex>
          </Flex>
        </Flex>
      </Container>
    </Flex>
  )
}

export default Footer
