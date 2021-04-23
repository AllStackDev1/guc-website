import React from 'react'
// import PropTypes from 'prop-types'
import NextLink from 'next/link'
import { Box, Button, Flex, Link, IconButton } from '@chakra-ui/react'

import useApp from 'context/app'

import { OpenMenuIcon, CloseMenuIcon } from 'theme/Icons'

import DropDown from './DropDown'
import MobileDropdown from './MobileDropdown'

const MainNav = () => {
  const { handleModal, toggleMobleMenu, isMobileMenuOpen } = useApp()

  const menus = [
    {
      id: 1,
      title: 'Home',
      link: '/home'
    },
    {
      id: 2,
      title: 'About Us',
      items: [
        {
          title: 'Our History',
          action: () => handleModal('history')
        },
        {
          title: 'Admissions',
          action: () => handleModal('procedure')
        }
      ]
    },
    {
      id: 3,
      title: 'Admissions',
      link: '/#admission'
    },
    {
      id: 4,
      title: 'Apply Now',
      btnLink: '#'
    }
  ]

  return (
    <Box pos='relative'>
      <Flex
        as='nav'
        w='100%'
        role='nav'
        bg='white'
        pos='fixed'
        zIndex={60}
        align='center'
        borderBottomWidth={1}
        px={{ base: 2, md: 12, xl: 16 }}
        d={{ xs: 'none', lg: 'flex' }}
        fontSize={{ lg: 'sm', xl: 'md' }}
        h={{ base: 16, md: '4.5rem', xl: 36 }}
      >
        <Flex align='center'>
          <NextLink href='/' passHref>
            <Link _focus={{ outline: 'none' }} _hover={{ outline: 'none' }}>
              <Box bgImage="url('/images/logo.svg')" w='7.5rem' h={32} />
            </Link>
          </NextLink>
        </Flex>

        <Flex
          right={{ base: 0, md: 10, xl: 0 }}
          align='center'
          mx={{ xl: 5 }}
          pos='absolute'
          w={{ md: '40%' }}
          fontSize='md'
          fontWeight={500}
          justify='flex-end'
        >
          {menus.map(menu => (
            <React.Fragment key={menu.id}>
              {menu.items && (
                <DropDown
                  mr={5}
                  data={menu.items}
                  title={menu.title}
                  d={{ base: 'none', xl: 'block' }}
                />
              )}

              {menu.link && (
                <Box mr={{ xl: 10 }} d={{ base: 'none', xl: 'block' }}>
                  <NextLink href={menu.link} passHref>
                    <Link
                      _focus={{ outline: 'none' }}
                      _hover={{ hover: 'none' }}
                    >
                      {menu.title}
                    </Link>
                  </NextLink>
                </Box>
              )}

              {menu.btnLink && (
                <Box
                  ml={{ md: 4, xl: 12 }}
                  mr={{ md: 4, xl: 5 }}
                  d={{ base: 'none', md: 'block' }}
                >
                  <Link
                    href={menu.btnLink}
                    _hover={{ hover: 'none' }}
                    _focus={{ outline: 'none' }}
                    rel='noreferrer'
                  >
                    <Button
                      color='#fff'
                      boxShadow='lg'
                      h={{ md: 12 }}
                      rounded='0'
                      fontWeight={400}
                      colorScheme='gcuButton'
                      fontSize={{ base: 'sm', xl: 'lg' }}
                      w={{ md: '9.75rem' }}
                      _focus={{ outline: 'none' }}
                    >
                      {menu.title}
                    </Button>
                  </Link>
                </Box>
              )}
            </React.Fragment>
          ))}

          <IconButton
            d={{ base: 'block', xl: 'none' }}
            colorScheme='none'
            aria-label='Open Mobile Menu'
            onClick={_ => toggleMobleMenu()}
            icon={
              isMobileMenuOpen ? (
                <CloseMenuIcon boxSize={6} />
              ) : (
                <OpenMenuIcon boxSize={6} />
              )
            }
          />
        </Flex>
      </Flex>

      {isMobileMenuOpen && (
        <Box
          bg='white'
          w='100%'
          d={{ base: 'block', xl: 'none' }}
          px={10}
          pt={16}
          pos='fixed'
          h='100vh'
          zIndex={50}
        >
          {menus
            .filter(menu => !menu.btnLink)
            .map(menu => (
              <MobileDropdown key={menu.id} {...{ item: menu }} />
            ))}
        </Box>
      )}
    </Box>
  )
}

MainNav.propTypes = {}

export default MainNav
