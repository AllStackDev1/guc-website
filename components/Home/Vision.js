import React from 'react'
import {
  Box,
  Flex,
  Text,
  Grid,
  Image,
  Center,
  GridItem,
  Container,
  Divider,
  Heading
} from '@chakra-ui/react'

const Vision = () => {
  return (
    <Grid
      py={{ xl: 10 }}
      pos='relative'
      align='center'
      justify='center'
      templateColumns={{ md: '35% 65%' }}
    >
      <GridItem>
        <Image src='/images/student.png' w='100%' h='100%' />
      </GridItem>
      <GridItem>
        <Box
          p={20}
          w='100%'
          h='100%'
          color='white'
          textAlign='center'
          bgColor='gcu.100'
          pos='relative'
        >
          <Center height={16}>
            <Divider orientation='vertical' borderColor='white' />
          </Center>
          <Container
            mt={8}
            d='flex'
            maxW='2xl'
            align='center'
            justify='center'
            flexDirection='column'
          >
            <Heading
              as='h4'
              fontWeight='normal'
              fontSize='45px'
              lineHeight='63px'
            >
              Vision Statement
            </Heading>
            <Text fontSize='sm' lineHeight='25px' mt={5} mb={6}>
              Rooted in the legacy of the old Government College Umuahia, the
              modern GCU offers an internationally minded educational programme
              driven by a well-informed, highly educated and experienced
              leadership which has the capacity to improve and develop students
              so that they have an enquiring mind, a stable character, and the
              focus and determination to achieve national and international
              excellence.
            </Text>
            <Text
              fontFamily='body'
              letterSpacing='4px'
              fontWeight={600}
              fontSize='sm'
            >
              LEARN MORE
            </Text>
          </Container>
          <Flex mt={20} align='center'>
            <Image src='/images/arrow_left.png' />
            <Flex w='100%' mx={5} justify='center' align='center'>
              <Box w='20%' bgColor='white' border='1px' h={1} />
              <Box w='80%' border='1px' h={1} />
            </Flex>
            <Image src='/images/arrow_right.png' />
          </Flex>
        </Box>

        <Box
          w={124}
          h={130}
          top='-25%'
          pos='absolute'
          bgSize='cover'
          bgPos='center'
          bgRepeat='no-repeat'
          bgImage="url('/images/snake.png')"
        />
        <Box
          w={124}
          h={130}
          top='-32%'
          right='-10%'
          pos='absolute'
          bgSize='cover'
          bgPos='center'
          bgRepeat='no-repeat'
          bgImage="url('/images/snake.png')"
        />
      </GridItem>
    </Grid>
  )
}

export default Vision
