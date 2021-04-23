import React from 'react'
import PropTypes from 'prop-types'
import {
  Text,
  Image,
  Modal,
  Heading,
  ModalBody,
  ModalOverlay,
  ModalContent,
  ModalCloseButton
} from '@chakra-ui/react'

const OurHistory = ({ isOpen, onClose }) => {
  const textStyle = {
    my: 4,
    fontSize: 'sm',
    lineHeight: '25px'
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose} size='3xl' isCentered>
      <ModalOverlay />
      <ModalContent mt={80}>
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
            Our History
          </Heading>

          <Image
            src='/images/robert-fisher.jpeg'
            alt='Robert Fisher'
            mx='auto'
            w={85}
          />

          <Text {...textStyle}>
            For the first forty years of its existence, the Government College
            Umuahia was a beacon of excellence and source of pride to Umuahia,
            the region and Nigeria. Following the civil war, GCU saw a steady
            decline in her core values of excellence, discipline and merit.
          </Text>
          <Image
            src='/images/cricket.jpeg'
            alt='playing cricket'
            mx='auto'
            w={85}
          />
          <Text {...textStyle}>
            The most noticeable sign was the ruined and neglected condition of
            the facilities and physical environment. It suffered greatly from
            acute under resourcing and mismanagement.
          </Text>
          <Text {...textStyle}>
            The values that made it exemplary became badly eroded and in 2014,
            the FEDT was set up to take ownership and restore the school.
          </Text>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}

OurHistory.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired
}

export default OurHistory
