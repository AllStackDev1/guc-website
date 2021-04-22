import React from 'react'
import {
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

const CorePurpose = () => {
  return (
    <Grid
      py={{ xl: 10 }}
      pos='relative'
      align='center'
      justify='center'
      templateColumns={{ md: '55% 45%' }}
    >
      <GridItem
        p={20}
        d='flex'
        w='100%'
        h='100%'
        pos='relative'
        flexDir='column'
        textAlign='center'
        alignContent='center'
        justifyContent='center'
      >
        <Center height={16}>
          <Divider orientation='vertical' borderColor='gray.700' />
        </Center>
        <Text letterSpacing='0.41em' fontSize='lg' mt={6}>
          LIVING
        </Text>
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
          >
            DISCOVER MORE
          </Text>
        </Container>
      </GridItem>
      <GridItem d='flex' flexDir='column' textColor='white'>
        <Flex pos='relative' align='center'>
          <Heading
            pos='absolute'
            right={0}
            left={0}
            fontSize='45px'
            lineHeight='63px'
          >
            BOARDING
          </Heading>
          <Image src='/images/boarding.png' w='100%' h='100%' />
        </Flex>
        <Flex pos='relative' align='center'>
          <Heading
            pos='absolute'
            right={0}
            left={0}
            fontSize='45px'
            lineHeight='63px'
          >
            ENVIROMENT
          </Heading>
          <Image src='/images/enviroment.png' w='100%' h='100%' />
        </Flex>
      </GridItem>
    </Grid>
  )
}

export default CorePurpose
