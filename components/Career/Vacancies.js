import React from 'react'
import {
  Box,
  Text,
  Flex,
  Icon,
  Grid,
  Button,
  Heading,
  GridItem,
  Container
} from '@chakra-ui/react'
import { FaMapMarkerAlt, FaCalendar } from 'react-icons/fa'
import { useRouter } from 'next/router'

export default function Vacancies() {
  const router = useRouter()

  const data = [
    {
      id: 1,
      location: 'New York, USA',
      title: 'Full-Stact Web Developer',
      by: 'Chorocon Ltd.',
      date: '1 Week ago'
    },
    {
      id: 2,
      location: 'New York, USA',
      title: 'Full-Stact Web Developer',
      by: 'Chorocon Ltd.',
      date: '1 Week ago'
    },
    {
      id: 3,
      location: 'New York, USA',
      title: 'Full-Stact Web Developer',
      by: 'Chorocon Ltd.',
      date: '1 Week ago'
    },
    {
      id: 4,
      location: 'New York, USA',
      title: 'Full-Stact Web Developer',
      by: 'Chorocon Ltd.',
      date: '1 Week ago'
    }
  ]

  return (
    <Container maxW='7xl' py={{ base: 8, lg: 24 }}>
      <Box mb={{ base: 4, lg: 14 }} w={{ lg: 130 }}>
        <Heading mb={{ lg: 3 }} fontSize={{ base: '1.5rem', lg: '5xl' }}>
          Our current vacancies
        </Heading>
        <Text
          fontFamily='heading'
          fontSize={{ base: 'sm', lg: 'lg' }}
          lineHeight={{ lg: '30px' }}
        >
          Check our featured jobs from popular companies. Start applying now.
        </Text>
      </Box>
      <Grid
        gap={4}
        color='#64646C'
        templateRows='repeat(2, 1fr)'
        templateColumns='repeat(3, 1fr)'
      >
        {data.map(i => (
          <GridItem
            p={{ xl: 4 }}
            pos='relative'
            key={i.id}
            rounded='xl'
            minH={{ xl: '60' }}
            borderWidth={1}
            borderColor='gray.300'
          >
            <Flex mb={4} align='center' w={32} justify='space-between'>
              <Icon as={FaMapMarkerAlt} />
              <Text
                fontFamily='heading'
                color='#1D263A'
                fontSize={{ xl: '15px' }}
              >
                {i.location}
              </Text>
            </Flex>
            <Text
              mb={3}
              color='#1D263A'
              fontWeight='bold'
              fontFamily='heading'
              fontSize={{ xl: '2xl' }}
            >
              {i.title}
            </Text>

            <Text fontWeight='bold' color='#7F828A' fontSize={{ xl: '17px' }}>
              By{' '}
              <Text color='#F04037' as='span'>
                {i.by}
              </Text>
            </Text>
            <Flex
              pos='absolute'
              right={{ xl: 4 }}
              left={{ xl: 4 }}
              bottom={{ xl: 6 }}
              justify='space-between'
            >
              <Flex align='center' w={28} justify='space-between'>
                <Icon as={FaCalendar} />
                <Text>{i.date}</Text>
              </Flex>
              <Button
                h={12}
                rounded='lg'
                color='#fff'
                boxShadow='lg'
                fontSize='15px'
                fontWeight={600}
                fontFamily='heading'
                colorScheme='gcuButton'
                _focus={{ outline: 'none' }}
                onClick={() => router.push(`careers/${i.id}`)}
              >
                Apply Now
              </Button>
            </Flex>
          </GridItem>
        ))}
      </Grid>
    </Container>
  )
}
