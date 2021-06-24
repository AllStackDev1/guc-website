import React from 'react'

import Layout from '@components/Layout'
import Footer from '@components/Home/Footer'

import Hero from '@components/Boarding/PastorialCare/Hero'
import Responsibility from '@components/Boarding/PastorialCare/Responsibility'
import Houses from '@components/Boarding/PastorialCare/Houses'
import Captain from '@components/Boarding/PastorialCare/Captain'

export default function Boarding() {
  return (
    <Layout
      name='Pastorial Care'
      link='boarding/pastorial-care'
      image_url='https://gcu.sch.ng/images/logo.svg'
      description='So much of what makes Winchester exceptional is the people who are a part of the school. Also, its beauty - the buildings, the grounds, the setting. Our heritage and archives provide insight into the past, while our community partnerships prepare boys for a future of compassionate leadership.'
    >
      <Hero />
      <Responsibility />
      <Houses />
      <Captain />

      <Footer />
    </Layout>
  )
}
