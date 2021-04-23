import React from 'react'
import { Box, Grid, GridItem, Image, Text, Heading } from '@chakra-ui/react'

const Location = () => {
  return (
    <Box mt={8} p={32} py={{ xl: 10 }}>
      <Heading
        as='h4'
        textColor='gcu.100'
        fontWeight='normal'
        letterSpacing='0.03em'
        fontSize='48px'
        lineHeight='52px'
      >
        Where are we Now
      </Heading>
      <Text w={115} mt={4} fontSize='md' lineHeight='32px'>
        All essential projects for the reopening of the school are being built
        in time for the school to open for admission in September 2021:
      </Text>
      <Grid
        w='100%'
        templateRows='repeat(3, 1fr)'
        templateColumns='repeat(2, 1fr)'
        gap={8}
      >
        <GridItem rowSpan={3} colSpan={1}>
          <Image src='/images/Class-Room-Block-A.png' />
          <Text>Class Room Block A</Text>
        </GridItem>
        <GridItem>
          <Image src='/images/Dormitory.png' />
          <Text>Dormitory</Text>
        </GridItem>
        <GridItem>
          <Image src='/images/Dinning-Hall.png' />
          <Text>Dining Hall</Text>
        </GridItem>
        <GridItem>
          <Image src='/images/Library.png' />
          <Text>21st Century state of the arts Library</Text>
        </GridItem>
      </Grid>
    </Box>
  )
}

export default Location
