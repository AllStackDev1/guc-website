import React from 'react'
import { Box, Flex, Image, Text, Icon, Heading } from '@chakra-ui/react'
import { QuoteIcon } from '@theme/Icons'

const Experience = () => {
  return (
    <Flex
      py={32}
      px={{ base: 8, lg: 32 }}
      bgColor='gcu.350'
      pos='relative'
      flexDir={{ base: 'column', lg: 'row' }}
      justify='space-between'
    >
      <Box w={{ lg: 82 }}>
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
          <Text mt={8} fontFamily='quote' fontSize='md'>
            I was determined to attend GCU, motivated by a reputation that was
            legendary. In two years, I acquired the essential elements that have
            propelled me thus far—resilience, endurance, survival instincts,
            confidence and self-belief. Above all, from Umuahia, I took the
            lesson that relationship and friendship must be nurtured and
            defended.
          </Text>
          <Text mt={6}>
            <Text as='span'>- EKE, U. K</Text>
            <br />
            <Text fontSize='sm' as='span'>
              - GMD FBN Holdings Plc, Class of 1980
            </Text>
          </Text>
        </Box>
      </Box>
      <Box w={{ lg: 82 }}>
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
          <Text mt={8} fontFamily='quote' fontSize='md'>
            Government College Umuahia (GCU) will always have pride of place in
            my heart. GCU sowed the seed for the man that I would become and
            helped me form some of my lifelong habits, without me knowing how
            important those habits would become in mounding my life.
          </Text>
          <Text mt={6}>
            <Text as='span'>- Chukwuemeka Ndu,</Text>
            <br />
            <Text fontSize='sm' as='span'>
              - Vice Chairman, C&I LEASING PLC
            </Text>
          </Text>
        </Box>
        <Image
          d={{ base: 'none', lg: 'block' }}
          src={require('/public/images/bluejay-bash-student-feature.png')}
        />
      </Box>
      <Box w={{ lg: 82 }}>
        <Flex
          flexDir={{ base: 'column-reverse', lg: 'column' }}
          w={{ lg: 82 }}
          pos={{ lg: 'absolute' }}
          top={{ lg: -8 }}
        >
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
                Our Alumni
              </Heading>
              <Text d='none' fontWeight='600' letterSpacing='4px'>
                DISCOVER MORE
              </Text>
            </Box>
            <Image src={require('/public/images/teacher.png')} />
          </Flex>

          <Box
            bgColor='#6A7986'
            textColor='white'
            mt={5}
            border='1px'
            py={8}
            px={4}
            mb={{ base: 8, lg: 'unset' }}
          >
            <Icon as={QuoteIcon} boxSize={6} />
            <Text mt={8} fontFamily='quote' fontSize='md'>
              GCU did us well, it imbued in us a sense of pride and prepared us
              for a very decent and merit- based society, the ingredients that
              great Nations the world over, are made of. Which I will forever
              cherish and not trade for anything else.{' '}
              <b>UMUAHIA my GREAT ALMA MATER.</b>
            </Text>
            <Text mt={8}>
              <Text as='span'>- Sonny Iroche</Text>
              <br />
              <Text fontSize='sm' lineHeight='32px' as='span'>
                - BsC, MBA - Class of 1970
              </Text>
            </Text>
          </Box>
        </Flex>
      </Box>
    </Flex>
  )
}

export default Experience
