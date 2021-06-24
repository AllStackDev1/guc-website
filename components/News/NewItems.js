/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import React from 'react'
import PropTypes from 'prop-types'
import ReactPaginate from 'react-paginate'
import {
  Box,
  Text,
  Grid,
  Link,
  Icon,
  Flex,
  GridItem,
  Container
} from '@chakra-ui/react'
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi'
import NextLink from 'next/link'

const NewItems = ({ news }) => {
  const [dataToDisplay, setDataToDisplay] = React.useState([])
  const [pageCount, setPageCount] = React.useState(0)
  const perPage = 12

  React.useEffect(() => {
    setDataToDisplay(news?.slice(0, perPage))
    setPageCount(Math.ceil(news?.length / perPage))
  }, [news])

  const handlePageClick = data => {
    const offset = Math.ceil(data.selected * perPage)
    setDataToDisplay(news?.slice(offset, offset + perPage))
  }

  const PageButton = ({ icon }) => (
    <Flex w={16} h={16} align='center' rounded='full' justify='center'>
      <Icon as={icon} />
    </Flex>
  )

  PageButton.propTypes = {
    icon: PropTypes.any.isRequired
  }

  return (
    <Container maxW='7xl' py={{ base: 8, lg: 0 }}>
      <Grid mt={8} templateColumns={{ xl: 'repeat(3, 1fr)' }} gap={10}>
        {dataToDisplay?.map(i => (
          <GridItem key={i.id} w={{ xl: 80 }}>
            <Box as='iframe' src={i.media} h={{ xl: 80 }} mb={{ xl: 4 }} />
            <Text fontSize='sm' color='gray.300' lineHeight='20px'>
              {i.tag}
            </Text>
            <Text fontWeight='500' fontSize={{ xl: 'xl' }} lineHeight='34px'>
              {i.title}
            </Text>
            <NextLink href={`/news/${i.id}`} passHref>
              <Link fontWeight='500' color='gcu.100' fontSize={{ xl: 'sm' }}>
                READ MORE
              </Link>
            </NextLink>
          </GridItem>
        ))}
      </Grid>
      {news?.length > perPage && (
        <Box mt={{ xl: 10 }} mx='auto' w={{ xl: '45%' }}>
          <ReactPaginate
            previousLabel={<PageButton icon={FiChevronLeft} />}
            nextLabel={<PageButton icon={FiChevronRight} />}
            breakLabel='...'
            breakClassName='break-me'
            pageCount={pageCount}
            marginPagesDisplayed={0}
            pageRangeDisplayed={2}
            onPageChange={handlePageClick}
            containerClassName='pagination'
            activeClassName='active'
          />
        </Box>
      )}
    </Container>
  )
}

NewItems.propTypes = {
  news: PropTypes.array.isRequired
}

export default NewItems
