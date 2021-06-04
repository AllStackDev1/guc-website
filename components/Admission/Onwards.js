import React from 'react'
import {
  Box,
  Text,
  Grid,
  Icon,
  Flex,
  GridItem,
  Container
} from '@chakra-ui/react'
import { FiPlayCircle } from 'react-icons/fi'

export default function Onwards() {
  const data = [
    {
      id: 1,
      name: 'Mr. David Ifezulike',
      title: 'Chief Executive Officer, Riby'
    },
    {
      id: 2,
      name: 'Mr. Okechukwu Enelamah',
      title: 'Chief Executive Officer, Riby'
    },
    {
      id: 3,
      name: 'Mr. Chukwuemeka Ifezulike',
      title: 'Chief Executive Officer, Riby'
    },
    {
      id: 4,
      name: 'Mr. Kelechi and Mr. Reginald',
      title: 'Chief Executive Officer, Riby'
    }
  ]
  return (
    <Container maxW='7xl' py={{ base: 8, lg: 14 }}>
      <Box pt={{ lg: 32 }} w={{ xl: 138 }}>
        <Text
          mb={{ lg: 8 }}
          fontFamily='heading'
          fontSize={{ lg: '42px' }}
          lineHeight={{ lg: '60px' }}
        >
          GCU ONWARDS
        </Text>
        <Text mb={{ lg: 5 }} lineHeight={{ lg: '32px' }}>
          The People Of This Country are Amazed At The Number Of Its Influential
          Citizens Who Owe Allegiance To This School, watch videos from some of
          our top GCU old boys.
        </Text>
      </Box>
      <Grid mt={8} templateColumns={{ xl: 'repeat(3, 1fr)' }} rowGap={10}>
        {data.map(i => (
          <GridItem key={i.id} w={{ xl: 80 }}>
            <Flex
              align='center'
              justify='center'
              bgColor='#F7F7F7'
              h={{ xl: 60 }}
              mb={{ xl: 4 }}
            >
              <Icon as={FiPlayCircle} color='#DADADA' boxSize={28} />
            </Flex>
            <Text
              fontFamily='sans-serif'
              fontWeight='bold'
              fontSize={{ xl: 'xl' }}
              lineHeight='32px'
            >
              {i.name}
            </Text>
            <Text
              fontFamily='sans-serif'
              fontSize={{ xl: '20px' }}
              lineHeight='32px'
            >
              {i.title}
            </Text>
          </GridItem>
        ))}
      </Grid>
    </Container>
  )
}
