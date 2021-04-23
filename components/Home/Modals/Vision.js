import React from 'react'
import PropTypes from 'prop-types'
import {
  Text,
  Modal,
  Heading,
  ModalBody,
  ModalOverlay,
  ModalContent,
  ModalCloseButton
} from '@chakra-ui/react'

const Vision = ({ isOpen, onClose }) => {
  const textStyle = {
    my: 4,
    fontSize: 'sm',
    lineHeight: '25px'
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose} size='3xl' isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton p={2} size={6} />
        <ModalBody py={16} px={14}>
          <Heading
            textAlign='center'
            fontWeight='400'
            lineHeight='45px'
            fontSize='34px'
            as='h4'
            mb={10}
          >
            Vision Statement
          </Heading>

          <Text {...textStyle}>
            Rooted in the legacy of the old Government College Umuahia, the
            modern GCU offers an internationally minded educational programme
            driven by a well-informed, highly educated and experienced
            leadership which has the capacity to improve and develop students so
            that they have an enquiring mind, a stable character, and the focus
            and determination to achieve national and international excellence
          </Text>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}

Vision.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired
}

export default Vision
