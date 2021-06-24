import React from 'react'
import { Box, Text, Flex, Icon } from '@chakra-ui/react'
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa'

export default function ContactsOptions() {
  const data = [
    {
      title: 'Visit us',
      text: 'Ikot-Ekpene Road, Umuahia',
      icon: FaMapMarkerAlt
    },
    {
      title: 'Call us',
      text: '+234 (0) 9060203678 <br /> +234 (0) 9131056805',
      icon: FaPhoneAlt
    },
    {
      title: 'Email us',
      text: 'admin@gcu.sch.ng <br /> principal@gcu.sch.ng',
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
