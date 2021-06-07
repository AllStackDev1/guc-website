import React from 'react'
import { Box, Text, Flex, Image } from '@chakra-ui/react'

export default function Build() {
  return (
    <Flex
      align='center'
      justify='space-between'
      pl={{ base: 8, lg: 44 }}
      py={{ base: 8, lg: 24 }}
    >
      <Box w={{ xl: '45%' }}>
        <Text
          fontFamily='heading'
          fontSize={{ lg: '60px' }}
          lineHeight={{ lg: '66px' }}
        >
          Build your career in our community
        </Text>
        <Text
          color='#6A7986'
          lineHeight={{ lg: '30px' }}
          fontSize={{ base: 'sm', lg: 'lg' }}
        >
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </Text>
      </Box>
      <Box w={{ xl: '40%' }}>
        <Image
          w='full'
          h='full'
          src='/images/career-img.png'
          alt='career img'
        />
      </Box>
    </Flex>
  )
}
