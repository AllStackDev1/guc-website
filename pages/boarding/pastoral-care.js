import React from 'react'
import { Fade } from 'react-reveal'

import Layout from '@components/Layout'
import Footer from '@components/Home/Footer'

import Hero from '@components/Boarding/PastoralCare/Hero'
import Responsibility from '@components/Boarding/PastoralCare/Responsibility'
import Houses from '@components/Boarding/PastoralCare/Houses'
import Captain from '@components/Boarding/PastoralCare/Captain'

export default function Boarding() {
  return (
    <Layout
      name='Pastoral Care'
      link='boarding/pastoral-care'
      image_url='https://gcu.sch.ng/images/logo.svg'
      description='So much of what makes Winchester exceptional is the people who are a part of the school. Also, its beauty - the buildings, the grounds, the setting. Our heritage and archives provide insight into the past, while our community partnerships prepare boys for a future of compassionate leadership.'
    >
      <Fade left>
        <Hero />
      </Fade>
      <Responsibility />
      <Houses />
      <Captain />
      <Footer />
    </Layout>
  )
}
