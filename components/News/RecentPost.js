import React from 'react'
import PropTypes from 'prop-types'
import { Box, Text } from '@chakra-ui/react'
import NewsFound from './NewsFound'

const RecentPost = ({ posts }) => {
  return (
    <Box mt={10} w='80%'>
      <Box bg='white'>
        <Text fontWeight='600' fontSize='lg'>
          Recent Posts
        </Text>
        {posts?.map((e, i) => (
          <NewsFound
            key={e.id}
            id={e.id}
            title={e.title}
            date={e.published_at}
            cut={!(posts?.length !== i + 1)}
          />
        ))}
      </Box>
    </Box>
  )
}

RecentPost.propTypes = {
  posts: PropTypes.array.isRequired
}

export default RecentPost
