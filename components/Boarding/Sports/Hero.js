import React from 'react'
import { Flex, Text, Container, Heading, Image } from '@chakra-ui/react'

export default function Hero() {
  return (
    <Container
      d='flex'
      maxW='7xl'
      flexDir='column'
      textAlign='center'
      alignItems='center'
      py={{ base: 0, lg: 24 }}
    >
      <Flex
        flexDir='column'
        align='center'
        justify='center'
        mb={{ base: 4, lg: 14 }}
      >
        <Heading
          w={{ base: '80%', lg: 125 }}
          mb={{ base: 4, lg: 6 }}
          fontSize={{ base: '1.5rem', lg: '60px' }}
        >
          Why sports are important
        </Heading>
        <Text
          textAlign={{ base: 'justify', lg: 'inherit' }}
          color='#6A7986'
          fontSize={{ base: 'sm', lg: '21px' }}
          lineHeight={{ lg: '32px' }}
        >
          Government College Umuahia believes that the health of a human being
          is a state of complete harmony of the body, mind and spirit. We
          believe that sports provide children with the required skills they
          need to live a healthy lifestyle while influencing their physical and
          mental development. Sports activities are essential to us because they
          teach our students lifelong qualities such as endurance, leadership,
          teamwork, and social skills as well increases their levels of
          confidence, self-esteem and self-worth.
        </Text>
      </Flex>
      <Image
        w='full'
        h='full'
        alt='calendar img'
        src={require('/public/images/sport-hero.png')}
      />
    </Container>
  )
}
