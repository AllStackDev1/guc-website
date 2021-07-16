import React from 'react'
import PropTypes from 'prop-types'
import { NextSeo } from 'next-seo'
import { Box } from '@chakra-ui/react'
import { Fade } from 'react-awesome-reveal'

import Navbar from '@components/Navbar'

const Layout = ({
  children,
  name,
  link,
  image_url = '',
  description = '',
  ...rest
}) => {
  const main_site_url = 'https://gcu.sch.ng/'
  const main_site_title = 'The Government College Umuahia'

  return (
    <>
      <NextSeo
        title={`${name} | ${main_site_title}`}
        description={description || name}
        canonical={main_site_url}
        openGraph={{
          url: `${main_site_url}/${link || name.toLowerCase()}`,
          title: `${name} | ${main_site_title}`,
          description: description || name,
          images: [
            {
              url: image_url,
              width: 800,
              height: 600,
              alt: main_site_title
            }
          ],
          site_name: main_site_title
        }}
        twitter={{
          handle: '@gcumuahia',
          site: `${main_site_url}/${name.toLowerCase()}`,
          cardType: 'summary_large_image'
        }}
      />

      <Navbar />
      <Box
        h='100%'
        as='main'
        role='main'
        fontFamily='body'
        aria-labelledby='main'
        mt={{ base: 16, md: '4.5rem', xl: 36 }}
        {...rest}
      >
        <Fade cascade delay={100}>
          {children}
        </Fade>
      </Box>
    </>
  )
}

Layout.propTypes = {
  link: PropTypes.string,
  description: PropTypes.string,
  name: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  image_url: PropTypes.string
}

export default Layout
