import React from 'react'
import { Image, Container } from '@chakra-ui/react'

import Layout from '@components/Layout'
import Footer from '@components/Home/Footer'

import Hero from '@components/Boarding/Hero'
import Life from '@components/Boarding/Life'
import FullerExperience from '@components/Boarding/FullerExperience'

export default function Boarding() {
  return (
    <Layout
      name='Boarding'
      link='boarding'
      image_url='https://gcu.sch.ng/images/logo.svg'
      description='So much of what makes Winchester exceptional is the people who are a part of the school. Also, its beauty - the buildings, the grounds, the setting. Our heritage and archives provide insight into the past, while our community partnerships prepare boys for a future of compassionate leadership.'
    >
      <Hero />
      <Life />
      <Container maxW='7xl' py={{ base: 8, lg: 14 }}>
        <Image
          w='full'
          h='full'
          alt='calendar img'
          src={require('/public/images/calendar-hero.png')}
        />
      </Container>
      <FullerExperience />
      <Footer />
    </Layout>
  )
}
