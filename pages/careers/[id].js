import React from 'react'
import {
  Box,
  Text,
  Icon,
  Container,
  Heading,
  Flex,
  Button,
  List,
  ListIcon,
  ListItem,
  useDisclosure
} from '@chakra-ui/react'
import { FaMapMarkerAlt, FaBriefcase, FaClock } from 'react-icons/fa'
import { BsDot } from 'react-icons/bs'

import Layout from '@components/Layout'
import Footer from '@components/Home/Footer'

import ApplicationModal from '@components/Career/ApplicationModal'

const VacancyDetail = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const lists = [
    'Business Intelligence solutions',
    'Cloud computing platforms (AWS)'
  ]

  return (
    <Layout
      name='Career'
      link='career'
      image_url='https://gcu.sch.ng/images/logo.svg'
      description='So much of what makes Winchester exceptional is the people who are a part of the school. Also, its beauty - the buildings, the grounds, the setting. Our heritage and archives provide insight into the past, while our community partnerships prepare boys for a future of compassionate leadership.'
    >
      <ApplicationModal isOpen={isOpen} onClose={onClose} />
      <Container maxW='7xl' py={{ base: 8, lg: 24 }}>
        <Box textAlign='center'>
          <Heading mb={{ lg: 6 }} fontSize={{ base: '1.5rem', lg: '64px' }}>
            Full-Stact Web Developer
          </Heading>
          <Flex
            mt={4}
            mx='auto'
            w={{ xl: 125 }}
            align='center'
            justify='center'
          >
            <Flex align='center' justify='space-between'>
              <Icon as={FaMapMarkerAlt} color='gcu.100' />
              <Text ml={2} fontSize={{ xl: 'lg' }}>
                Remote
              </Text>
            </Flex>
            <Flex align='center' justify='space-between' mx={{ xl: 4 }}>
              <Icon as={FaBriefcase} color='gcu.100' />
              <Text ml={2} fontSize={{ xl: 'lg' }}>
                Full-time
              </Text>
            </Flex>
            <Flex align='center' justify='space-between'>
              <Icon as={FaClock} color='gcu.100' />
              <Text ml={2} fontSize={{ xl: 'lg' }}>
                Posted 8 hours ago
              </Text>
            </Flex>
          </Flex>
        </Box>
        <Container maxW='3xl' py={{ base: 8, lg: 24 }}>
          <Box mb={{ lg: 8 }}>
            <Heading fontSize={{ base: '1.5rem', lg: '21px' }}>
              Role overview:
            </Heading>
            <Box my={{ lg: 3 }}>
              <Text
                mb={{ xl: 4 }}
                fontSize={{ xl: 'lg' }}
                lineHeight={{ xl: '30px' }}
              >
                Headquartered in Melbourne, Australia, Envato is a completely
                online company with an ecosystem of sites and services to help
                people get creative. We’ve consistently been named as one of the
                Best Places to Work in Australia, since 2015, in the BRW Awards,
                and we’ve also been awarded the title of Australia's Coolest
                Company for Women and Diversity by JobAdvisor
              </Text>
              <Text
                mb={{ xl: 4 }}
                fontSize={{ xl: 'lg' }}
                lineHeight={{ xl: '30px' }}
              >
                Envato was found in 2006 and, since then, we’ve helped a
                community of creative sellers earn more than $500 Million.
                Millions of people around the world choose our marketplace,
                studio and courses to buy files, hire freelancers, or learn the
                skills needed to build websites, videos, apps, graphics and
                more. Find out more at Envato Market, Envato Elements, Envato
                Sites, Envato Studio and Tuts+.
              </Text>
              <Text fontSize={{ xl: 'lg' }} lineHeight={{ xl: '30px' }}>
                You might be surprised to know that not only do we run some of
                the biggest websites in the world; we’re also growing really
                fast! We have close to 600 staff and contractors worldwide,
                adding more than 100 people to the business, year on year, since
                2017.
              </Text>
            </Box>
          </Box>
          <Box mb={{ lg: 8 }}>
            <Heading fontSize={{ base: '1.5rem', lg: '21px' }}>
              Main responsibilities:
            </Heading>
            <Box my={{ lg: 3 }}>
              <Text fontSize={{ xl: 'lg' }} lineHeight={{ xl: '30px' }}>
                A Senior Data Engineer provides technical and delivery
                leadership for a team of developers working on data integration
                and processing projects. This role will work with stakeholders
                and other developers to design and implement technical data
                solutions for the business in a way that balances quality, cost,
                time and maintainability.
              </Text>
            </Box>
          </Box>
          <Box mb={{ lg: 8 }}>
            <Heading fontSize={{ base: '1.5rem', lg: '21px' }}>
              Skills & Qualifications
            </Heading>
            <Box my={{ lg: 3 }}>
              <List spacing={3}>
                {lists.map(item => (
                  <ListItem key={item} d='flex' alignItems='center'>
                    <ListIcon as={BsDot} boxSize={10} />
                    {item}
                  </ListItem>
                ))}
              </List>
            </Box>
          </Box>
          <Box mb={{ lg: 8 }}>
            <Heading fontSize={{ base: '1.5rem', lg: '21px' }}>
              How to apply
            </Heading>
            <Box my={{ lg: 3 }}>
              <Text fontSize={{ xl: 'lg' }} lineHeight={{ xl: '30px' }}>
                A Senior Data Engineer provides technical and delivery
                leadership for a team of developers working on data integration
                and processing projects. This role will work with stakeholders
                and other developers to design and implement technical data
                solutions for the business in a way that balances quality, cost,
                time and maintainability.
              </Text>
            </Box>
          </Box>
          <Button
            h={14}
            rounded='lg'
            color='#fff'
            boxShadow='lg'
            fontSize='sm'
            fontWeight={500}
            colorScheme='gcuButton'
            _focus={{ outline: 'none' }}
            onClick={() => onOpen()}
          >
            Apply for the position
          </Button>
        </Container>
      </Container>
      <Footer />
    </Layout>
  )
}

export default VacancyDetail
