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
      bgImg={{
        base: "url('images/bg-hero@1x.png')",
        lg: "url('images/bg-hero.png')"
      }}
      bgSize='cover'
      bgPos='center'
      bgRepeat='no-repeat'
      h={{ base: 95, lg: '43.438rem' }}
    >
      <Flex
        pr={{ md: '3.125rem', lg: '8.75rem' }}
        pl={{ md: '3.125rem', lg: '7.5rem' }}
        h={{ base: 95, lg: '43.438rem' }}
        bgColor='gcu.450'
        textColor='white'
        direction='column'
        align='center'
        justify={{ base: 'space-around', lg: 'center' }}
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
          <Center height={{ base: 10, lg: 16 }}>
            <Divider orientation='vertical' borderColor='white' />
          </Center>
          <Text
            letterSpacing='0.41em'
            fontSize={{ base: 'sm', lg: 'lg' }}
            mt={6}
          >
            WELCOME TO
          </Text>
          <Text
            fontSize={{ base: '1.875rem', lg: '5.313rem' }}
            lineHeight='shorter'
          >
            The Government College Umuahia
          </Text>
          <Center mt={6} height={10} d={{ base: 'flex', lg: 'none' }}>
            <Divider orientation='vertical' borderColor='white' />
          </Center>
        </Container>
        <Flex
          d={{ base: 'none', lg: 'flex' }}
          pos='absolute'
          right={32}
          top='35%'
        >
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
          border='1px'
          align='center'
          borderColor='white'
          justify='space-between'
          p={{ base: 4, lg: 10 }}
          left={{ base: 0, lg: 10 }}
          bottom={{ base: 0, lg: 5 }}
          pos={{ base: 'relative', lg: 'absolute' }}
        >
          <Text
            fontFamily='body'
            fontWeight='500'
            fontSize={{ base: 'sm', lg: 'lg' }}
          >
            Educating young boys to men since 1929
          </Text>
          <Icon
            as={ArrowBtnRightIcon}
            ml={4}
            color='transparent'
            boxSize={{ base: 6, lg: 10 }}
          />
        </Flex>
        <Flex
          d={{ base: 'none', lg: 'flex' }}
          p={10}
          right={10}
          bottom={5}
          pos='absolute'
        >
          <Text fontFamily='quote' fontWeight='500' fontSize='lg'>
            Excellence, integrity and leadership...
          </Text>
        </Flex>
      </Flex>
    </Box>
  )
}
