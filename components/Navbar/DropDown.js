import React from 'react'
import PropTypes from 'prop-types'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu } from '@headlessui/react'
import { useRouter } from 'next/router'
import { IoIosArrowDropdown, IoIosArrowDropup } from 'react-icons/io'
import { Box, Icon, Text, Flex } from '@chakra-ui/react'
import MenuItem from './MenuItem'

const MotionBox = motion(Box)

const DropDown = ({ title, data, color, withLink, isNavHovered, ...rest }) => {
  const [onOpen, setOnOpen] = React.useState(false)
  const { push, pathname } = useRouter()

  const onMouseEnter = () => {
    if (isNavHovered) {
      setOnOpen(true)
    }
  }

  React.useEffect(() => {
    if (!isNavHovered) {
      setOnOpen(false)
    }
  }, [isNavHovered])

  return (
    <Menu as={Box} userSelect='none' {...rest}>
      <Menu.Button
        as={Box}
        _focus={{ outline: 'none' }}
        _hover={{ hover: 'none', color: color || 'cf.400' }}
        cursor='pointer'
      >
        <Flex
          align='center'
          onMouseOver={onMouseEnter}
          style={
            (onOpen && isNavHovered) ||
            pathname.match(new RegExp(withLink, 'g'))
              ? { color: '#C82B38' }
              : {}
          }
        >
          <Text ml={2} onClick={() => withLink && push(withLink)}>
            {title}
          </Text>
          <Box>
            <Icon
              ml={1}
              as={
                onOpen && isNavHovered ? IoIosArrowDropup : IoIosArrowDropdown
              }
              boxSize={4}
            />
          </Box>
        </Flex>
      </Menu.Button>
      <AnimatePresence>
        {onOpen && isNavHovered && (
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
            filter='drop-shadow(0px 2px 20px rgba(0, 0, 0, 0.1))'
          >
            <AnimatePresence>
              {[...data]
                .filter(item => !item.items)
                .map((item, i) => (
                  <MenuItem i={i} item={item} key={item.id} />
                ))}
            </AnimatePresence>
          </Menu.Items>
        )}
      </AnimatePresence>
    </Menu>
  )
}

DropDown.propTypes = {
  title: PropTypes.string,
  data: PropTypes.array,
  color: PropTypes.string,
  withLink: PropTypes.string,
  isNavHovered: PropTypes.bool
}

export default DropDown
