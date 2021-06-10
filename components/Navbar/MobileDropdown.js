import React from 'react'
import PropTypes from 'prop-types'
import NextLink from 'next/link'
import { useRouter } from 'next/router'
import { Box, Flex, Link, Text, Icon } from '@chakra-ui/react'
import { BiChevronDown, BiChevronUp } from 'react-icons/bi'

const MobileDropdown = ({ item, toggleMenu }) => {
  const [toggleMenus, setToggleMenus] = React.useState(false)
  const router = useRouter()

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
            <Text
              onClick={() => {
                item.withLink && router.push(item.withLink)
                return toggleMenu()
              }}
            >
              {item.title}
            </Text>
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
            <Link
              _hover={{ textDecor: 'none' }}
              d='block'
              onClick={() => toggleMenu()}
            >
              {item.title}
            </Link>
          </NextLink>
        )}
      </Flex>
      {toggleMenus &&
        item.items?.map(item => {
          if (item.link) {
            return (
              <NextLink href={item.link} key={item.title} passHref>
                <Link
                  _hover={{ textDecor: 'none' }}
                  d='block'
                  ml={6}
                  py={1}
                  onClick={() => toggleMenu()}
                >
                  {item.title}
                </Link>
              </NextLink>
            )
          }
          if (item.action) {
            return (
              <Text
                py={2}
                px={6}
                _hover={{
                  color: 'black'
                }}
                cursor='pointer'
                d='block'
                onClick={() => {
                  item.action()
                  toggleMenu()
                }}
              >
                {item.title}
              </Text>
            )
          }
          return null
        })}
    </Box>
  )
}

MobileDropdown.propTypes = {
  item: PropTypes.object,
  toggleMenu: PropTypes.func
}

export default MobileDropdown
