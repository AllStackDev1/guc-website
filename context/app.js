import React, { createContext, useContext, useState } from 'react'
import PropTypes from 'prop-types'
import { useDisclosure } from '@chakra-ui/react'

const AppContext = createContext()

export const AppContextProvider = ({ children }) => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [modalType, setModalType] = useState('enroll')

  const { isOpen, onOpen, onClose } = useDisclosure()

  const toggleMobleMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen)
  }

  const handleModal = type => {
    onOpen()
    setModalType(type)
  }

  return (
    <AppContext.Provider
      value={{
        isOpen,
        onOpen,
        onClose,
        modalType,
        handleModal,
        toggleMobleMenu,
        isMobileMenuOpen
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

AppContextProvider.propTypes = {
  children: PropTypes.node.isRequired
}

const useApp = () => useContext(AppContext)

export default useApp
