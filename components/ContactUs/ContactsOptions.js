import React from 'react'
import { Box, Text, Flex, Icon } from '@chakra-ui/react'
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa'

export default function ContactsOptions() {
  const data = [
    {
      title: 'Visit us',
      text: '34 Madison Street, <br /> NY, USA 10005',
      icon: FaMapMarkerAlt
    },
    {
      title: 'Call us',
      text: '+1-492-4918-395 <br /> +14-394-409-591',
      icon: FaPhoneAlt
    },
    {
      title: 'Email us',
      text: 'info@mail.com <br /> support@mail.com',
      icon: FaEnvelope
    }
  ]

  return (
    <Box bgColor='white'>
      <Flex px={{ xl: 32 }} py={{ xl: 20 }} justify='space-between'>
        {data.map(i => (
          <Flex
            w={{ xl: 80 }}
            key={i.title}
            align='center'
            justify='space-between'
          >
            <Flex
              w={14}
              h={14}
              align='center'
              rounded='full'
              justify='center'
              bgColor='rgba(200, 43, 56, 0.4)'
            >
              <Icon as={i.icon} color='gcu.100' />
            </Flex>
            <Box w={{ xl: '70%' }}>
              <Text fontFamily='heading' fontWeight='bold'>
                {i.title}
              </Text>
              <Text
                mt={4}
                dangerouslySetInnerHTML={{
                  __html: i.text
                }}
              />
            </Box>
          </Flex>
        ))}
      </Flex>
    </Box>
  )
}
