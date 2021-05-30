import React from 'react'
import { Box, Icon, Flex, Text, Container, Heading } from '@chakra-ui/react'
import { CircleHeartIcon, CirclePowerIcon } from '@theme/Icons'

export default function MissionVision() {
  return (
    <Container
      d='flex'
      maxW='7xl'
      py={{ lg: 14 }}
      justifyContent='space-between'
    >
      <Flex
        align='center'
        w={{ lg: 120 }}
        mb={{ lg: 14 }}
        justify='space-evenly'
      >
        <Icon as={CircleHeartIcon} boxSize={20} />
        <Box w={{ lg: 108 }}>
          <Heading
            mb={{ lg: 2 }}
            fontSize={{ base: '1.875rem', lg: 'lg' }}
            lineHeight='30px'
            color='#20BFA9'
          >
            Mission
          </Heading>
          <Text color='#1D263A' fontSize='17px' lineHeight='30px'>
            We are an industry-leading company that values honesty, integrity,
            and efficiency. Building quality products and caring for the users
            are what made us stand out since the beginning.
          </Text>
        </Box>
      </Flex>
      <Flex
        align='center'
        w={{ lg: 120 }}
        mb={{ lg: 14 }}
        justify='space-evenly'
      >
        <Icon as={CirclePowerIcon} boxSize={20} />
        <Box w={{ lg: 90 }}>
          <Heading
            mb={{ lg: 2 }}
            fontSize={{ base: '1.875rem', lg: 'lg' }}
            lineHeight='30px'
            color='#FF794C'
          >
            Vision
          </Heading>
          <Text color='#1D263A' fontSize='17px' lineHeight='30px'>
            We’re a team of highly skilled professionals with years of
            experience in different fields vowed to revolutionize the people’s
            web experience.
          </Text>
        </Box>
      </Flex>
    </Container>
  )
}
