import React, { createContext, useContext } from 'react'
import PropTypes from 'prop-types'

import http from './httpFacade'

const ApiContext = createContext()

export const ApiContextProvider = ({ children }) => {
  const BASE_URL = 'https://api.thegcu.com/api/v1'
  // const BASE_URL = 'http://localhost:8009/api/v1'

  //#region ADMIN API
  const contactUs = async payload => {
    return await http.post({
      url: `${BASE_URL}/contact-us`,
      body: JSON.stringify(payload)
    })
  }

  const jobApplication = async payload => {
    return await http.post({
      url: `${BASE_URL}/job-application`,
      body: JSON.stringify(payload)
    })
  }

  //#endregion

  return (
    <ApiContext.Provider value={{ contactUs, jobApplication }}>
      {children}
    </ApiContext.Provider>
  )
}

ApiContextProvider.propTypes = {
  children: PropTypes.node.isRequired
}

const useApi = () => useContext(ApiContext)

export default useApi
