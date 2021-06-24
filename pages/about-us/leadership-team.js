import React from 'react'

import Layout from '@components/Layout'
import Footer from '@components/Home/Footer'

import Hero from '@components/AboutUs/LeardershipTeam/Hero'
import LeadershipAndGovt from '@components/AboutUs/LeardershipTeam/LeadershipAndGovt'
import SeniorLeaderTeam from '@components/AboutUs/LeardershipTeam/SeniorLeaderTeam'

export default function LeadershipTeam() {
  return (
    <Layout
      name='About Us'
      link='about-us'
      image_url='https://gcu.sch.ng/images/logo.svg'
      description='So much of what makes Winchester exceptional is the people who are a part of the school. Also, its beauty - the buildings, the grounds, the setting. Our heritage and archives provide insight into the past, while our community partnerships prepare boys for a future of compassionate leadership.'
    >
      <Hero />
      <LeadershipAndGovt />
      <SeniorLeaderTeam />
      <Footer />
    </Layout>
  )
}
