import React from 'react'
import { Box, Text, Link, Container, Heading } from '@chakra-ui/react'

const Reunions = () => {
  const textStyle = {
    mt: 4,
    mb: 6,
    fontSize: { base: 'sm', xl: 'lg' },
    lineHeight: { base: '25px', xl: '32px' }
  }
  return (
    <Container maxW='7xl' py={{ lg: 10 }} px={{ base: 4, lg: 14 }}>
      <Heading as='h4' color='#0A083B' fontSize={{ base: '2xl', lg: '60px' }}>
        Reunions
      </Heading>
      <Box w={{ lg: '85%' }}>
        <Text {...textStyle}>
          Great reunions rely on the domino effect – one person contacting
          another, contacting another, contacting another… So, when your next
          reunion is scheduled come along and renew old friendships, reminisce
          about days gone by and share in life experiences both old and new.
        </Text>
        <Text {...textStyle}>
          Venues will be local and bookings will open soon. If you do not think
          the College has up to date contact information for you please fill in
          the form above and we will contact you when bookings open. Get busy,
          get contacting anyone from your year level and ask them to register
          their details above!
        </Text>
      </Box>
      <Box mt={{ base: 5, lg: 10 }}>
        <Heading lineHeight='tall' fontSize={{ xl: '2xl' }}>
          Proposed Reunion Program 2021
        </Heading>
        <Text fontSize={{ xl: 'md' }}>
          Please note this is subject to Government restrictions.
        </Text>
      </Box>
      <Box mt={{ base: 5, lg: 10 }}>
        <Heading lineHeight='tall' fontSize={{ xl: '2xl' }}>
          Classes of 2010 and 2011 (10 year reunion)
        </Heading>
        <Text fontSize={{ xl: 'md' }}>Saturday 21 August 2021 (evening)</Text>
      </Box>
      <Box mt={{ base: 5, lg: 10 }}>
        <Heading lineHeight='tall' fontSize={{ xl: '2xl' }}>
          Classes of 2000, 2001, 1990, 1991 (20 and 30 year reunions)
        </Heading>
        <Text fontSize={{ xl: 'md' }}>Saturday 21 August 2021 (evening)</Text>
      </Box>

      <Box mt={{ base: 5, lg: 10 }} w={{ lg: '85%' }}>
        <Text lineHeight='8' fontSize={{ xl: 'md' }}>
          For more information about our reunions, or to update your contact
          details, please complete the form above, call the College on
          <Link
            href='tel:(03) 9724
            2000'
            color='gcu.100'
          >
            {' (03) 9724 2000 '}
          </Link>
          {'or email '}
          <Link
            href='mailto:lcosa@luther.vic.edu.au?subject=Enquiries On Reunions'
            color='gcu.100'
          >
            lcosa@luther.vic.edu.au
          </Link>
        </Text>
      </Box>
    </Container>
  )
}

export default Reunions
