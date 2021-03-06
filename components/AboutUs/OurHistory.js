import React from 'react'
import { Fade } from 'react-reveal'
import { Box, Text, Container, Heading, Flex } from '@chakra-ui/react'

const OurHistory = () => {
  const [showMore, setShowMore] = React.useState(false)
  return (
    <Container
      d='flex'
      maxW='7xl'
      py={{ base: 6, lg: 10 }}
      px={{ base: 4, lg: 14 }}
      alignItems={{ base: 'center', xl: 'flex-start' }}
      flexDir={{ base: 'column', xl: 'row' }}
      justifyContent={{ xl: 'space-between' }}
    >
      <Heading
        as='h4'
        color='#0A083B'
        fontWeight='normal'
        fontSize={{ base: '2xl', lg: '42px' }}
        lineHeight={{ base: 'short', xl: '59px' }}
      >
        OUR HISTORY
      </Heading>
      <Box w={{ lg: '60%' }}>
        <Fade top cascade>
          <Text
            mt={4}
            mb={6}
            fontSize={{ base: 'sm', xl: 'lg' }}
            lineHeight='28px'
          >
            Government College Umuahia has a remarkable heritage. It was
            famously called “Eton of the East” among educators and students in
            Nigeria. Its traditions were modelled along the Eton tradition. Its
            orientation was clearly for the education of gentlemen who were
            expected to be the leading lights of each of their generations.
          </Text>
          <Text
            mt={4}
            mb={6}
            fontSize={{ base: 'sm', xl: 'lg' }}
            lineHeight='28px'
          >
            For the first forty years of its existence, Government College
            Umuahia was a beacon of excellence and source of pride to Umuahia,
            the region and Nigeria. In 1927, the Reverend Robert William Fisher
            transferred his services from the Gold Coast to the Education
            Services of Nigeria and was appointed Principal of Government
            College Umuahia, charged with developing the school. Robert Fisher
            acquired vast land at Umudike and built Government College Umuahia
            on the road to Ikot Ekpene from Umuahia, and ten miles from the
            Umuahia Railway station, at the center of the city. The College grew
            in leaps and bounds until it was closed down in 1939/40 to serve as
            an interment camp for German prisoners of war during WW II.
          </Text>
          <Text
            mt={4}
            mb={6}
            fontSize={{ base: 'sm', xl: 'lg' }}
            lineHeight='28px'
          >
            In January 1943, some Umuahians were admitted to reopen the school.
            The next class of 1944 soon followed and in 1945, Mr. William
            Simpson was appointed to Government College Umuahia. His era began
            what is called the “Simpson years”, which saw the admission into the
            College of Chinua Achebe, C.C. Momah, Christopher Okigbo, V.C. Ike,
            Elechi Amadi – boys who dominated the tradition of modern letters in
            Nigeria in that era.
            {!showMore && (
              <Text
                ml={4}
                as='span'
                fontSize='sm'
                color='gcu.100'
                cursor='pointer'
                fontWeight={600}
                fontFamily='body'
                letterSpacing='4px'
                onClick={() => setShowMore(e => !e)}
              >
                ...Read More
              </Text>
            )}
          </Text>
        </Fade>
        <Box display={showMore ? 'block' : 'none'}>
          <Fade top cascade>
            <Text
              mt={4}
              mb={6}
              fontSize={{ base: 'sm', xl: 'lg' }}
              lineHeight='28px'
            >
              On account of the decay at Umuahia, which had reduced this
              magnificent school to a terrible shadow of itself, the alumni of
              Government College (The Oldboys) took the bull literally by the
              horn. They surveyed the ruins at Umuahia and concluded that
              radical intervention was required to save this magnificent but
              crumbling edifice or let it die. The Old Boys led the charge, and
              convinced the administration of the Abia state government under
              Governor Theodore Orji, to cede GCU to a public Trust primarily
              endowed by the Old Boys of the School. Thus, Government College
              Umuahia was ceded to the Fisher Education Development Trust (FEDT)
              which will henceforth manage the school and its future
              development.
            </Text>
            <Text
              mt={4}
              mb={6}
              fontSize={{ base: 'sm', xl: 'lg' }}
              lineHeight='28px'
            >
              The point is, Government College is back! The Trustees of
              Government College Umuahia have worked in the last five years to
              restore, rehabilitate, rebuild, and reconstruct the facilities at
              Umuahia. Today, Government College Umuahia sits on vast grounds –
              on land larger than the campus of the University of Nigeria at
              Nsukka. Government College Umuahia grounds hosts ample facilities
              for the education of boys, the most privileged of whom have had
              the opportunity of education of a first-class kind under great
              masters.
            </Text>
            <Text
              mt={4}
              mb={6}
              textAlign='right'
              fontWeight='bold'
              fontSize={{ base: 'sm', xl: 'lg' }}
            >
              -- Professor Obi Nwakanma.
            </Text>
          </Fade>
        </Box>

        <Flex
          mt={{ lg: 8 }}
          mb={{ lg: 10 }}
          lineHeight='59px'
          fontSize='48px'
          color='gcu.100'
          justify='space-between'
          align={{ base: 'center', xl: 'initial' }}
        >
          <Box
            w={{ base: '50%', xl: '25%' }}
            mb={{ base: 3, xl: 0 }}
            lineHeight='28px'
          >
            <Text as='h2'>1929</Text>
            <Text
              mt={-10}
              lineHeight='0'
              as='span'
              fontSize={{ base: 'sm', xl: 'lg' }}
            >
              Year <br /> Established
            </Text>
          </Box>
          <Box w={{ base: '50%', xl: '25%' }} lineHeight='28px'>
            <Text as='h2'>20k</Text>
            <Text as='span' lineHeight='0' fontSize={{ base: 'sm', xl: 'lg' }}>
              Alumni <br /> Worldwide
            </Text>
          </Box>
          <Box w={{ base: '50%', xl: '25%' }} lineHeight='28px'>
            <Text as='h2'>100+</Text>
            <Text as='span' lineHeight='0' fontSize={{ base: 'sm', xl: 'lg' }}>
              Great <br /> Leaders
            </Text>
          </Box>
          <Box w={{ base: '50%', xl: '25%' }} lineHeight='28px'>
            <Text as='h2'>92</Text>
            <Text as='span' lineHeight='0' fontSize={{ base: 'sm', xl: 'lg' }}>
              years of <br /> raising leaders
            </Text>
          </Box>
        </Flex>
      </Box>
    </Container>
  )
}

export default OurHistory
