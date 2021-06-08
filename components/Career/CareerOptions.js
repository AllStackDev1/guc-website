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
  FaHourglassHalf,
  FaSuitcaseRolling,
  FaBaby,
  FaGift,
  FaDollarSign
} from 'react-icons/fa'

export default function CareerOptions() {
  const data = [
    {
      title: 'Work from anywhere',
      text: 'A team of experts passionate about product management.',
      icon: FaBriefcase,
      color: (o = 0.2) => `rgba(240, 64, 55, ${o})`
    },
    {
      title: 'Flexible hours',
      text: 'A team of experts passionate about product management',
      icon: FaHourglassHalf,
      color: (o = 0.2) => `rgba(65, 62, 101, ${o})`
    },
    {
      title: 'Work and travel',
      text: 'A team of experts passionate about product management',
      icon: FaSuitcaseRolling,
      color: (o = 0.2) => `rgba(155, 81, 224, ${o})`
    },
    {
      title: 'Paid parental leave',
      text: 'A team of experts passionate about product management.',
      icon: FaBaby,
      color: (o = 0.2) => `rgba(0, 188, 212, ${o})`
    },
    {
      title: 'Yearly bonuses',
      text: 'A team of experts passionate about product management',
      icon: FaGift,
      color: (o = 0.2) => `rgba(246, 83, 162, ${o})`
    },
    {
      title: 'Smart salary',
      text: 'A team of experts passionate about product management',
      icon: FaDollarSign,
      color: (o = 0.2) => `rgba(129, 178, 20, ${o})`
    }
  ]

  return (
    <Container maxW='7xl' py={{ base: 8, lg: 24 }}>
      <Grid
        gap={4}
        color='#64646C'
        templateColumns={{ base: 'repeat(1, 1fr)', xl: 'repeat(3, 1fr)' }}
      >
        {data.map((i, idx) => (
          <GridItem
            d='flex'
            rounded='xl'
            borderWidth={1}
            key={i.title}
            py={{ base: 2, xl: 4 }}
            alignItems='center'
            borderColor='gray.200'
            justifyContent='space-around'
            flexDirection={{
              base: idx % 2 !== 0 ? 'row-reverse' : '',
              xl: 'row'
            }}
          >
            <Flex
              w={16}
              h={16}
              align='center'
              rounded='full'
              justify='center'
              bgColor={i.color()}
            >
              <Icon as={i.icon} color={i.color(1)} />
            </Flex>
            <Box w='70%' textAlign='left'>
              <Text
                fontSize={{ xl: '2xl' }}
                fontFamily='heading'
                fontWeight='bold'
              >
                {i.title}
              </Text>
              <Text
                mt={2}
                fontSize={{ xl: 'sm' }}
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
