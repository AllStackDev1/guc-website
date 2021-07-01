import React from 'react'
import PropTypes from 'prop-types'
import ReactPaginate from 'react-paginate'
import {
  Box,
  Tag,
  Text,
  Grid,
  Link,
  Icon,
  Flex,
  Image,
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
          <GridItem
            key={i.id}
            w={{ xl: 80 }}
            border='1px'
            px={{ xl: 3 }}
            pb={{ xl: 3 }}
            borderColor='gray.200'
            rounded='md'
          >
            <Image src={i.thumbnail?.[0]?.url} h={{ xl: 80 }} />
            <Flex
              mb={2}
              d='inline-flex'
              flexWrap='wrap'
              sx={{ gap: '6px' }}
              justify='space-between'
            >
              {i.tags.split(',').map(e => (
                <Tag key={e} fontSize='sm' color='gray.300'>
                  {e}
                </Tag>
              ))}
            </Flex>
            <Text fontWeight='500' fontSize={{ xl: 'xl' }} lineHeight='24px'>
              {i.title}
            </Text>
            <Flex w='full' justify='flex-end'>
              <NextLink href={`/news/${i.id}`} passHref>
                <Link fontWeight='500' color='gcu.100' fontSize={{ xl: 'xs' }}>
                  READ MORE
                </Link>
              </NextLink>
            </Flex>
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
