import React from 'react'
import PropTypes from 'prop-types'
import NextLink from 'next/link'
import { Box, Flex, Link, Text, Icon } from '@chakra-ui/react'
import { BiChevronDown, BiChevronUp } from 'react-icons/bi'

const MobileDropdown = ({ item }) => {
  const [toggleMenus, setToggleMenus] = React.useState(false)

  return (
    <Box>
      <Flex
        align='center'
        py={4}
        borderBottomWidth={1}
        borderBottomColor='gray.200'
        _last={{ borderBottomWidth: 0 }}
        _first={{ borderTopWidth: 1 }}
      >
        {item.items ? (
          <>
            <Text>{item.title}</Text>
            <Box
              as='button'
              role='button'
              aria-label='Menu Button'
              ml={6}
              onClick={() => setToggleMenus(!toggleMenus)}
            >
              <Icon
                as={toggleMenus ? BiChevronUp : BiChevronDown}
                boxSize={6}
              />
            </Box>
          </>
        ) : (
          <NextLink href={item.link} passHref>
            <Link _hover={{ textDecor: 'none' }} d='block'>
              {item.title}
            </Link>
          </NextLink>
        )}
      </Flex>
      {toggleMenus &&
        item.items?.map(item => (
          <NextLink href={item.link} key={item.title} passHref>
            <Link _hover={{ textDecor: 'none' }} d='block' ml={6} py={1}>
              {item.title}
            </Link>
          </NextLink>
        ))}
    </Box>
  )
}

MobileDropdown.propTypes = {
  item: PropTypes.object
}

export default MobileDropdown
