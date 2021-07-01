import React from 'react'
import PropTypes from 'prop-types'

import Layout from '@components/Layout'
import Footer from '@components/Home/Footer'

import Hero from '@components/News/Hero'
import NewItems from '@components/News/NewItems'
import { fetchStrapiContent } from 'mics'

const News = ({ news }) => {
  return (
    <Layout
      name='News'
      link='news'
      image_url='https://gcu.sch.ng/images/logo.svg'
      description='So much of what makes Winchester exceptional is the people who are a part of the school. Also, its beauty - the buildings, the grounds, the setting. Our heritage and archives provide insight into the past, while our community partnerships prepare boys for a future of compassionate leadership.'
    >
      <Hero />
      <NewItems {...{ news }} />

      <Footer />
    </Layout>
  )
}

News.propTypes = {
  news: PropTypes.array.isRequired
}

export default News

export const getStaticProps = async () => {
  const news = await fetchStrapiContent('blog-posts')

  return {
    props: {
      news
    }
  }
}
