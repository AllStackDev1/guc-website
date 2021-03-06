import React from 'react'
import {
  Box,
  Text,
  Tab,
  Tabs,
  Image,
  Heading,
  TabList,
  TabPanel,
  TabPanels,
  Container
} from '@chakra-ui/react'

export default function Houses() {
  const houses = [
    'Cozens',
    'Erekosima',
    'Fisher',
    'New',
    'Kent',
    'Niger',
    'Nile',
    'School',
    'Simpson',
    'Wareham'
  ]

  const tabBtnStyle = {
    fontSize: { base: 'xs', lg: 'md' },
    color: 'gray.400',
    fontWeight: '600',
    _focus: { outline: 'none' },
    _selected: { color: 'gcu.100', borderColor: 'gcu.100' }
  }

  return (
    <Container maxW='full' py={{ base: 8, lg: 14 }}>
      <Box px={{ lg: 20 }} mb={{ lg: 6 }}>
        <Text
          fontFamily='heading'
          fontSize={{ base: '21px', lg: '42px' }}
          lineHeight={{ lg: '59px' }}
        >
          Houses
        </Text>
      </Box>
      <Tabs isFitted>
        <TabList mx={{ lg: 20 }} overflowY='hidden' overflowX='scroll'>
          {houses.map(h => (
            <Tab key={h} {...tabBtnStyle}>
              {h}
            </Tab>
          ))}
        </TabList>

        <TabPanels mt={{ lg: 8 }}>
          {houses.map(h => (
            <TabPanel
              key={h}
              d='flex'
              bg='gcu.350'
              px={{ lg: 20 }}
              py={{ lg: 10 }}
              flexDir={{ base: 'column-reverse', lg: 'row' }}
              justifyContent='space-around'
            >
              <Box py={{ lg: 10 }} fontSize={{ lg: 'lg' }} w={{ lg: '55%' }}>
                <Heading
                  mb={{ lg: 4 }}
                  fontFamily='heading'
                  fontWeight='normal'
                  fontSize={{ base: 'lg', lg: '42px' }}
                >
                  HOUSEMASTER
                </Heading>
                <Text
                  fontSize={{ base: 'sm', lg: 'lg' }}
                  lineHeight={{ base: '21px', lg: '32px' }}
                >
                  Government College Umuahia empowers the housemaster to take
                  the prime responsibility of each student???s care in the house.
                  He has the full information and understanding of each
                  student???s life on campus ??? ranging from physical and mental
                  health to academic and non-academic performance.
                </Text>
              </Box>
              <Box mb={{ base: 5, lg: 0 }} w={{ lg: '30%' }}>
                <Image
                  w={{ lg: 'full' }}
                  h={{ lg: 'full' }}
                  alt='about-us-img'
                  src={require('/public/images/houses-img.png')}
                />
              </Box>
            </TabPanel>
          ))}
        </TabPanels>
      </Tabs>
    </Container>
  )
}
