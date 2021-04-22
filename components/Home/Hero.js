import React from 'react'
import { Flex, Box, Text, Center, Divider, Container } from '@chakra-ui/react'
import { ScrollDown } from 'theme/Icons'

export default function Hero() {
  return (
    <Flex
      pr={{ md: '3.125rem', xl: '8.75rem' }}
      pl={{ md: '3.125rem', xl: '7.5rem' }}
      bg={"url('images/bg-hero.png')"}
      bgSize='cover'
      bgPos='center'
      textColor='white'
      bgRepeat='no-repeat'
      minH='100vh'
      direction='column'
    >
      <Container
        maxW='7xl'
        d='flex'
        mt={64}
        align='center'
        flexDirection='column'
        justify='center'
        fontFamily='heading'
      >
        <Center height={16}>
          <Divider orientation='vertical' borderColor='white' />
        </Center>

        <Text fontSize='lg' mt={3}>
          WELCOME TO
        </Text>
        <Text fontSize='85px' lineHeight='shorter'>
          The Government College Umuahia
        </Text>
      </Container>
      <Flex pos='absolute' top='40%' right={20}>
        <Text
          fontFamily='heading'
          fontSize='md'
          letterSpacing='6px'
          textTransform='uppercase'
          style={{
            textOrientation: 'sideways-right',
            writingMode: 'vertical-rl'
          }}
        >
          Scroll to see more
          <Box as={ScrollDown} mt={2} boxSize={8} />
        </Text>
      </Flex>
    </Flex>
  )
}
