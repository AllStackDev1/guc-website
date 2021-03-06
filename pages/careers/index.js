import React from 'react'
import PropTypes from 'prop-types'

import Layout from '@components/Layout'
import Footer from '@components/Home/Footer'

import Hero from '@components/Career/Hero'
import Build from '@components/Career/Build'
import CareerOptions from '@components/Career/CareerOptions'
import Vacancies from '@components/Career/Vacancies'

import { fetchStrapiContent } from 'mics'

const Career = ({ vacancies }) => {
  return (
    <Layout
      name='Careers'
      link='careers'
      image_url='https://gcu.sch.ng/images/logo.svg'
      description='So much of what makes Winchester exceptional is the people who are a part of the school. Also, its beauty - the buildings, the grounds, the setting. Our heritage and archives provide insight into the past, while our community partnerships prepare boys for a future of compassionate leadership.'
    >
      <Hero />
      <Build />
      <CareerOptions />
      <Vacancies {...{ vacancies }} />
      <Footer />
    </Layout>
  )
}

Career.propTypes = {
  vacancies: PropTypes.array.isRequired
}

export default Career

export const getStaticProps = async () => {
  const vacancies = await fetchStrapiContent('careers')

  return {
    props: {
      vacancies
    }
  }
}
