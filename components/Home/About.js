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
      py={{ xl: 10 }}
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
        <Center height={16}>
          <Divider orientation='vertical' borderColor='gray.700' />
        </Center>

        <Text letterSpacing='0.41em' fontSize='lg' my={6}>
          EXPLORE
        </Text>
        <Heading as='h4' fontWeight='normal' fontSize='42px' lineHeight='35px'>
          About GCU
        </Heading>
        <Text
          textAlign='center'
          fontFamily='body'
          fontSize='lg'
          lineHeight='35px'
          my={12}
        >
          Welcome to Government College Umuahia, a boarding school for boys aged
          between 10 and 17 and a world class residential all boys secondary
          school located on Ikot - Ekpene Road, Umuahia in Abia State which
          offers a combination of British and Nigerian curricula.
        </Text>
        <Text
          fontFamily='body'
          letterSpacing='4px'
          fontWeight={600}
          fontSize='sm'
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
