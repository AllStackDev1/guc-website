import React from 'react'
import PropTypes from 'prop-types'
import { Fade } from 'react-reveal'
import {
  Box,
  Link,
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
        rounded='xl'
        mx={{ base: 10 }}
        mt={{ base: 32 }}
        bgRepeat='no-repeat'
        bgImage="url('/images/student.png')"
      >
        <ModalCloseButton color='white' size={6} />
        <ModalBody
          py={24}
          px={12}
          textColor='white'
          bgSize='cover'
          bgPos='center'
          bgRepeat='no-repeat'
          rounded='xl'
          bg='gcuLG.100'
        >
          <Fade top cascade>
            <Heading
              as='h4'
              fontWeight='normal'
              fontSize={{ base: '40px', lg: '54px' }}
              lineHeight={{ base: '48px', lg: '69px' }}
            >
              ENTRANCE EXAMINATION
            </Heading>

            <Box my={4}>
              <Text {...textStyles}>Ongoing for 2021/2022</Text>
              <Text {...textStyles}>Academic Session</Text>
            </Box>

            <Link
              href='https://enrollment.gcu.sch.ng'
              _hover={{ hover: 'none' }}
              _focus={{ outline: 'none' }}
              rel='noreferrer'
            >
              <Button
                className='blink_me'
                rounded='0'
                color='#fff'
                boxShadow='lg'
                h={{ base: 10, md: 12 }}
                fontWeight={400}
                w={{ base: 28, md: '9.75rem' }}
                colorScheme='gcuButton'
                fontSize={{ base: 'sm', xl: 'lg' }}
                _focus={{ outline: 'none' }}
              >
                Enroll Now
              </Button>
            </Link>

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
              <Text {...textStyles} fontWeight='500'>
                admin@gcu.sch.ng
              </Text>
            </Box>
          </Fade>
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
