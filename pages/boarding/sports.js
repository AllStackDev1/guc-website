import React from 'react'
import { Fade } from 'react-reveal'

import Layout from '@components/Layout'
import Footer from '@components/Home/Footer'

import Hero from '@components/Boarding/Sports/Hero'
import ChallengeBalance from '@components/Boarding/Sports/ChallengeBalance'
import FutureWins from '@components/Boarding/Sports/FutureWins'
import FootBall from '@components/Boarding/Sports/Football'
import Basketball from '@components/Boarding/Sports/Basketball'
import Athletics from '@components/Boarding/Sports/Athletics'
import Cricket from '@components/Boarding/Sports/Cricket'

export default function Sports() {
  return (
    <Layout
      name='Sports'
      link='boarding/sports'
      image_url='https://gcu.sch.ng/images/logo.svg'
      description='Government College Umuahia operates on the premise of this popular saying, “a healthy mind resides in a healthy body.” We believe that sports provide children with the required skills they need to live a healthy lifestyle while influencing their physical and mental development. Sports activities are essential to us because they teach our students lifelong qualities such as endurance, leadership, teamwork, and social skills as well increases their higher levels of confidence, self-esteem and self-worth.'
    >
      <Fade left>
        <Hero />
      </Fade>
      <ChallengeBalance />
      <FutureWins />
      <FootBall />
      <Basketball />
      <Athletics />
      <Cricket />
      <Footer />
    </Layout>
  )
}
