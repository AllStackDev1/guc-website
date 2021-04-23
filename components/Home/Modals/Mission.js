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

const Mission = ({ isOpen, onClose }) => {
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
            Mission Statement
          </Heading>

          <Text {...textStyle}>
            Our mission statement is to educate young men with ethical values,
            self-respect, respect for others and a desire to serve their country
            and the world.
          </Text>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}

Mission.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired
}

export default Mission
