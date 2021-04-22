import React from 'react'
import PropTypes from 'prop-types'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu } from '@headlessui/react'
import NextLink from 'next/link'
import { FiChevronDown, FiChevronUp } from 'react-icons/fi'

import { Box, Icon, Text, Flex, Link } from '@chakra-ui/react'

const MotionBox = motion(Box)

const DropDown = ({ title, data, color, ...rest }) => {
  return (
    <Menu as={Box} userSelect='none' {...rest}>
      {({ open }) => (
        <>
          <Menu.Button
            as={Box}
            _focus={{ outline: 'none' }}
            _hover={{ hover: 'none', color: color || 'cf.400' }}
            cursor='pointer'
          >
            <Flex align='center'>
              <Text ml={2}>{title}</Text>
              <Box>
                <Icon
                  ml={1}
                  as={open ? FiChevronUp : FiChevronDown}
                  boxSize={4}
                />
              </Box>
            </Flex>
          </Menu.Button>
          <AnimatePresence>
            {open && (
              <Menu.Items
                static
                as={MotionBox}
                initial={{ opacity: 0, y: -50 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.3 }
                }}
                w={60}
                mt={2}
                bg='white'
                rounded='lg'
                pos='absolute'
                color='gray.600'
                borderWidth={1}
                borderColor='gray.100'
                _focus={{ outline: 'none' }}
                exit={{ opacity: 0.2, y: 50 }}
              >
                <AnimatePresence>
                  {data.map((item, i) => (
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
                              textDecor: 'none'
                            }}
                            bg={active && color}
                            color={active && 'white'}
                            d='block'
                          >
                            {item.title}
                          </Link>
                        </NextLink>
                      )}
                    </Menu.Item>
                  ))}
                </AnimatePresence>
              </Menu.Items>
            )}
          </AnimatePresence>
        </>
      )}
    </Menu>
  )
}

DropDown.propTypes = {
  title: PropTypes.string,
  data: PropTypes.array,
  color: PropTypes.string
}

export default DropDown
