import React from 'react'
import PropTypes from 'prop-types'
import { Box } from '@chakra-ui/react'
import NewsFound from './NewsFound'

const Result = ({ data }) => {
  return (
    <Box
      px={8}
      py={6}
      mt={2}
      h={110}
      w='full'
      bg='white'
      zIndex={10}
      shadow='lg'
      rounded='lg'
      pos='absolute'
      overflowY='scroll'
    >
      {data.map((e, i) => (
        <NewsFound
          key={e.id}
          id={e.id}
          title={e.title}
          date={e.published_at}
          cut={!(data?.length !== i + 1)}
        />
      ))}
    </Box>
  )
}

Result.propTypes = {
  data: PropTypes.any
}

export default Result
