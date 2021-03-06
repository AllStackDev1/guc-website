import React from 'react'
import { Fade } from 'react-reveal'

import Layout from '@components/Layout'
import Footer from '@components/Home/Footer'

import Hero from '@components/Admission/Hero'
import Applications from '@components/Admission/Applications'
import ExamDate from '@components/Admission/ExamDate'
import Resumption from '@components/Admission/Resumption'
import Onwards from '@components/Admission/Onwards'

export default function Admission() {
  return (
    <Layout
      name='Admission'
      link='admission'
      image_url='https://gcu.sch.ng/images/logo.svg'
      description='So much of what makes Winchester exceptional is the people who are a part of the school. Also, its beauty - the buildings, the grounds, the setting. Our heritage and archives provide insight into the past, while our community partnerships prepare boys for a future of compassionate leadership.'
    >
      <Fade right>
        <Hero />
      </Fade>
      <Applications />
      <ExamDate />
      <Resumption />
      <Onwards />
      <Footer />
    </Layout>
  )
}
