import React from 'react'
import * as yup from 'yup'
import { useFormik } from 'formik'
import PropTypes from 'prop-types'
import {
  Box,
  Text,
  Modal,
  Button,
  useToast,
  ModalBody,
  ModalOverlay,
  ModalContent,
  ModalCloseButton
} from '@chakra-ui/react'
import CustomInput from '@components/Forms/CustomInput'
import CustomTextarea from '@components/Forms/CustomTextarea'
import CustomDropzone from '@components/Forms/CustomDropzone'
import { FiArrowRight } from 'react-icons/fi'
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

const ApplicationModal = ({ isOpen, onClose }) => {
  const toast = useToast()
  const { contactUs } = useApi()
  const formik = useFormik({
    initialValues: {
      fullname: '',
      email: '',
      resume: undefined,
      coverletter: undefined
    },
    validationSchema,
    onSubmit: async (values, { setSubmitting }) => {
      try {
        setSubmitting(true)
        const res = await contactUs(values)
        toast({
          description: res.message,
          status: 'success',
          duration: 5000,
          position: 'top-right'
        })
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
    setFieldValue,
    isSubmitting,
    handleSubmit
  } = formik

  return (
    <Modal isOpen={isOpen} onClose={onClose} size='3xl' isCentered>
      <ModalOverlay />
      <ModalContent rounded='xl' mx={{ base: 5 }} mt={{ base: 56 }}>
        <ModalCloseButton p={2} size={6} />
        <ModalBody py={{ base: 8, lg: 10 }} px={{ base: 8, lg: 14 }}>
          <Text
            fontSize={{ base: 'lg', lg: '34px' }}
            mb={{ base: 5, lg: 10 }}
            fontFamily='heading'
            color='gcu.100'
          >
            Apply
          </Text>

          <Box as='form' onSubmit={handleSubmit}>
            <CustomInput
              type='text'
              isRequired
              name='fullname'
              label='Full Name'
              onBlur={handleBlur}
              error={errors.fullname}
              onChange={handleChange}
              touched={touched.fullname}
              defaultValue={values.fullname}
              placeholder='Enter your fullname'
            />
            <Box mt={4}>
              <CustomTextarea
                isRequired
                rows={8}
                name='message'
                label='Personal Message'
                onBlur={handleBlur}
                onChange={handleChange}
                error={errors.message}
                touched={touched.message}
                defaultValue={values.message}
                placeholder='Enter your message'
              />
            </Box>
            <Box mt={4}>
              <CustomDropzone
                isRequired
                id='resume'
                label='Upload Resume'
                value={values.resume}
                error={errors.resume}
                touched={touched.resume}
                accept='application/pdf'
                onChange={value => setFieldValue('resume', value)}
              />
            </Box>
            <Box mt={4}>
              <CustomDropzone
                isRequired
                id='coverletter'
                label='Upload Cover Letter'
                error={errors.coverletter}
                touched={touched.coverletter}
                accept='application/pdf'
                value={values.coverletter}
                onChange={value => setFieldValue('coverletter', value)}
              />
            </Box>
            <Box mt={4}>
              <Button
                h={12}
                d='flex'
                w='100%'
                px={10}
                rounded='0'
                color='#fff'
                boxShadow='lg'
                fontSize='md'
                fontWeight={400}
                rightIcon={<FiArrowRight />}
                justifyContent='space-between'
                colorScheme='gcuButton'
                isLoading={isSubmitting}
                isDisabled={isSubmitting}
                _focus={{ outline: 'none' }}
              >
                Submit
              </Button>
            </Box>
          </Box>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}

ApplicationModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired
}

export default ApplicationModal
