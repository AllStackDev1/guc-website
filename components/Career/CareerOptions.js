import React from 'react'
import {
  Box,
  Text,
  Flex,
  Icon,
  Grid,
  GridItem,
  Container
} from '@chakra-ui/react'
import {
  FaBriefcase,
  FaClinicMedical,
  FaChartLine,
  FaDollarSign
} from 'react-icons/fa'

export default function CareerOptions() {
  const data = [
    {
      title: 'COMPETITIVE SALARY',
      text: 'At GCU, we are committed to hiring the best teaching and non-teaching staff with high-rewarding paycheck and bonuses. We cherish and reward excellence, quality, and a high level of professionalism.',
      icon: FaDollarSign,
      color: (o = 0.2) => `rgba(240, 64, 55, ${o})`
    },
    {
      title: 'PROMOTION',
      text: 'We are motivated to seeing our employees’ career development to boost work productivity and effectiveness. We operate a pyramidal structure to ensure that our employees grow, as they meet their KPIs and exceed expectations. ',
      icon: FaBriefcase,
      color: (o = 0.2) => `rgba(129, 178, 20, ${o})`
    },
    {
      title: 'HEALTH INSURANCE SCHEME',
      text: 'We understand that the value proposition for wellness and good health is productivity and high-achieving performance. GCU provides cutting-edge medical care for its employees.  ',
      icon: FaClinicMedical,
      color: (o = 0.2) => `rgba(155, 81, 224, ${o})`
    },
    {
      title: 'PROFESSIONAL DEVELOPMENT',
      text: 'We see education as a learning cycle, and this is one of the core reasons we professionally develop our employees. We organize conferences, seminars and workshops for our employees to ensure that they achieve the school’s objectives and have relevant, up-to-date insights into the 21st-century education system.',
      icon: FaChartLine,
      color: (o = 0.2) => `rgba(0, 188, 212, ${o})`
    }
  ]

  return (
    <Container maxW='7xl' py={{ base: 8, lg: 24 }}>
      <Grid
        gap={8}
        color='#64646C'
        templateColumns={{ base: 'repeat(1, 1fr)', xl: 'repeat(2, 1fr)' }}
      >
        {data.map(i => (
          <GridItem
            d='flex'
            key={i.title}
            rounded='xl'
            borderWidth={1}
            py={{ base: 2, xl: 4 }}
            alignItems={{ xl: 'center' }}
            borderColor='gray.200'
            justifyContent='space-around'
            flexDirection={{ base: 'column', xl: 'row' }}
          >
            <Flex
              w={20}
              h={20}
              align='center'
              rounded='full'
              justify='center'
              bgColor={i.color()}
              ml={{ base: 4, xl: 0 }}
              mb={{ base: 4, xl: 0 }}
            >
              <Icon as={i.icon} color={i.color(1)} boxSize={6} />
            </Flex>
            <Box px={{ base: 4, xl: 0 }} w={{ xl: '70%' }} textAlign='left'>
              <Text
                fontSize={{ xl: '2xl' }}
                fontFamily='heading'
                fontWeight='bold'
              >
                {i.title}
              </Text>
              <Text
                mt={2}
                fontSize={{ base: 'xs', xl: 'sm' }}
                dangerouslySetInnerHTML={{
                  __html: i.text
                }}
              />
            </Box>
          </GridItem>
        ))}
      </Grid>
    </Container>
  )
}
