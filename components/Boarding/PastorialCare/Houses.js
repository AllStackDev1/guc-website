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
          fontSize={{ lg: '42px' }}
          lineHeight={{ lg: '59px' }}
        >
          Houses
        </Text>
      </Box>
      <Tabs isFitted>
        <TabList mx={{ lg: 20 }}>
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
              justifyContent='space-around'
            >
              <Box py={{ lg: 10 }} fontSize={{ lg: 'lg' }} w={{ lg: '55%' }}>
                <Heading
                  mb={{ lg: 4 }}
                  fontFamily='heading'
                  fontWeight='normal'
                  fontSize={{ lg: '42px' }}
                >
                  HOUSEMASTER
                </Heading>
                <Text mb={{ lg: 4 }} lineHeight={{ lg: '32px' }}>
                  The Housemaster takes primary responsibility for the pastoral
                  care of every boy in his house. He has a detailed
                  understanding of each boy’s life at the school, from his
                  mental and physical health to his academic and
                  extra-curricular profile.
                </Text>
                <Text lineHeight={{ lg: '32px' }}>
                  The principal role of the Housemaster is to help boys to find
                  their place and to thrive within the school community.
                </Text>
              </Box>
              <Box w={{ lg: '30%' }}>
                <Image
                  w={{ lg: 'full' }}
                  h={{ lg: 'full' }}
                  src='/images/houses-img.png'
                  alt='about-us-img'
                />
              </Box>
            </TabPanel>
          ))}
        </TabPanels>
      </Tabs>
    </Container>
  )
}
