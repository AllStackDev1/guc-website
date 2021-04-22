import React from 'react'
import { Flex, Text, Image, Heading } from '@chakra-ui/react'

const MessageAndProcedure = () => {
  return (
    <Flex
      py={{ md: 14 }}
      justifyContent='space-between'
      pos='relative'
      align='center'
      justify='center'
    >
      <Flex>
        <Flex
          my={3}
          px={8}
          w={95}
          flexDir='column'
          justify='center'
          align='center'
          textAlign='center'
          bgColor='gray.900'
          textColor='white'
        >
          <Heading
            as='h4'
            fontWeight='normal'
            fontSize='34px'
            lineHeight='45px'
            w={72}
          >
            A Message from the principal
          </Heading>
          <Text w='80' mt={4} mb={6} fontSize='sm'>
            The continent of Africa and the country of Nigeria is at a
            crossroads. We are at a time in history when we need inspired,
            ethical and responsible leadership.
          </Text>
          <Text
            fontFamily='body'
            letterSpacing='4px'
            fontWeight={600}
            fontSize='sm'
          >
            READ MORE
          </Text>
        </Flex>
        <Image src='images/etty-fidele.png' />
      </Flex>
      <Flex>
        <Image src='images/sam-balye.png' />
        <Flex
          my={3}
          px={8}
          w={95}
          flexDir='column'
          justify='center'
          align='center'
          textAlign='center'
          bgColor='gray.900'
          textColor='white'
        >
          <Heading
            as='h4'
            fontWeight='normal'
            fontSize='34px'
            lineHeight='45px'
          >
            Admission Procedure
          </Heading>
          <Text w='90' mt={4} mb={6} px={5} fontSize='sm' textAlign='center'>
            Please be advised that we are only admitting JSS1/Year 7 students.
            To be eligible for admission, prospective students must be between
            10.5 and 11.5 years of age by September in the year of admission.
          </Text>
          <Text
            fontFamily='body'
            letterSpacing='4px'
            fontWeight={600}
            fontSize='sm'
          >
            FIND OUT MORE
          </Text>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default MessageAndProcedure
