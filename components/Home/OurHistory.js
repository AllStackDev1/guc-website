import React from 'react'
import {
  Box,
  Flex,
  Text,
  Grid,
  Image,
  Center,
  Button,
  Divider,
  Heading,
  GridItem,
  Container
} from '@chakra-ui/react'

const OurHistory = () => {
  const [state, setState] = React.useState(0)

  const slider = [
    {
      val: 50,
      img: require('/public/images/robert-fisher.jpeg'),
      text: `Robert Fisher arrived in Umuahia in 1927, on January 29, 1929 he
      opened the gates of the school to 25 students drawn from all parts
      of Nigeria and West Africa, but with catchment in Eastern Nigeria,
      and the Southern Cameroons. Government College Umuahia began in
      1929 as a teacher training institute and in 1930, converted to a
      secondary school. Fisher ran this school until 1939 when, at the
      start of the Second World war, he left for England on retirement
      and was replaced by W. N. Tolfree.`
    },
    {
      val: 100,
      img: require('/public/images/cricket.jpeg'),
      text: `<p>For the first forty years of her existence, Government College Umuahia was a beacon of excellence and source of pride to Umuahia, the eastern region and Nigeria at large.</p>
      <p>In 2014, the Fisher Educational Development Trust was set up to take private ownership of Government College Umuahia, with fresh minds that have been working to resuscitate and refurbish the buildings, facilities, physical environment.</p>
      `
    }
  ]

  const handleNext = () => {
    if (state + 1 < slider.length) {
      setState(prev => prev + 1)
    }
  }

  const handleBack = () => {
    if (state - 1 >= 0) {
      setState(prev => prev - 1)
    }
  }

  const btnStyle = {
    bg: 'unset',
    _hover: { bg: 'unset' },
    zIndex: 1000
  }

  const { val, img, text } = slider[state]

  return (
    <Grid
      py={{ xl: 10 }}
      pos='relative'
      align='center'
      justify='center'
      templateColumns={{
        md: `${state !== 2 ? '35' : '40'}% ${state !== 2 ? '65' : '60'}%`
      }}
    >
      <GridItem bg='red' d={{ base: 'none', md: 'block' }} w='100%' h='100%'>
        <Image src={img} w='100%' h='100%' />
      </GridItem>
      <GridItem>
        <Box
          w='100%'
          h='100%'
          color='white'
          textAlign='center'
          bgColor='gcu.100'
          pos='relative'
          pb={20}
          pt={{ base: 10, lg: 20 }}
          px={{ base: 0, lg: 20 }}
        >
          <Center height={{ base: 10, lg: 16 }}>
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
              fontSize={{ base: '2xl', lg: '2.813rem' }}
              lineHeight={{ base: '35px', lg: '63px' }}
              letterSpacing={{ base: '0.03em' }}
            >
              Our History
            </Heading>
            <Text
              fontSize='sm'
              lineHeight='25px'
              mt={5}
              mb={6}
              dangerouslySetInnerHTML={{ __html: text }}
            />
          </Container>
          <Flex mt={20} px={{ base: 5, lg: 0 }} align='center'>
            <Button {...btnStyle} onClick={_ => handleBack()}>
              <Image src='/images/arrow_left.png' />
            </Button>
            <Flex w='100%' mx={5} justify='center' align='center'>
              <Box w={val + '%'} bgColor='white' border='1px' h={1} />
              <Box w={100 - val + '%'} border='1px' h={1} />
            </Flex>
            <Button {...btnStyle} onClick={_ => handleNext()}>
              <Image src='/images/arrow_right.png' />
            </Button>
          </Flex>
        </Box>

        <Box
          w={124}
          h={130}
          top={{ base: '0', lg: '-25%' }}
          left={{ base: '-15%', lg: 'unset' }}
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
          d={{ base: 'none', md: 'block' }}
          bgImage="url('/images/snake.png')"
        />
      </GridItem>
    </Grid>
  )
}

export default OurHistory
