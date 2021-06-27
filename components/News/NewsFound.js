import React from 'react'
import PropTypes from 'prop-types'
import { Box, Link, Text, Divider } from '@chakra-ui/react'
import moment from 'moment'
import NextLink from 'next/link'

const NewsFound = ({ id, title, date, cut }) => {
  return (
    <>
      <NextLink href={`/news/${id}`} passHref>
        <Link _hover={{ color: 'gcu.100', fontWeight: 500 }}>
          <Box mt={6} mb={4}>
            <Text fontSize='lg' lineHeight='28px'>
              {title}
            </Text>
            <Text mt={2} fontSize='15px'>
              {moment(date).format('ll')}
            </Text>
          </Box>
        </Link>
      </NextLink>
      {!cut && <Divider />}
    </>
  )
}

NewsFound.propTypes = {
  cut: PropTypes.bool.isRequired,
  id: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
}

export default NewsFound
