import React, { createContext, useContext } from 'react'
import PropTypes from 'prop-types'

import http from './httpFacade'

const ApiContext = createContext()

export const ApiContextProvider = ({ children }) => {
  const BASE_URL = process.env.NEXT_PUBLIC_BASE_API

  //#region ADMIN API
  const contactUs = async payload => {
    return await http.post({
      url: `${BASE_URL}/contact-us`,
      body: JSON.stringify(payload)
    })
  }

  //#endregion

  return (
    <ApiContext.Provider value={{ contactUs }}>{children}</ApiContext.Provider>
  )
}

ApiContextProvider.propTypes = {
  children: PropTypes.node.isRequired
}

const useApi = () => useContext(ApiContext)

export default useApi
