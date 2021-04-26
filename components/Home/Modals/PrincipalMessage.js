import React from 'react'
import PropTypes from 'prop-types'
import {
  Box,
  Text,
  Modal,
  Heading,
  ModalBody,
  ModalOverlay,
  ModalContent,
  ModalCloseButton
} from '@chakra-ui/react'

const PrincipalMessage = ({ isOpen, onClose }) => {
  const textStyle = {
    my: 4,
    fontSize: { base: 'xs', lg: 'sm' },
    lineHeight: '25px'
  }
  return (
    <Modal isOpen={isOpen} onClose={onClose} size='3xl' isCentered>
      <ModalOverlay />
      <ModalContent rounded='xl' mx={{ base: 5 }} mt={{ base: 123, lg: 52 }}>
        <ModalCloseButton p={2} size={6} />
        <ModalBody py={16} px={{ base: 8, lg: 14 }}>
          <Heading
            fontSize={{ base: 'lg', lg: '34px' }}
            mb={{ base: 5, lg: 10 }}
            textAlign='center'
            fontWeight='400'
            lineHeight='45px'
            as='h4'
          >
            A Message from the principal
          </Heading>
          <Text {...textStyle}>
            The continent of Africa and the country of Nigeria is at a
            crossroads. We are at a time in history when we need inspired,
            ethical and responsible leadership.
          </Text>
          <Text {...textStyle}>
            First established in 1929 by Rev Robert Fisher, Government College
            Umuahia (GCU) is famous for having produced giants in the fields of
            politics, literature, economics and education to name but a few. It
            is upon the shoulders of these giants that we stand and introduce to
            you the new GCU.
          </Text>
          <Text {...textStyle}>
            The passion and values instilled in the Old Boys has driven them to
            rebuild their Alma Mater to create a 21st century school to develop
            21st century skills. I am both humbled and proud to be part of such
            an ambitious and life changing project.
          </Text>
          <Text {...textStyle}>
            If these values resonate with you, then GCU is the institution for
            you. The core focus of GCU will be the pursuit of excellence. This
            will cut across academics, sport, social skills, as well as
            developing good morals and values in the young men of GCU. Our aim
            is that all students achieve beyond their potential and become
            lifelong learners, able to take their place as Global Citizens in
            International Communities around the world.
          </Text>
          <Text {...textStyle}>
            We will be presenting a 21st century curriculum – the traditional
            and the modern. Our curriculum includes Coding and STEAM (Science,
            Technology, Engineering, English, Arts and Mathematics.) Our staff
            is made up of highly skilled passionate professionals, who will be
            introduced to you in due course.
          </Text>
          <Text {...textStyle}>
            We look forward to welcoming you and your ward to GCU.
          </Text>
          <Text {...textStyle}>
            Thank you. <Box as='br' />
            A.R.P Springfield (Mr.) <Box as='br' />
            Principal <Box as='br' />
            Government College Umuahia <Box as='br' />
          </Text>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}

PrincipalMessage.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired
}

export default PrincipalMessage
