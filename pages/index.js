import React, { useEffect } from 'react'
import { useDisclosure } from '@chakra-ui/react'
import Layout from '@components/Layout'
import Hero from '@components/Home/Hero'
import EnrollModal from '@components/Home/EnrollModal'
import About from '@components/Home/About'
import Vision from '@components/Home/Vision'
import MessageAndProcedure from '@components/Home/MessageAndProcedure'
import CorePurpose from '@components/Home/CorePurpose'
import Experience from '@components/Home/Experience'
import Location from '@components/Home/Location'
import Footer from '@components/Home/Footer'

export default function Home() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  useEffect(() => {
    onOpen()
  }, [onOpen])

  return (
    <Layout
      name='Home'
      image_url=''
      description='So much of what makes Winchester exceptional is the people who are a part of the school. Also, its beauty - the buildings, the grounds, the setting. Our heritage and archives provide insight into the past, while our community partnerships prepare boys for a future of compassionate leadership.'
    >
      <EnrollModal isOpen={isOpen} onClose={onClose} />
      <Hero />
      <About />
      <Vision />
      <MessageAndProcedure />
      <CorePurpose />
      <Experience />
      <Location />
      <Footer />
    </Layout>
  )
}
