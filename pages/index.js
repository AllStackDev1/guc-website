import React from 'react'
import Layout from '@components/Layout'
import Hero from '@components/home/Hero'

export default function Home() {
  return (
    <Layout
      name='Home'
      image_url='https://media-exp1.licdn.com/dms/image/C4E0BAQEx9HOPUpq61g/company-logo_200_200/0/1618073512695?e=1626307200&v=beta&t=Gyfh8f5a8pLC2LDj3oHgV9CAk2sytU4V_HEcrzjDOSU'
      description='So much of what makes Winchester exceptional is the people who are a part of the school. Also, its beauty - the buildings, the grounds, the setting. Our heritage and archives provide insight into the past, while our community partnerships prepare boys for a future of compassionate leadership.'
    >
      <Hero />
    </Layout>
  )
}
