import React from 'react'
import PropTypes from 'prop-types'
import { Flex, Text, Image, Heading } from '@chakra-ui/react'

const MessageAndProcedure = ({ handleModal }) => {
  return (
    <Flex
      id='admission'
      py={{ md: 14 }}
      justifyContent='space-between'
      pos='relative'
      align='center'
      justify='center'
      flexDir={{ base: 'column', lg: 'row' }}
    >
      <Flex flexDir={{ base: 'column-reverse', lg: 'row' }}>
        <Flex
          px={8}
          py={{ base: 20, lg: 'unset' }}
          my={{ base: 0, lg: 3 }}
          w={{ lg: 95 }}
          flexDir='column'
          justify='center'
          align='center'
          textAlign='center'
          bgColor='#000'
          textColor='white'
        >
          <Heading
            as='h4'
            fontWeight='normal'
            fontSize={{ base: '2xl', lg: '2.125rem' }}
            lineHeight='45px'
            w={{ lg: 72 }}
          >
            A Message from the principal
          </Heading>
          <Text w={{ lg: '80' }} mt={4} mb={6} fontSize='sm' lineHeight='25px'>
            The continent of Africa and the country of Nigeria is at a
            crossroads. We are at a time in history when we need inspired,
            ethical and responsible leadership.
          </Text>
          <Text
            fontFamily='body'
            letterSpacing='4px'
            fontWeight={600}
            fontSize='sm'
            cursor='pointer'
            onClick={() => handleModal('message')}
          >
            READ MORE
          </Text>
        </Flex>
        <Image
          src='images/principal-small.jpeg'
          d={{ base: 'none', lg: 'block' }}
        />
        <Image src='images/principal.jpeg' d={{ base: 'block', lg: 'none' }} />
      </Flex>
      <Flex flexDir={{ base: 'column', lg: 'row' }}>
        <Image src='images/sam-balye.png' d={{ base: 'none', lg: 'block' }} />
        <Image
          src='images/sam-balye@1x.png'
          d={{ base: 'block', lg: 'none' }}
        />
        <Flex
          px={8}
          my={{ base: 0, lg: 3 }}
          w={{ lg: 95 }}
          py={{ base: 24, lg: 'unset' }}
          flexDir='column'
          justify='center'
          align='center'
          textAlign='center'
          bgColor='#000'
          textColor='white'
        >
          <Heading
            as='h4'
            fontWeight='normal'
            fontSize={{ base: '2xl', lg: '2.125rem' }}
            lineHeight='45px'
            w={{ lg: 72 }}
          >
            Admission Procedure
          </Heading>
          <Text
            mt={4}
            mb={6}
            fontSize='sm'
            px={{ lg: 5 }}
            textAlign='center'
            w={{ base: '100%', lg: '90' }}
          >
            Please be advised that we are only admitting JSS1/Year 7 students.
            To be eligible for admission, prospective students must be between
            10.5 and 11.5 years of age by September in the year of admission.
          </Text>
          <Text
            fontFamily='body'
            letterSpacing='4px'
            fontWeight={600}
            fontSize='sm'
            cursor='pointer'
            onClick={() => handleModal('procedure')}
          >
            FIND OUT MORE
          </Text>
        </Flex>
      </Flex>
    </Flex>
  )
}

MessageAndProcedure.propTypes = {
  handleModal: PropTypes.func.isRequired
}

export default MessageAndProcedure
