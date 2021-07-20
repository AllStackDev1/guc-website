import React from 'react'
import { Divider, Container } from '@chakra-ui/react'

import Layout from '@components/Layout'
import Footer from '@components/Home/Footer'

import Hero from '@components/AboutUs/Hero'
import MissionVision from '@components/AboutUs/MissionVision'
import PrincipalMessage from '@components/AboutUs/PrincipalMessage'
import OurHistory from '@components/AboutUs/OurHistory'
import SchoolAnthem from '@components/AboutUs/SchoolAnthem'

export default function AboutUs() {
  return (
    <Layout
      name='About Us'
      link='about-us'
      image_url='https://gcu.sch.ng/images/logo.svg'
      description='So much of what makes Winchester exceptional is the people who are a part of the school. Also, its beauty - the buildings, the grounds, the setting. Our heritage and archives provide insight into the past, while our community partnerships prepare boys for a future of compassionate leadership.'
    >
      <Hero />

      <MissionVision />
      <Container maxW='7xl'>
        <Divider borderColor='gray.300' mb={8} />
      </Container>
      <PrincipalMessage />
      <OurHistory />
      <Container maxW='7xl'>
        <Divider borderColor='gray.300' mb={8} />
      </Container>
      <SchoolAnthem />
      <Footer />
    </Layout>
  )
}
