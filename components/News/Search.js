import React from 'react'
import PropTypes from 'prop-types'
import {
  Box,
  Text,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement
} from '@chakra-ui/react'
import { FiSearch, FiXCircle } from 'react-icons/fi'
import Result from './Result'

const Search = ({ posts }) => {
  const [inputValue, setInputValue] = React.useState(null)
  const [postsData, setPostsData] = React.useState(null)
  const searchInputRef = React.useRef(null)

  const handleSearch = event => {
    let value = event.target?.value || null
    if (value) {
      const filtered = posts.filter(
        item =>
          !!item?.title?.match(new RegExp(value.trim().toLowerCase(), 'i'))
      )
      setInputValue(value)
      setPostsData(filtered)
    } else {
      setInputValue(null)
      setPostsData(null)
    }
  }

  const clearInput = () => {
    if (searchInputRef.current) {
      searchInputRef.current.value = null
      handleSearch({})
    }
  }

  return (
    <Box pos='relative' w='full'>
      <Box bg='white' w='90%' rounded='lg' shadow='lg' p={8}>
        <Text fontSize='21px'>Search</Text>
        <InputGroup mt={3}>
          <InputLeftElement
            h={14}
            zIndex={0}
            fontSize='lg'
            pointerEvents='none'
          >
            <FiSearch color='gray.300' />
          </InputLeftElement>
          <Input
            h={14}
            type='text'
            value={inputValue}
            ref={searchInputRef}
            onChange={handleSearch}
            placeholder='Type to search'
          />
          <InputRightElement
            h={14}
            zIndex={1}
            fontSize='lg'
            cursor='pointer'
            onClick={clearInput}
          >
            <FiXCircle color='gray.300' />
          </InputRightElement>
        </InputGroup>
      </Box>
      {inputValue &&
        (postsData?.length ? (
          <Result data={postsData} />
        ) : (
          <Box
            px={8}
            py={6}
            mt={2}
            h={14}
            w='90%'
            bg='white'
            zIndex={10}
            shadow='lg'
            rounded='lg'
            pos='absolute'
            textAlign='center'
          >
            <Text color='gray.200'>No result found</Text>
          </Box>
        ))}
    </Box>
  )
}

Search.propTypes = {
  posts: PropTypes.array.isRequired
}

export default Search
