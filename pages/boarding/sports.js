import React from 'react'

import Layout from '@components/Layout'
import Footer from '@components/Home/Footer'

import Hero from '@components/Boarding/Sports/Hero'
import ChallengeBalance from '@components/Boarding/Sports/ChallengeBalance'
import FutureWins from '@components/Boarding/Sports/FutureWins'
import Tennis from '@components/Boarding/Sports/Tennis'
import Basketball from '@components/Boarding/Sports/Basketball'

export default function Sports() {
  return (
    <Layout
      name='Sports'
      link='boarding/sports'
      image_url='https://gcu.sch.ng/images/logo.svg'
      description='So much of what makes Winchester exceptional is the people who are a part of the school. Also, its beauty - the buildings, the grounds, the setting. Our heritage and archives provide insight into the past, while our community partnerships prepare boys for a future of compassionate leadership.'
    >
      <Hero />
      <ChallengeBalance />
      <FutureWins />
      <Tennis />
      <Basketball />
      <Footer />
    </Layout>
  )
}
