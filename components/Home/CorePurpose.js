import React from 'react'
import PropTypes from 'prop-types'
import {
  Box,
  Flex,
  Text,
  Grid,
  Center,
  GridItem,
  Container,
  Divider,
  Heading
} from '@chakra-ui/react'

const CorePurpose = ({ handleModal }) => {
  return (
    <Grid
      py={{ xl: 10 }}
      pos='relative'
      align='center'
      justify='center'
      templateColumns={{ md: '55% 45%' }}
    >
      <GridItem
        d='flex'
        w='100%'
        h='100%'
        pos='relative'
        flexDir='column'
        textAlign='center'
        alignContent='center'
        justifyContent='center'
        pt={{ lg: 20 }}
        pb={{ base: 8, lg: 20 }}
        px={{ base: 0, lg: 20 }}
      >
        <Container
          mt={8}
          d='flex'
          maxW='2xl'
          align='center'
          justify='center'
          flexDirection='column'
        >
          <Center height={{ base: 10, lg: 16 }}>
            <Divider orientation='vertical' borderColor='gray.700' />
          </Center>
          <Text
            letterSpacing='0.41em'
            fontSize={{ base: 'sm', lg: 'lg' }}
            my={{ base: 4, lg: 6 }}
          >
            LIVING
          </Text>
          <Heading
            as='h4'
            fontWeight='normal'
            fontSize={{ base: '2xl', lg: '2.625rem' }}
            lineHeight='35px'
          >
            Core GCU Purpose
          </Heading>
          <Text fontSize='sm' lineHeight='25px' mt={5} mb={6}>
            The educational purpose of GCU is embodied in a programme of
            intellectual, moral, emotional, physical, aesthetic, spiritual and
            social development. The school inculcates qualities of scholarship,
            honesty, justice and respect for others.
          </Text>
          <Text
            fontFamily='body'
            color='gcu.100'
            fontWeight={600}
            fontSize='sm'
            d='none'
          >
            DISCOVER MORE
          </Text>
        </Container>
      </GridItem>
      <GridItem d='flex' flexDir='column' textColor='white'>
        <Box
          h={85}
          bgSize='cover'
          bgPos='center'
          bgRepeat='no-repeat'
          bgImage={{
            base: "url('/images/vision@1x.png')",
            lg: "url('/images/vision.png')"
          }}
        >
          <Flex
            align='center'
            flexDir='column'
            justify='center'
            w='100%'
            h='100%'
            bg='gcu.450'
          >
            <Heading
              fontSize='45px'
              w={{ base: '70%', md: '100%' }}
              lineHeight={{ base: '42px', lg: '63px' }}
            >
              Vision Statement
            </Heading>
            <Text
              mt={{ base: 3, lg: 2 }}
              fontFamily='body'
              letterSpacing='4px'
              fontWeight={600}
              fontSize='sm'
              cursor='pointer'
              zIndex={1000}
              onClick={() => handleModal('vision')}
            >
              LEARN MORE
            </Text>
          </Flex>
        </Box>

        <Box
          h={85}
          bgSize='cover'
          bgPos='center'
          bgRepeat='no-repeat'
          bgImage={{
            base: "url('/images/mision@1x.png')",
            lg: "url('/images/mision.png')"
          }}
        >
          <Flex
            align='center'
            flexDir='column'
            justify='center'
            w='100%'
            h='100%'
            bg='gcu.450'
          >
            <Heading
              fontSize='45px'
              w={{ base: '70%', md: '100%' }}
              lineHeight={{ base: '42px', lg: '63px' }}
            >
              Mission Statement
            </Heading>
            <Text
              mt={{ base: 3, lg: 2 }}
              fontFamily='body'
              letterSpacing='4px'
              fontWeight={600}
              fontSize='sm'
              cursor='pointer'
              zIndex={1000}
              onClick={() => handleModal('mission')}
            >
              LEARN MORE
            </Text>
          </Flex>
        </Box>
      </GridItem>
    </Grid>
  )
}

CorePurpose.propTypes = {
  handleModal: PropTypes.func.isRequired
}

export default CorePurpose
