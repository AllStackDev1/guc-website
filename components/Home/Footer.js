import React from 'react'
import { Box, Flex, Container, Text, Icon, Heading } from '@chakra-ui/react'
import { FacebookIcon, InstaIcon, YouTubeIcon } from '@theme/Icons'

const Footer = () => {
  return (
    <Flex
      mt={8}
      p={32}
      py={{ xl: 10 }}
      pos='relative'
      justify='space-between'
      align='flex-end'
    >
      <Container
        py={10}
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
          mt='24'
          w='100%'
          align='center'
          justify='space-between'
        >
          <Text>© 2021 GCU. All rights reserved</Text>
          <Flex align='center'>
            <Text mr={10}>Follow us</Text>

            <Icon as={FacebookIcon} boxSize={6} />
            <Icon mx={10} as={YouTubeIcon} boxSize={6} />
            <Icon as={InstaIcon} boxSize={6} />
          </Flex>
        </Flex>
      </Container>
    </Flex>
  )
}

export default Footer
