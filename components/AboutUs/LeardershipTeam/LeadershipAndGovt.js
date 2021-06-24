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
      text: 'Vice Principal Admin',
      color: '#333333'
    },
    {
      text: 'Vice Principal Academics',
      color: '#9B51E0'
    },
    {
      text: 'Vice Principal Head of Boarding',
      color: '#2F80ED'
    },
    {
      text: 'Administrative Officers',
      color: '#27AE60'
    },
    {
      text: 'Heads of Departments',
      color: '#F2994A'
    },
    {
      text: 'Pastoral Staff',
      color: '#C82B38'
    }
  ]

  return (
    <Container
      d='flex'
      maxW='7xl'
      py={{ base: 10, lg: 20 }}
      px={{ base: 4, lg: 14 }}
      alignItems={{ base: 'center', xl: 'flex-start' }}
      flexDir={{ base: 'column', xl: 'row' }}
      justifyContent={{ xl: 'space-between' }}
    >
      <Heading
        as='h4'
        color='#0A083B'
        fontWeight='normal'
        fontSize={{ base: '2xl', lg: '42px' }}
        lineHeight={{ base: '40px', xl: '59px' }}
        textAlign={{ base: 'center', xl: 'left' }}
      >
        LEADERSHIP AND GOVERNANCE
      </Heading>
      <Box w={{ lg: '60%' }}>
        <Text
          mt={4}
          mb={6}
          fontSize={{ base: 'sm', xl: 'lg' }}
          lineHeight='32px'
        >
          Government College Umuahia is a private institution that was
          established in 1929. Reverend Robert William Fisher was appointed as
          the first Principal of the College.
        </Text>

        <Text
          mt={4}
          mb={6}
          fontSize={{ base: 'sm', xl: 'lg' }}
          lineHeight='32px'
        >
          The College Leadership Team is the key decision making body at
          Government College Umuahia. The Principal chairs the Leadership Team,
          which consists of the following members:
        </Text>

        <List spacing={3}>
          {lists.map(item => (
            <ListItem key={item.color} d='flex' alignItems='center'>
              <ListIcon
                as={AiTwotoneRightSquare}
                color={item.color}
                boxSize={{ base: 2, xl: '' }}
              />
              {item.text}
            </ListItem>
          ))}
        </List>
      </Box>
    </Container>
  )
}

export default LeadershipAndGovt
