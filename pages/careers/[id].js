import React from 'react'
import moment from 'moment'
import { useRouter } from 'next/router'
import {
  Box,
  Link,
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
import vacancies from '@components/Career/data'

const VacancyDetail = () => {
  const [details, setDetails] = React.useState({})
  const { isOpen, onOpen, onClose } = useDisclosure()
  const router = useRouter()
  const { id: _id } = router.query

  React.useEffect(() => {
    if (_id) {
      setDetails(vacancies.find(({ id }) => id * 1 === _id * 1))
    }
  }, [_id])

  return (
    <Layout
      name='Career'
      link='career'
      image_url='https://gcu.sch.ng/images/logo.svg'
      description='So much of what makes Winchester exceptional is the people who are a part of the school. Also, its beauty - the buildings, the grounds, the setting. Our heritage and archives provide insight into the past, while our community partnerships prepare boys for a future of compassionate leadership.'
    >
      <ApplicationModal
        jobTitle={details.title}
        isOpen={isOpen}
        onClose={onClose}
      />
      <Container maxW='7xl' py={{ base: 8, lg: 24 }}>
        <Box textAlign='center'>
          <Heading mb={{ lg: 6 }} fontSize={{ base: '1.5rem', lg: '64px' }}>
            {details.title}
          </Heading>
          <Flex
            mt={4}
            mx='auto'
            w={{ xl: 125 }}
            align='center'
            justify={{ base: 'space-around', lg: 'center' }}
          >
            <Flex
              fontSize={{ base: 'sm', xl: 'md' }}
              align='center'
              justify='space-between'
            >
              <Icon as={FaMapMarkerAlt} color='gcu.100' />
              <Text ml={{ base: 1, lg: 2 }}>{details.location}</Text>
            </Flex>
            <Flex
              fontSize={{ base: 'sm', xl: 'md' }}
              align='center'
              justify='space-between'
              mx={{ xl: 4 }}
            >
              <Icon as={FaBriefcase} color='gcu.100' />
              <Text ml={{ base: 1, lg: 2 }}>Full-time</Text>
            </Flex>
            <Flex
              fontSize={{ base: 'sm', xl: 'md' }}
              align='center'
              justify='space-between'
            >
              <Icon as={FaClock} color='gcu.100' />
              <Text ml={{ base: 1, lg: 2 }}>
                {moment(details.date).fromNow()}
              </Text>
            </Flex>
          </Flex>
        </Box>
        <Container maxW='3xl' py={{ base: 8, lg: 24 }}>
          <Box mb={8}>
            <Heading fontSize={{ base: '1.5rem', lg: '21px' }}>
              Role overview:
            </Heading>
            <Box my={{ lg: 3 }}>
              <Text
                mb={{ xl: 4 }}
                fontSize={{ base: 'sm', xl: 'lg' }}
                lineHeight={{ xl: '30px' }}
                dangerouslySetInnerHTML={{
                  __html: details?.description
                }}
              />
            </Box>
          </Box>
          <Box mb={8}>
            <Heading fontSize={{ base: '1.5rem', lg: '21px' }}>
              Main responsibilities:
            </Heading>
            <Box
              my={{ lg: 3 }}
              ml={{ lg: 6 }}
              fontSize={{ base: 'sm', xl: 'md' }}
              dangerouslySetInnerHTML={{
                __html: details?.responsibilities
              }}
            />
          </Box>
          {details?.skills && (
            <Box mb={8}>
              <Heading fontSize={{ base: '1.5rem', lg: '21px' }}>
                Skills & Qualifications
              </Heading>
              <Box my={{ lg: 3 }}>
                <List spacing={3}>
                  {details?.skills?.map(item => (
                    <ListItem
                      fontSize={{ base: 'sm', xl: 'md' }}
                      key={item}
                      d='flex'
                      alignItems='center'
                    >
                      <ListIcon as={BsDot} boxSize={10} />
                      {item}
                    </ListItem>
                  ))}
                </List>
              </Box>
            </Box>
          )}

          <Box mb={8}>
            <Heading fontSize={{ base: '1.5rem', lg: '21px' }}>
              How to apply
            </Heading>
            <Box my={{ lg: 3 }}>
              <Text
                fontSize={{ base: 'sm', xl: 'lg' }}
                lineHeight={{ xl: '30px' }}
              >
                Please submit your CV to{' '}
                <Link
                  href={`mailto:admin@gcu.sch.ng?subject=Application for the role of ${details.title}`}
                  color='gcu.100'
                >
                  admin@gcu.sch.ng
                </Link>
                {' or '}
                <Link
                  href={`mailto:gcu.umuahia@gmail.com?subject=Application for the role of ${details.title}`}
                  color='gcu.100'
                >
                  gcu.umuahia@gmail.com
                </Link>{' '}
                or click the button below
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
