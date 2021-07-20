import React from 'react'
import PropTypes from 'prop-types'
import { Flex, Text, Image, Heading } from '@chakra-ui/react'

const MessageAndProcedure = ({ handleModal }) => {
  return (
    <Flex
      id='admission'
      py={{ md: 14 }}
      pos='relative'
      align='center'
      justifyContent='space-between'
      flexDir={{ base: 'column', lg: 'row' }}
    >
      <Flex
        w={{ lg: '50%' }}
        h={{ lg: '611px' }}
        flexDir={{ base: 'column', lg: 'row' }}
      >
        <Image
          alt='Principal Picture'
          d={{ base: 'none', lg: 'block' }}
          // src='images/principal-small.jpeg'
          src={require('/public/images/principal-small.jpeg')}
        />
        <Image
          d={{ base: 'block', lg: 'none' }}
          alt='Principal Picture'
          src={require('/public/images/principal.jpeg')}
        />
        <Flex
          px={8}
          align='center'
          bgColor='#000'
          flexDir='column'
          justify='center'
          textColor='white'
          textAlign='center'
          maxW={{ lg: '350px', xxl: '462px' }}
          py={{ base: 24, lg: 'unset' }}
        >
          <Heading
            as='h4'
            fontWeight='normal'
            fontSize={{ base: '2xl', lg: '2.125rem' }}
            lineHeight='45px'
            w={{ lg: 72 }}
          >
            A Message from the Principal
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
      </Flex>
      <Flex
        w={{ lg: '50%' }}
        h={{ lg: '611px' }}
        justify={{ lg: 'flex-end' }}
        flexDir={{ base: 'column', lg: 'row' }}
      >
        <Image src='images/sam-balye.png' d={{ base: 'none', lg: 'block' }} />
        <Image
          src='images/sam-balye@1x.png'
          d={{ base: 'block', lg: 'none' }}
        />
        <Flex
          px={8}
          align='center'
          bgColor='#000'
          flexDir='column'
          justify='center'
          textColor='white'
          textAlign='center'
          w={{ lg: '350px', xxl: '462px' }}
          py={{ base: 24, lg: 'unset' }}
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
