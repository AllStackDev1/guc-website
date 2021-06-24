import React from 'react'
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
        <Text
          mt={4}
          mb={6}
          fontSize={{ base: 'sm', xl: 'lg' }}
          lineHeight='28px'
        >
          Government College Umuahia has a remarkable heritage. It was famously
          called “Eton of the East” among educators and students in Nigeria. Its
          traditions were modelled along the Eton tradition. Its orientation was
          clearly for the education of gentlemen who were expected to be the
          leading lights of each of their generations.
        </Text>
        <Text
          mt={4}
          mb={6}
          fontSize={{ base: 'sm', xl: 'lg' }}
          lineHeight='28px'
        >
          For the first forty years of its existence, the Government College
          Umuahia was a beacon of excellence and source of pride to Umuahia, the
          region and Nigeria. Following the Biafran Civil War, GCU saw a steady
          decline in its core values of excellence, discipline and merit. The
          most noticeable sign was the ruined and neglected condition of the
          facilities and physical environment. It suffered greatly from acute
          under resourcing and mismanagement.
        </Text>
        <Text
          mt={4}
          mb={6}
          fontSize={{ base: 'sm', xl: 'lg' }}
          lineHeight='28px'
        >
          In 1927, the Reverend Robert William Fisher transferred his services
          from the Gold Coast to the Education Services of Nigeria and was
          appointed Principal of the Government College Umuahia, charged with
          developing the school. Robert Fisher acquired vast land at Umudike and
          built the Government College Umuahia on the road to Ikot Ekpene from
          Umuahia, and ten miles from the Umuahia Railway station, at the center
          of the city. The College grew in leaps and bounds until it was closed
          down in 1939/40 to serve as an interment camp for German prisoners of
          war during WW II.
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
        <Box display={showMore ? 'block' : 'none'}>
          <Text
            mt={4}
            mb={6}
            fontSize={{ base: 'sm', xl: 'lg' }}
            lineHeight='28px'
          >
            In January 1943, some Umuahians were admitted to reopen the school.
            The next class of 1944 soon followed and in 1945, a most dynamic
            principal, Mr. William Simpson was appointed to the Government
            College Umuahia. His era began what is often called the “Simpson
            years,” in Umuahia, which saw the admission into the College of
            Chinua Achebe, C.C. Momah, Christopher Okigbo, V.C. Ike, Elechi
            Amadi – boys who dominated the tradition of modern letters in
            Nigeria in that era.
          </Text>
          <Text
            mt={4}
            mb={6}
            fontSize={{ base: 'sm', xl: 'lg' }}
            lineHeight='28px'
          >
            On account of the decay at Umuahia, which had reduced this
            magnificent school to a terrible shadow of itself, the alumni of the
            Government College – its Oldboys – took the bull literally by the
            horn. They surveyed the ruins at Umuahia and concluded that radical
            surgery was required to save this magnificent but crumbling edifice
            or let it die. The Old Boys led the charge, and convinced the
            administration of the Abia state government under Governor Theodore
            Orji, to cede GCU to a public Trust primarily endowed by the Old
            Boys of the School. Thus, the Government College Umuahia was ceded
            to the Fisher Education Development Trust (FEDT) which will
            henceforth manage the school and midwife its future development.
          </Text>
          <Text
            mt={4}
            mb={6}
            fontSize={{ base: 'sm', xl: 'lg' }}
            lineHeight='28px'
          >
            The point is, the Government College is back! The Trustees of the
            Government College Umuahia have worked in the last five years to
            restore, rehabilitate, rebuild, and in many cases triage old
            buildings and reconstruct the facilities at Umuahia. Today, the
            Government College Umuahia sits on vast grounds – on land larger
            than the campus of the University of Nigeria at Nsukka. The
            Government College Umuahia grounds hosts ample facilities for the
            education of boys, the most privileged of whom have had the
            opportunity of education of a first-class kind under great masters.{' '}
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
        </Box>

        <Flex
          mt={{ lg: 8 }}
          mb={{ lg: 14 }}
          lineHeight='59px'
          fontSize='48px'
          color='gcu.100'
          justify='space-between'
          align={{ base: 'center', xl: 'initial' }}
          // flexWrap={{ base: 'wrap', xl: 'nowrap' }}
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
            <Text as='h2'>50k</Text>
            <Text as='span' lineHeight='0' fontSize={{ base: 'sm', xl: 'lg' }}>
              Alumni <br /> Worldwide
            </Text>
          </Box>
          <Box w={{ base: '50%', xl: '25%' }} lineHeight='28px'>
            <Text as='h2'>100+</Text>
            <Text as='span' lineHeight='0' fontSize={{ base: 'sm', xl: 'lg' }}>
              CEOs & <br /> Chief Judges
            </Text>
          </Box>
          <Box w={{ base: '50%', xl: '25%' }} lineHeight='28px'>
            <Text as='h2'>92</Text>
            <Text as='span' lineHeight='0' fontSize={{ base: 'sm', xl: 'lg' }}>
              years of <br /> breeding leaders
            </Text>
          </Box>
        </Flex>
        <Flex
          mt={{ lg: 8 }}
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
            <Text as='h2'>2</Text>
            <Text
              mt={-10}
              lineHeight='0'
              as='span'
              fontSize={{ base: 'sm', xl: 'lg' }}
            >
              British-Nigerian
              <br /> Curriculum
            </Text>
          </Box>
        </Flex>
      </Box>
    </Container>
  )
}

export default OurHistory
