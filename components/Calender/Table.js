import React from 'react'
import {
  Tr,
  Td,
  Box,
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
          date: 'Thu, Aug 13 – Tue, Aug 18',
          title: 'Great Beginnings Classes for New First-Year Students'
        },
        {
          date: 'Sun, Aug 16 – Tue, Aug 18',
          title: 'Great Beginnings Classes for Transfer Students'
        },
        {
          date: 'Mon, Aug 17',
          title: 'Enrollment Confirmation'
        },
        {
          date: 'Tue, Aug 18',
          title: `Sophomore Class Meeting, 8:30 a.m.<br/> 
                        Junior Class Meeting, 9:45 a.m <br/> 
                        Senior Class Meeting, 11 a.m. <br/> 
                        All meetings in Clayton Center, Nutt Theatre`
        },
        {
          date: 'Wed, Aug 19',
          title: 'Fall Semester Classes Begin'
        },
        {
          date: 'Thu, Aug 20',
          title: 'Opening Convocation'
        }
      ]
    },
    {
      session: '2022/2023',
      data: [
        {
          date: 'Thu, Aug 13 – Tue, Aug 18',
          title: 'Great Beginnings Classes for New First-Year Students'
        },
        {
          date: 'Sun, Aug 16 – Tue, Aug 18',
          title: 'Great Beginnings Classes for Transfer Students'
        },
        {
          date: 'Mon, Aug 17',
          title: 'Enrollment Confirmation'
        },
        {
          date: 'Tue, Aug 18',
          title: `Sophomore Class Meeting, 8:30 a.m.<br/> 
                        Junior Class Meeting, 9:45 a.m <br/> 
                        Senior Class Meeting, 11 a.m. <br/> 
                        All meetings in Clayton Center, Nutt Theatre`
        },
        {
          date: 'Wed, Aug 19',
          title: 'Fall Semester Classes Begin'
        },
        {
          date: 'Thu, Aug 20',
          title: 'Opening Convocation'
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
