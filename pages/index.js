import React, { useEffect } from 'react'
import Layout from '@components/Layout'
import Hero from '@components/Home/Hero'
import About from '@components/Home/About'
import OurHistory from '@components/Home/OurHistory'
import MessageAndProcedure from '@components/Home/MessageAndProcedure'
import CorePurpose from '@components/Home/CorePurpose'
import Experience from '@components/Home/Experience'
import Location from '@components/Home/Location'
import Footer from '@components/Home/Footer'

import PrincipalMessageModal from '@components/Home/Modals/PrincipalMessage'
import AdmissionProcedureModal from '@components/Home/Modals/AdmissionProcedure'
import VisionModal from '@components/Home/Modals/Vision'
import MissionModal from '@components/Home/Modals/Mission'
import OurHistoryModal from '@components/Home/Modals/OurHistory'
import EnrollModal from '@components/Home/Modals/Enroll'

import useApp from 'context/app'

export default function Home() {
  const { isOpen, onClose, onOpen, modalType, handleModal } = useApp()

  useEffect(() => {
    onOpen()
  }, [onOpen])

  const getModal = key => {
    switch (key) {
      case 'enroll':
        return <EnrollModal isOpen={isOpen} onClose={onClose} />
      case 'vision':
        return <VisionModal isOpen={isOpen} onClose={onClose} />
      case 'mission':
        return <MissionModal isOpen={isOpen} onClose={onClose} />
      case 'history':
        return <OurHistoryModal isOpen={isOpen} onClose={onClose} />
      case 'message':
        return <PrincipalMessageModal isOpen={isOpen} onClose={onClose} />
      case 'procedure':
        return <AdmissionProcedureModal isOpen={isOpen} onClose={onClose} />
      default:
        return null
    }
  }

  return (
    <Layout
      name='Home'
      image_url=''
      description='So much of what makes Winchester exceptional is the people who are a part of the school. Also, its beauty - the buildings, the grounds, the setting. Our heritage and archives provide insight into the past, while our community partnerships prepare boys for a future of compassionate leadership.'
    >
      {getModal(modalType)}
      <Hero />
      <About />
      <OurHistory handleModal={handleModal} />
      <MessageAndProcedure handleModal={handleModal} />
      <CorePurpose handleModal={handleModal} />
      <Experience />
      <Location />
      <Footer />
    </Layout>
  )
}
