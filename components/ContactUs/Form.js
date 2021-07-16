import React from 'react'
import * as yup from 'yup'
import { useFormik } from 'formik'
import { Box, Button, useToast } from '@chakra-ui/react'

import CustomInput from 'components/Forms/CustomInput'
import CustomTextarea from 'components/Forms/CustomTextarea'

import useApi from 'context/api'

const validationSchema = yup.object().shape({
  name: yup.string().required('This field is Required!'),
  email: yup
    .string()
    .email('Invalid email!')
    .required('This field is Required!'),
  subject: yup.string().required('This field is Required!'),
  message: yup.string().required('This field is Required!')
})

const ContactUsForm = () => {
  const toast = useToast()
  const { contactUs } = useApi()

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      subject: '',
      message: ''
    },
    validationSchema,
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      try {
        setSubmitting(true)
        const res = await contactUs(values)
        toast({
          description: res.message,
          status: 'success',
          duration: 5000,
          position: 'top-right'
        })
        resetForm({})
      } catch (error) {
        toast({
          title: 'Error occured',
          description:
            error?.message ||
            error?.data?.message ||
            'Unexpected network error.',
          status: 'error',
          duration: 5000,
          position: 'top-right'
        })
      } finally {
        setSubmitting(false)
      }
    }
  })

  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    isSubmitting,
    handleSubmit
  } = formik

  return (
    <Box
      mt={{ base: 5, lg: 0 }}
      w={{ base: '100%', xl: '40%' }}
      pos={{ base: '', lg: 'absolute' }}
      bgColor='white'
      rounded='xl'
      shadow='2xl'
      p={{ xl: 8 }}
      right={0}
      zIndex={{ xl: 1 }}
    >
      <Box as='form' p={5} onSubmit={handleSubmit}>
        <CustomInput
          type='text'
          isRequired
          name='name'
          label='Name'
          onBlur={handleBlur}
          error={errors.name}
          onChange={handleChange}
          touched={touched.name}
          defaultValue={values.name}
          placeholder='Enter your name'
        />

        <Box mt={4}>
          <CustomInput
            type='text'
            isRequired
            name='email'
            label='Email address'
            onBlur={handleBlur}
            error={errors.email}
            onChange={handleChange}
            touched={touched.email}
            defaultValue={values.email}
            placeholder='Enter your Email'
          />
        </Box>

        <Box mt={4}>
          <CustomInput
            type='text'
            isRequired
            name='subject'
            label='Subject'
            onBlur={handleBlur}
            error={errors.subject}
            onChange={handleChange}
            touched={touched.subject}
            defaultValue={values.subject}
            placeholder='Enter your message subject'
          />
        </Box>

        <Box mt={4}>
          <CustomTextarea
            isRequired
            rows={8}
            name='message'
            label='Message'
            onBlur={handleBlur}
            onChange={handleChange}
            error={errors.message}
            touched={touched.message}
            defaultValue={values.message}
            placeholder='Enter your message'
          />
        </Box>

        <Box mt={4}>
          <Button
            h={10}
            w='100%'
            rounded='0'
            color='#fff'
            boxShadow='lg'
            fontSize='md'
            fontWeight={400}
            colorScheme='gcuButton'
            isLoading={isSubmitting}
            isDisabled={isSubmitting}
            _focus={{ outline: 'none' }}
          >
            Submit
          </Button>
        </Box>
      </Box>
    </Box>
  )
}

export default ContactUsForm
