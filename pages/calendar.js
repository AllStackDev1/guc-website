import React from 'react'
import PropTypes from 'prop-types'

import Layout from '@components/Layout'
import Footer from '@components/Home/Footer'

import Hero from '@components/Calendar/Hero'
import CalTable from '@components/Calendar/Table'
import { fetchStrapiContent } from 'mics'

export default function Calendar({ sessions }) {
  return (
    <Layout
      name='Calendar'
      link='calendar'
      image_url='https://gcu.sch.ng/images/logo.svg'
      description='So much of what makes Winchester exceptional is the people who are a part of the school. Also, its beauty - the buildings, the grounds, the setting. Our heritage and archives provide insight into the past, while our community partnerships prepare boys for a future of compassionate leadership.'
    >
      <Hero />
      <CalTable {...{ sessions }} />
      <Footer />
    </Layout>
  )
}

Calendar.propTypes = {
  sessions: PropTypes.array.isRequired
}

export const getStaticProps = async () => {
  const sessions = await fetchStrapiContent('sessions')

  return {
    props: {
      sessions: [...sessions].reverse()
    }
  }
}
