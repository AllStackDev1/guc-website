import React from 'react'
import PropTypes from 'prop-types'

import Layout from '@components/Layout'
import Footer from '@components/Home/Footer'

import Hero from '@components/News/Hero'
import { fetchStrapiContent } from 'mics'

export default function NewsDetail({ details }) {
  return (
    <Layout
      name='News Detail'
      link='new/1'
      image_url='https://gcu.sch.ng/images/logo.svg'
      description='So much of what makes Winchester exceptional is the people who are a part of the school. Also, its beauty - the buildings, the grounds, the setting. Our heritage and archives provide insight into the past, while our community partnerships prepare boys for a future of compassionate leadership.'
    >
      <Hero />

      <Footer />
    </Layout>
  )
}

NewsDetail.propTypes = {
  details: PropTypes.object.isRequired
}

export async function getStaticPaths() {
  const news = await fetchStrapiContent('blog-posts')

  const paths = news.map(({ _id: id }) => ({ params: { id } }))

  return { paths, fallback: false }
}

export const getStaticProps = async ({ params: { id } }) => {
  const details = await fetchStrapiContent(`blog-posts/${id}`)

  return {
    props: {
      details
    }
  }
}
