/* eslint-disable no-unused-vars */
import React from 'react'
import NextLink from 'next/link'
import { Text, Box, Button, Flex, Link, IconButton } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import useApp from 'context/app'

import { OpenMenuIcon, CloseMenuIcon } from 'theme/Icons'

import DropDown from './DropDown'
import MobileDropdown from './MobileDropdown'

const MainNav = () => {
  const { handleModal, toggleMenu, isMenuOpen } = useApp()
  const router = useRouter()

  const menus = [
    {
      id: 1,
      title: 'Home',
      link: '/'
    },
    {
      id: 2,
      title: 'About Us',
      // items: [
      //   {
      //     title: 'Our History',
      //     action: () => handleModal('history')
      //   },
      //   {
      //     title: 'Admissions',
      //     action: () => handleModal('procedure')
      //   }
      // ]
      withLink: '/about-us',
      items: [
        {
          id: 1,
          title: 'Leadership Team',
          link: '/about-us/leadership-team'
        }
        //, {
        //   id: 2,
        //   title: 'Alumin',
        //   link: '/about-us/alumin'
        // }
      ]
    },
    {
      id: 3,
      title: 'Admissions',
      link: '/admission'
    },
    {
      id: 4,
      title: 'Careers',
      link: '/careers'
    },
    {
      id: 5,
      title: 'Boarding',
      withLink: '/boarding',
      items: [
        {
          id: 1,
          title: 'Pastoral Care',
          link: '/boarding/pastoral-care'
        },
        {
          id: 2,
          title: 'Sports',
          link: '/boarding/sports'
        }
      ]
    },
    {
      id: 6,
      title: 'Calendar',
      link: '/calendar'
    },
    // {
    //   id: 7,
    //   title: 'News',
    //   link: '/news'
    // },
    {
      id: 8,
      title: 'Apply Now',
      btnLink: 'https://enrollment.gcu.sch.ng'
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
        zIndex={2}
        align='center'
        borderBottomWidth={1}
        px={{ base: 4, md: 12, xl: 16 }}
        fontSize={{ lg: 'sm', xl: 'md' }}
        h={{ base: 16, md: '4.5rem', xl: 36 }}
      >
        <Box
          px={2}
          pos='absolute'
          onClick={_ => toggleMenu()}
          d={{ base: 'block', xl: 'none' }}
        >
          <IconButton
            p={0}
            w={6}
            colorScheme='none'
            _focus={{ outline: 'none' }}
            aria-label='Open Mobile Menu'
            icon={
              isMenuOpen ? (
                <CloseMenuIcon boxSize={4} />
              ) : (
                <OpenMenuIcon boxSize={6} />
              )
            }
          />
          <Text mt={-2} fontWeight='bold' fontSize='x-small'>
            {isMenuOpen ? 'Close' : 'Menu'}
          </Text>
        </Box>

        <Flex mx={{ base: 'auto', lg: 'unset' }} align='center'>
          <NextLink href='/' passHref>
            <Link _focus={{ outline: 'none' }} _hover={{ outline: 'none' }}>
              <Box
                bgImage={{
                  base: "url('/images/logo@1x.svg')",
                  lg: "url('/images/logo.svg')"
                }}
                w={{ base: '3.125rem', lg: '7.5rem' }}
                h={{ base: '3.063rem', lg: 32 }}
              />
            </Link>
          </NextLink>
        </Flex>

        <Flex
          align='center'
          mx={{ xl: 5 }}
          pos='absolute'
          fontSize='md'
          fontWeight={500}
          justify='flex-end'
          right={{ md: 10, xl: 0 }}
          d={{ base: 'none', xl: 'flex' }}
        >
          {menus.map(menu => (
            <React.Fragment key={menu.id}>
              {menu.items && (
                <DropDown
                  mr={8}
                  color='gcu.100'
                  data={menu.items}
                  title={menu.title}
                  withLink={menu.withLink}
                />
              )}

              {menu.link && (
                <Box mr={8}>
                  <NextLink href={menu.link} passHref>
                    <Link
                      style={
                        router.pathname.split('/')[1] ===
                        menu.link.split('/')[1]
                          ? { color: '#C82B38' }
                          : {}
                      }
                      _focus={{ outline: 'none' }}
                      _hover={{ hover: 'none' }}
                    >
                      {menu.title}
                    </Link>
                  </NextLink>
                </Box>
              )}

              {menu.btnLink && (
                <Box ml={{ md: 4, xl: 12 }} mr={{ md: 4, xl: 5 }}>
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
        </Flex>
      </Flex>

      {isMenuOpen && (
        <Box
          bg='white'
          w='100%'
          d={{ base: 'block', xl: 'none' }}
          px={10}
          pt={16}
          pos='fixed'
          h='100vh'
          zIndex={1}
        >
          {menus
            .filter(menu => !menu.btnLink)
            .map(menu => (
              <MobileDropdown
                key={menu.id}
                {...{ item: menu }}
                toggleMenu={toggleMenu}
              />
            ))}
        </Box>
      )}
    </Box>
  )
}

export default MainNav
