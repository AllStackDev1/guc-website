import React from 'react'
import { Box, Text, Flex, Image } from '@chakra-ui/react'

export default function Build() {
  return (
    <Flex
      align='center'
      justify='space-between'
      flexDir={{ base: 'column-reverse', lg: 'row' }}
      pl={{ base: 4, lg: 44 }}
      py={{ base: 8, lg: 24 }}
    >
      <Box mt={{ base: 4, lg: 0 }} w={{ xl: '48%' }}>
        <Text
          fontFamily='heading'
          fontSize={{ base: 'xl', lg: '60px' }}
          lineHeight={{ lg: '66px' }}
        >
          Build your career with us
        </Text>
        <Text
          color='#6A7986'
          lineHeight={{ lg: '30px' }}
          fontSize={{ base: 'sm', lg: 'lg' }}
        >
          Educating students to become leaders who can innovate and solve
          21st-century challenges.
        </Text>
      </Box>
      <Box w={{ xl: '40%' }}>
        <Image
          w='full'
          h='full'
          alt='career img'
          src='/images/career-img.png'
        />
      </Box>
    </Flex>
  )
}
