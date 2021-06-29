import React from 'react'
import { Box, Text, Grid, GridItem, Container } from '@chakra-ui/react'

export default function Onwards() {
  const data = [
    {
      id: 1,
      name: 'Mr. David Ifezulike',
      title: 'CHAIRMAN, NESTLE FOODS NIGERIA PLC',
      media:
        'https://drive.google.com/file/d/1ptvP8NHC1C-MyM_QoTX8oo129VO8tH1h/preview'
    },
    {
      id: 2,
      name: 'Dr. Okechukwu Enelamah',
      title: 'CHAIRMAN, AFRICAN CAPITAL ALLIANCE',
      media:
        'https://drive.google.com/file/d/1xbbJPjC7isHuu5i8PDY8zX6G7LQoVqF1/preview'
    },
    {
      id: 3,
      name: 'Mr. Reginald Ihejiahi',
      title: 'FORMER MD/CEO, FIDELITY BANK PLC ',
      media:
        'https://drive.google.com/file/d/1Dww3_PM68axS54fe3ST8kYChpOgK8LLS/preview'
    },
    {
      id: 4,
      name: 'Mr. Kelechi Nwosu',
      title: 'MD/CEO, TBWA CONCEPT',
      media:
        'https://drive.google.com/file/d/1ulgmYcifVR19zdvLR5QS6SE65Q9jzqaV/preview'
    },
    {
      id: 5,
      name: 'Mr. Chukwuemeka Ifezulike',
      title: 'MANAGING PARTNER, KCBC PARTNERS',
      media:
        'https://drive.google.com/file/d/1JF3W5M7aEmnpMIAN5LNs_IgYUnQq0egs/preview'
    }
  ]
  return (
    <Container maxW='7xl' py={{ base: 8, lg: 14 }}>
      <Box pt={{ lg: 32 }} w={{ xl: 138 }}>
        <Text
          mb={{ lg: 6 }}
          fontFamily='heading'
          lineHeight={{ lg: '60px' }}
          fontSize={{ base: '2xl', lg: '42px' }}
          textAlign={{ base: 'center', lg: 'left' }}
        >
          GCU ONWARDS
        </Text>
        <Text
          mb={{ base: 3, lg: 5 }}
          fontSize={{ base: 'sm', lg: 'md' }}
          lineHeight={{ base: '27px', lg: '32px' }}
        >
          The People of this country are amazed at the number of its influential
          citizens who owe allegiance to this school, watch videos from some of
          our top GCU old boys.
        </Text>
      </Box>
      <Grid mt={8} templateColumns={{ xl: 'repeat(3, 1fr)' }} rowGap={10}>
        {data.map(i => (
          <GridItem key={i.id} w={{ xl: 90 }}>
            <Box
              as='iframe'
              src={i.media}
              w='full'
              h={{ xl: 60 }}
              mb={{ xl: 4 }}
            />
            <Text
              fontFamily='sans-serif'
              fontWeight='bold'
              fontSize={{ xl: 'xl' }}
            >
              {i.name}
            </Text>
            <Text fontFamily='sans-serif' fontSize={{ xl: '20px' }}>
              {i.title}
            </Text>
          </GridItem>
        ))}
      </Grid>
    </Container>
  )
}
