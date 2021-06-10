import React from 'react'
import moment from 'moment'
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

import vacancies from './data'

const Vacancies = () => {
  const router = useRouter()

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
          Start applying now.
        </Text>
      </Box>
      <Grid
        gap={4}
        color='#64646C'
        templateColumns={{ base: 'repeat(1, 1fr)', xl: 'repeat(3, 1fr)' }}
      >
        {vacancies?.map(i => (
          <GridItem
            p={4}
            pos='relative'
            key={i.id}
            rounded='xl'
            minH={60}
            borderWidth={1}
            borderColor='gray.300'
          >
            <Flex mb={4} align='center'>
              <Icon as={FaMapMarkerAlt} />
              <Text
                ml={2}
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

            {/* <Text fontWeight='bold' color='#7F828A' fontSize={{ xl: '17px' }}>
              By{' '}
              <Text color='#F04037' as='span'>
                {i.by}
              </Text>
            </Text> */}
            <Flex
              pos='absolute'
              right={4}
              left={4}
              bottom={6}
              justify='space-between'
            >
              <Flex align='center'>
                <Icon as={FaCalendar} />
                <Text ml={2}>{moment(i.date).fromNow()}</Text>
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

export default Vacancies
