import React from 'react'
import { Box, Icon, Flex, Text, Container, Heading } from '@chakra-ui/react'
import { CircleHeartIcon, CirclePowerIcon } from '@theme/Icons'

export default function MissionVision() {
  const data = [
    {
      id: 1,
      color: '#20BFA9',
      title: 'Mission',
      icon: CircleHeartIcon,
      text: `Our mission statement is to educate young men with ethical values,
      self-respect, respect for others and a desire to serve their country
      and the world.`
    },
    {
      id: 2,
      color: '#FF794C',
      title: 'Vision',
      icon: CirclePowerIcon,
      text: `Rooted in the legacy of the old Government College Umuahia, the
      modern GCU offers an internationally minded educational programme...`
    }
  ]
  return (
    <Container
      d='flex'
      maxW='7xl'
      px={{ base: 4, lg: 14 }}
      py={{ base: 8, lg: 14 }}
      flexDir={{ base: 'column', lg: 'row' }}
      justifyContent={{ lg: 'space-between' }}
    >
      {data.map(i => (
        <Flex
          key={i.id}
          w={{ lg: 120 }}
          mb={{ base: 8, lg: 14 }}
          align={{ xl: 'center' }}
          justify={{ lg: 'space-evenly' }}
          flexDir={{ base: 'column', xl: 'row' }}
        >
          <Icon as={i.icon} boxSize={{ base: 10, lg: 20 }} />
          <Box mt={{ base: 3, xl: 0 }} w={{ lg: 108 }}>
            <Heading mb={2} fontSize={{ base: 'md', lg: 'lg' }} color={i.color}>
              {i.title}
            </Heading>
            <Text
              color='#1D263A'
              fontSize={{ base: 'xs', lg: '17px' }}
              lineHeight={{ base: '25px', lg: '30px' }}
            >
              {i.text}
            </Text>
          </Box>
        </Flex>
      ))}
    </Container>
  )
}
