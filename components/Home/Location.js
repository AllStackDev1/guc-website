import React from 'react'
import { Box, Grid, GridItem, Image, Text, Heading } from '@chakra-ui/react'

const Location = () => {
  return (
    <Box py={{ base: 16, lg: 28 }} px={{ base: 8, lg: 40 }}>
      <Heading
        as='h4'
        textColor='gcu.100'
        fontWeight='normal'
        letterSpacing='0.03em'
        fontSize='5xl'
        lineHeight='52px'
      >
        State of the art facilities
      </Heading>
      {/* <Text w={{ lg: 115 }} mt={4} fontSize='md' lineHeight='32px'>
        State of the art facilities
      </Text> */}
      <Grid
        w='100%'
        mt={8}
        templateRows={{ lg: 'repeat(3, 1fr)' }}
        templateColumns={{ lg: '55% 40%' }}
        columnGap={10}
      >
        <GridItem rowSpan={3} colSpan={1}>
          <Image
            src='/images/Class-Room-Block-A.png'
            w={{ lg: '686' }}
            h={{ lg: '787' }}
          />
          <Text fontSize='2xl' fontFamily='heading'>
            Class Room Block A
          </Text>
        </GridItem>
        <GridItem colSpan={1}>
          <Image src='/images/Dormitory.png' w='full' />
          <Text fontSize='2xl' fontFamily='heading'>
            Dormitory
          </Text>
        </GridItem>
        <GridItem>
          <Image src='/images/Dinning-Hall.png' w='full' />
          <Text fontSize='2xl' fontFamily='heading'>
            Dining Hall
          </Text>
        </GridItem>
        <GridItem>
          <Image src='/images/Library.png' w='full' />
          <Text fontSize='2xl' fontFamily='heading'>
            21st Century state of the arts Library
          </Text>
        </GridItem>
      </Grid>
    </Box>
  )
}

export default Location
