import React from 'react'
import NextLink from 'next/link'
import { Box, Link } from '@chakra-ui/react'
import { Menu } from '@headlessui/react'
import { motion } from 'framer-motion'
import PropTypes from 'prop-types'

const MotionBox = motion(Box)

const MenuItem = ({ item, i }) => {
  return (
    <>
      <Menu.Item
        key={item.name}
        as={MotionBox}
        custom={i}
        variants={{
          hidden: i => ({
            y: -50 * i,
            opacity: 0
          }),
          visible: i => ({
            y: 0,
            opacity: 1,
            transition: {
              delay: i * 0.025
            }
          }),
          removed: {
            y: 30 * i
          }
        }}
        initial='hidden'
        animate='visible'
        exit='removed'
      >
        {({ active }) => (
          <NextLink href={item.link} passHref>
            <Link
              py={2}
              px={6}
              _hover={{
                textDecor: 'none',
                bg: 'gcu.100',
                color: 'white'
              }}
              d='block'
            >
              {item.title}
            </Link>
          </NextLink>
        )}
      </Menu.Item>
    </>
  )
}

MenuItem.propTypes = {
  item: PropTypes.object,
  i: PropTypes.number
}

export default MenuItem
