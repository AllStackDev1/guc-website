import React from 'react'
import { Flex, Text, Image, Container, Heading } from '@chakra-ui/react'

const PrincipalMessage = () => {
  return (
    <Container
      d='flex'
      maxW='7xl'
      py={{ lg: 14 }}
      justifyContent='space-between'
    >
      <Image src='/images/principal-2.png' />
      <Flex
        px={{ lg: 20 }}
        align='center'
        bgColor='#000'
        flexDir='column'
        justify='center'
        textColor='white'
        textAlign='center'
        py={{ base: 24, lg: 16 }}
      >
        <Heading
          as='h4'
          fontWeight='normal'
          fontSize={{ base: '2xl', lg: '2.125rem' }}
          lineHeight='45px'
          w={{ lg: 80 }}
        >
          A Message from the Principal
        </Heading>
        <Text mt={4} mb={6} fontSize='sm' lineHeight='25px'>
          The continent of Africa and the country of Nigeria is at a crossroads.
          We are at a time in history when we need inspired, ethical and
          responsible leadership.
        </Text>
        <Text mt={4} mb={6} fontSize='sm' lineHeight='25px'>
          First established in 1929 by Rev Robert Fisher, Government College
          Umuahia (GCU) is famous for having produced giants in the fields of
          politics, literature, economics and education to name but a few. It is
          upon the shoulders of these giants that we stand and introduce to you
          the new GCU. The passion and values instilled in the Old Boys has
          driven them to rebuild their Alma Mater to create a 21st century
          school to develop 21st century skills. I am both humbled and proud to
          be part of such an ambitious and life changing project.
        </Text>
        <Text mt={4} mb={6} fontSize='sm' lineHeight='25px'>
          If these values resonate with you, then GCU is the institution for
          you. The core focus of GCU will be the pursuit of excellence. This
          will cut across academics, sport, social skills, as well as developing
          good morals and values in the young men of GCU. Our aim is that all
          students achieve beyond their potential and become lifelong learners,
          able to take their place as Global Citizens in International
          Communities around the world.
        </Text>
      </Flex>
    </Container>
  )
}

export default PrincipalMessage
