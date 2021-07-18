import React from 'react'
import { Fade } from 'react-reveal'
import { Box, Image } from '@chakra-ui/react'

import Layout from '@components/Layout'
import Footer from '@components/Home/Footer'

import Hero from '@components/ContactUs/Hero'
import ContactsOptions from '@components/ContactUs/ContactsOptions'

export default function ContactUs() {
  return (
    <Layout
      name='Contact Us'
      link='contact-us'
      image_url='https://gcu.sch.ng/images/logo.svg'
      description='So much of what makes Winchester exceptional is the people who are a part of the school. Also, its beauty - the buildings, the grounds, the setting. Our heritage and archives provide insight into the past, while our community partnerships prepare boys for a future of compassionate leadership.'
      bgColor='gray.50'
    >
      <Fade left>
        <Hero />
      </Fade>
      <Box d={{ base: 'none', xl: 'inherit' }}>
        <Image src='/images/school-map.png' />
      </Box>
      <ContactsOptions />
      <Footer mt={0} />
    </Layout>
  )
}
