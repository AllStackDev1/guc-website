import React from 'react'
import PropTypes from 'prop-types'
import {
  Input,
  FormLabel,
  FormControl,
  FormErrorMessage
} from '@chakra-ui/react'

const CustomInput = ({ id, isRequired, error, touched, label, ...rest }) => {
  return (
    <FormControl
      id={id || rest.name}
      isRequired={isRequired}
      isInvalid={error && touched}
    >
      {label && (
        <FormLabel fontSize={{ base: 'xs', lg: 'sm' }} fontWeight='400'>
          {label}
        </FormLabel>
      )}
      <Input
        {...rest}
        h={{ base: 12, lg: 16 }}
        fontSize={{ base: 'xs', lg: 'sm' }}
        bgColor='gray.50'
      />
      <FormErrorMessage fontSize={{ base: 'xs', lg: 'sm' }}>
        {error}
      </FormErrorMessage>
    </FormControl>
  )
}

CustomInput.propTypes = {
  label: PropTypes.string,
  error: PropTypes.string,
  touched: PropTypes.bool,
  isRequired: PropTypes.bool,
  id: PropTypes.string
}

export default CustomInput
