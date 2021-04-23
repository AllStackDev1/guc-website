import React from 'react'
import PropTypes from 'prop-types'
import {
  Box,
  Text,
  Modal,
  Button,
  Heading,
  ModalBody,
  ModalOverlay,
  ModalContent,
  ModalCloseButton
} from '@chakra-ui/react'

const EnrollModal = ({ isOpen, onClose }) => {
  const textStyles = {
    fontFamily: 'body',
    fontSize: 'lg',
    fontWeight: '600',
    lineHeight: '163.35%'
  }
  return (
    <Modal isOpen={isOpen} onClose={onClose} size='2xl' isCentered>
      <ModalOverlay />
      <ModalContent
        h={124.5}
        bgSize='cover'
        bgPos='center'
        bgRepeat='no-repeat'
        bgImage="url('/images/yingchou-unsplash.png')"
      >
        <ModalCloseButton color='white' size={6} />
        <ModalBody
          py={24}
          px={12}
          textColor='white'
          bgSize='cover'
          bgPos='center'
          bgRepeat='no-repeat'
          bg='gcuLG.100'
        >
          <Heading
            as='h4'
            fontWeight='normal'
            fontSize='54px'
            lineHeight='69px'
          >
            ENTRANCE EXAMINATION
          </Heading>
          <Box my={4}>
            <Text {...textStyles}>Ongoing for 2021/2022</Text>
            <Text {...textStyles}>Academic Session</Text>
          </Box>

          <Button
            rounded='0'
            color='#fff'
            boxShadow='lg'
            h={{ md: 12 }}
            fontWeight={400}
            w={{ md: '9.75rem' }}
            colorScheme='gcuButton'
            fontSize={{ base: 'sm', xl: 'lg' }}
            _focus={{ outline: 'none' }}
          >
            Enroll Now
          </Button>

          <Box mt='24'>
            <Heading
              as='h6'
              mb={3}
              fontWeight='bold'
              fontSize='lg'
              lineHeight='163.35%'
            >
              FOR MORE INFORMATION
            </Heading>
            <Text {...textStyles} mb={3} fontWeight='500'>
              +234(8)7384-3794
            </Text>
            <Text {...textStyles} fontWeight='500'>
              +234(8)000-0000-1
            </Text>
          </Box>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}

EnrollModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired
}

export default EnrollModal
