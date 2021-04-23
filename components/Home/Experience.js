import React from 'react'
import { Box, Flex, Image, Text, Icon, Heading } from '@chakra-ui/react'
import { QuoteIcon } from '@theme/Icons'

const Experience = () => {
  return (
    <Flex
      mt={8}
      p={32}
      py={{ xl: 10 }}
      bgColor='gcu.350'
      pos='relative'
      justify='space-between'
      align='flex-end'
    >
      <Box w={82}>
        <Heading
          as='h4'
          textColor='gcu.100'
          fontWeight='normal'
          letterSpacing='0.03em'
          fontSize='48px'
          lineHeight='52px'
        >
          The GCU Experience
        </Heading>
        <Text mt={5} fontSize='md' lineHeight='32px'>
          Let our students tell you what it’s like to live and learn on a campus
          designed to build community, inspire, and challenge.
        </Text>
        <Box mt={16} border='1px' py={10} px={4}>
          <Icon as={QuoteIcon} boxSize={6} />
          <Text mt={8} fontSize='md'>
            The teachers I am closest to are like my parents here. Although it
            is great living with friends your own age, sometimes you need to
            talk to someone who has come a longer way, and can provide a nuanced
            perspective about everything – from personal crises to communism!
          </Text>
          <Text mt={8}>
            <Text as='span'>-Kenzo</Text>
            <br />
            <Text fontSize='sm' lineHeight='32px' as='span'>
              -Umuahia
            </Text>
          </Text>
        </Box>
      </Box>
      <Box w={82}>
        <Box
          bgColor='gray.900'
          textColor='white'
          mt={16}
          border='1px'
          py={10}
          px={4}
          mb={4}
        >
          <Icon as={QuoteIcon} boxSize={6} />
          <Text mt={8} fontSize='md'>
            The teachers I am closest to are like my parents here. Although it
            is great living with friends your own age, sometimes you need to
            talk to someone who has come a longer way, and can provide a nuanced
            perspective about everything – from personal crises to communism!
          </Text>
          <Text mt={8}>
            <Text as='span'>-Kenzo</Text>
            <br />
            <Text fontSize='sm' lineHeight='32px' as='span'>
              -Umuahia
            </Text>
          </Text>
        </Box>
        <Image src='/images/bluejay-bash-student-feature.png' />
      </Box>
      <Box w={82}>
        <Box w={82} pos='absolute' top={-8}>
          <Flex pos='relative' flexDir='column'>
            <Box
              pos='absolute'
              right={0}
              left={0}
              bottom={32}
              align='center'
              textColor='white'
            >
              <Heading
                as='h4'
                fontSize='42px'
                fontWeight='400'
                lineHeight='35px'
              >
                Our Teachers
              </Heading>
              <Text fontWeight='600' letterSpacing='4px'>
                DISCOVER MORE
              </Text>
            </Box>
            <Image src='/images/teacher.png' />
          </Flex>

          <Box
            bgColor='gcu.100'
            textColor='white'
            mt={5}
            border='1px'
            py={8}
            px={4}
          >
            <Icon as={QuoteIcon} boxSize={6} />
            <Text mt={8} fontSize='md'>
              The teachers I am closest to are like my parents here. Although it
              is great living with friends your own age, sometimes you need to
              talk to someone who has come a longer way, and can provide a
              nuanced perspective about everything – from personal crises to
              communism!
            </Text>
            <Text mt={8}>
              <Text as='span'>-Kenzo</Text>
              <br />
              <Text fontSize='sm' lineHeight='32px' as='span'>
                -Umuahia
              </Text>
            </Text>
          </Box>
        </Box>
      </Box>
    </Flex>
  )
}

export default Experience
