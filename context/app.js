import React, { createContext, useContext, useState } from 'react'
import PropTypes from 'prop-types'

const AppContext = createContext()

export const AppContextProvider = ({ children }) => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false)

  const toggleMobleMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <AppContext.Provider
      value={{
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
