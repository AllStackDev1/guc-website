import React from 'react'
import {
  Box,
  Text,
  Container,
  Heading,
  List,
  ListItem,
  ListIcon
} from '@chakra-ui/react'
import { AiTwotoneRightSquare } from 'react-icons/ai'

const LeadershipAndGovt = () => {
  const lists = [
    {
      text: 'Principal',
      color: '#2D9CDB'
    },
    {
      text: 'College Rector',
      color: '#333333'
    },
    {
      text: 'Business Manager',
      color: '#9B51E0'
    },
    {
      text: 'Assistant Principal: Faith and Mission',
      color: '#2F80ED'
    },
    {
      text: 'Assistant Principal: Students',
      color: '#27AE60'
    },
    {
      text: 'Assistant Principal: Organization',
      color: '#F2994A'
    },
    {
      text: 'Assistant Principal: Learning, Teaching & Innovation',
      color: '#C82B38'
    }
  ]

  return (
    <Container
      d='flex'
      maxW='7xl'
      py={{ lg: 20 }}
      px={{ lg: 14 }}
      justifyContent='space-between'
    >
      <Heading
        as='h4'
        color='#0A083B'
        fontWeight='normal'
        fontSize={{ base: '2xl', lg: '42px' }}
        lineHeight='59px'
      >
        LEADERSHIP AND GOVERNANCE
      </Heading>
      <Box w={{ lg: '60%' }}>
        <Text mt={4} mb={6} fontSize='lg' lineHeight='32px'>
          Salesian College Chadstone is a public company limited by guarantee
          that was established to take over the operations of the unincorporated
          college from 1 January 2021. The College’s Board of Directors is
          responsible for the operation of the College. Ownership remains with
          the Salesians of Don Bosco (legally known as the Salesian Society
          Incorporated (VIC)).
        </Text>

        <Text mt={4} mb={6} fontSize='lg' lineHeight='32px'>
          The College Leadership Team is the key decision making body at
          Salesian College. The Principal chairs the Leadership Team, which
          consists of the following members:
        </Text>

        <List spacing={3}>
          {lists.map(item => (
            <ListItem key={item.color}>
              <ListIcon as={AiTwotoneRightSquare} color={item.color} />
              {item.text}
            </ListItem>
          ))}
        </List>
      </Box>
    </Container>
  )
}

export default LeadershipAndGovt
