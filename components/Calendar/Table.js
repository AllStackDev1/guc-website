import React from 'react'
import PropTypes from 'prop-types'
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
import marked from 'marked'

export default function CalTable({ sessions }) {
  const borderStyle = { borderWidth: '1px', borderColor: 'gray.300' }
  return (
    <Container maxW='6xl'>
      {sessions?.map((i, idx) => (
        <Box key={i.title} mt={!!idx && { base: 10, lg: 20 }}>
          <Heading mb={{ lg: 6 }} fontSize={{ base: '1.875rem', lg: '32px' }}>
            {i.title} Session
          </Heading>
          <Table size='lg' fontSize={{ base: 'sm', xl: 'lg' }} {...borderStyle}>
            <Tbody>
              {i.events.map((ii, idx) => (
                <React.Fragment key={ii.date}>
                  <Tr d={{ base: 'none', xl: 'table-row' }}>
                    <Td p={{ lg: 10 }} {...borderStyle}>
                      <Text fontWeight='bold'>{ii.date}</Text>
                    </Td>
                    <Td {...borderStyle}>
                      <Box
                        lineHeight='22px'
                        dangerouslySetInnerHTML={{
                          __html: marked(ii?.title)
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

CalTable.propTypes = {
  sessions: PropTypes.array.isRequired
}
