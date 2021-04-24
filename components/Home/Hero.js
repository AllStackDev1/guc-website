import React from 'react'
import {
  Flex,
  Box,
  Icon,
  Text,
  Center,
  Divider,
  Container
} from '@chakra-ui/react'
import { ScrollDown, ArrowBtnRightIcon } from '@theme/Icons'

export default function Hero() {
  return (
    <Box
      bg={"url('images/bg-hero.png')"}
      bgSize='cover'
      bgPos='center'
      bgRepeat='no-repeat'
      h='43.438rem'
    >
      <Flex
        pr={{ md: '3.125rem', xl: '8.75rem' }}
        pl={{ md: '3.125rem', xl: '7.5rem' }}
        bgColor='gcu.450'
        textColor='white'
        h='43.438rem'
        direction='column'
        align='center'
        justify='center'
        pos='relative'
      >
        <Container
          d='flex'
          maxW='7xl'
          align='center'
          flexDirection='column'
          justify='center'
          fontFamily='heading'
        >
          <Center height={16}>
            <Divider orientation='vertical' borderColor='white' />
          </Center>

          <Text letterSpacing='0.41em' fontSize='lg' mt={6}>
            WELCOME TO
          </Text>
          <Text fontSize='85px' lineHeight='shorter'>
            The Government College Umuahia
          </Text>
        </Container>
        <Flex pos='absolute' top='35%' right={32}>
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
            <Box as={ScrollDown} mt={2} boxSize={10} />
          </Text>
        </Flex>
        <Flex
          p={10}
          left={10}
          bottom={5}
          border='1px'
          pos='absolute'
          justify='space-between'
          borderColor='white'
        >
          <Text fontFamily='body' fontWeight='500' fontSize='lg'>
            Educating young boys to men since 1929
            <Icon
              as={ArrowBtnRightIcon}
              ml={4}
              color='transparent'
              boxSize={10}
            />
          </Text>
        </Flex>
        <Flex p={10} right={10} bottom={5} pos='absolute'>
          <Text fontFamily='quote' fontWeight='500' fontSize='lg'>
            Excellence, integrity and leadership...
          </Text>
        </Flex>
      </Flex>
    </Box>
  )
}
