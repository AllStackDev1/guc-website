import React from 'react'
import { Box, Icon, Flex, Text, Container, Heading } from '@chakra-ui/react'
import { CircleHeartIcon, CirclePowerIcon } from '@theme/Icons'

export default function MissionVision() {
  return (
    <Container
      d='flex'
      maxW='7xl'
      px={{ base: 4, lg: 14 }}
      py={{ base: 8, lg: 14 }}
      flexDir={{ base: 'column', lg: 'row' }}
      justifyContent={{ lg: 'space-between' }}
    >
      <Flex
        align='center'
        w={{ lg: 120 }}
        mb={{ base: 8, lg: 14 }}
        justify={{ base: 'space-between', lg: 'space-evenly' }}
      >
        <Icon as={CircleHeartIcon} boxSize={{ base: 10, lg: 20 }} />
        <Box w={{ base: '85%', lg: 108 }}>
          <Heading
            mb={{ lg: 2 }}
            fontSize={{ base: 'md', lg: 'lg' }}
            color='#20BFA9'
          >
            Mission
          </Heading>
          <Text
            color='#1D263A'
            fontSize={{ base: 'xs', lg: '17px' }}
            lineHeight={{ lg: '30px' }}
          >
            We are an industry-leading company that values honesty, integrity,
            and efficiency. Building quality products and caring for the users
            are what made us stand out since the beginning.
          </Text>
        </Box>
      </Flex>
      <Flex
        align='center'
        w={{ lg: 120 }}
        mb={{ base: 6, lg: 14 }}
        justify={{ base: 'space-between', lg: 'space-evenly' }}
      >
        <Icon as={CirclePowerIcon} boxSize={{ base: 10, lg: 20 }} />
        <Box w={{ base: '85%', lg: 90 }}>
          <Heading
            mb={{ lg: 2 }}
            fontSize={{ base: 'md', lg: 'lg' }}
            color='#FF794C'
          >
            Vision
          </Heading>
          <Text
            color='#1D263A'
            fontSize={{ base: 'xs', lg: '17px' }}
            lineHeight={{ lg: '30px' }}
          >
            We’re a team of highly skilled professionals with years of
            experience in different fields vowed to revolutionize the people’s
            web experience.
          </Text>
        </Box>
      </Flex>
    </Container>
  )
}
