import React from 'react'
import {
  Tr,
  Td,
  Box,
  Link,
  Text,
  Table,
  Tbody,
  Heading,
  Container,
  Divider
} from '@chakra-ui/react'

export default function CalTable() {
  const data = [
    {
      session: '2021/2022',
      data: [
        {
          date: 'Jul 3rd, 2021',
          title: 'Prospective Students Townhall Meeting'
        },
        {
          date: 'Jul 7th - Aug 7th, 2021',
          title: 'Application Open Session 2021/2022',
          link: () => (
            <Link
              color='gcu.100'
              target='_blank'
              href='https://enrollment.gcu.sch.ng/'
            >
              Apply Now
            </Link>
          )
        },
        {
          date: 'Sept 6th, 2021',
          title: 'School Resumes'
        },
        {
          date: 'Dec 24th - 26th, 2021',
          title: `Christmas Eve <br/>
                  Christmas Day <br/>
                  Boxing Day <br/>
          `
        },
        {
          date: 'Dec 31th, 2021',
          title: "New Year's Eve"
        },
        {
          date: 'Jan 1st, 2022',
          title: "New Year's Day"
        },
        {
          date: 'May 1st, 2022',
          title: 'Workers Day'
        },
        {
          date: 'Jun 12th, 2022',
          title: 'Democracy Day'
        },
        {
          date: 'Jul 7th - Aug 7th, 2022',
          title: 'Application Open Session 2022/2023'
        },
        {
          date: 'Oct 1st, 2022',
          title: 'Independence Day'
        }
      ]
    }
  ]

  const borderStyle = { borderWidth: '1px', borderColor: 'gray.300' }

  return (
    <Container maxW='6xl'>
      {data.map((i, idx) => (
        <Box key={i.session} mt={!!idx && { base: 10, lg: 20 }}>
          <Heading mb={{ lg: 6 }} fontSize={{ base: '1.875rem', lg: '32px' }}>
            {i.session} Session
          </Heading>
          <Table size='lg' fontSize={{ base: 'sm', xl: 'lg' }} {...borderStyle}>
            <Tbody>
              {i.data.map((ii, idx) => (
                <React.Fragment key={ii.date}>
                  <Tr d={{ base: 'none', xl: 'table-row' }}>
                    <Td p={{ lg: 10 }} {...borderStyle}>
                      <Text fontWeight='bold'>{ii.date}</Text>
                    </Td>
                    <Td {...borderStyle}>
                      <Text
                        lineHeight='22px'
                        dangerouslySetInnerHTML={{
                          __html: ii.title
                        }}
                      />
                      {ii.link && ii.link()}
                    </Td>
                  </Tr>
                  <Tr d={{ base: 'table-row', xl: 'none' }}>
                    <Td
                      d='block'
                      borderColor={
                        i.data?.length === idx + 1 ? 'inherit' : 'gray.300'
                      }
                    >
                      <Text fontWeight='bold'>{ii.date}</Text>
                      <Divider my={2} />
                      <Text
                        lineHeight='22px'
                        dangerouslySetInnerHTML={{
                          __html: ii.title
                        }}
                      />
                    </Td>
                  </Tr>
                </React.Fragment>
              ))}
            </Tbody>
          </Table>
        </Box>
      ))}
    </Container>
  )
}
