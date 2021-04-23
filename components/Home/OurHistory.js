import React from 'react'
import PropTypes from 'prop-types'
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

const OurHistory = ({ handleModal }) => {
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
              Our History
            </Heading>
            <Text fontSize='sm' lineHeight='25px' mt={5} mb={6}>
              Robert Fisher arrived in Umuahia in 1927, on January 29, 1929 he
              opened the gates of the school to 25 students drawn from all parts
              of Nigeria and West Africa, but with catchment in Eastern Nigeria,
              and the Southern Cameroons The Government College Umuahia began in
              1929 as a teacher training institute and in 1930, converted to a
              secondary school. Fisher ran this school until 1939 when, at the
              start of the Second World war, he left for England on retirement
              and was replaced by W. N. Tolfree.
            </Text>
            <Text
              fontFamily='body'
              letterSpacing='4px'
              fontWeight={600}
              fontSize='sm'
              cursor='pointer'
              zIndex={1000}
              onClick={() => handleModal('history')}
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

OurHistory.propTypes = {
  handleModal: PropTypes.func.isRequired
}

export default OurHistory
