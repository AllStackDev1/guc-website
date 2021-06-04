import React from 'react'
import {
  Text,
  Grid,
  Link,
  Icon,
  Flex,
  GridItem,
  Container
} from '@chakra-ui/react'
import { FiPlayCircle } from 'react-icons/fi'
import NextLink from 'next/link'

export default function NewItems() {
  const data = [
    {
      id: 1,
      tag: 'Products',
      title: 'All our physical products that we have branded and sold'
    },
    {
      id: 2,
      tag: 'Marketing',
      title: 'All our physical products that we have branded and sold'
    },
    {
      id: 3,
      tag: 'Strategy',
      title: 'The strategy we use to reach your goal quickly'
    },
    {
      id: 4,
      tag: 'Agency',
      title: 'Our telephone support is always available 24 hours a day'
    }
  ]
  return (
    <Container maxW='7xl' py={{ base: 8, lg: 0 }}>
      <Grid mt={8} templateColumns={{ xl: 'repeat(3, 1fr)' }} gap={10}>
        {data.map(i => (
          <GridItem key={i.id} w={{ xl: 80 }}>
            <Flex
              align='center'
              justify='center'
              bgColor='#F7F7F7'
              h={{ xl: 80 }}
              mb={{ xl: 4 }}
            >
              <Icon as={FiPlayCircle} color='#DADADA' boxSize={28} />
            </Flex>
            <Text fontSize='sm' color='gray.300' lineHeight='20px'>
              {i.tag}
            </Text>
            <Text fontWeight='500' fontSize={{ xl: 'xl' }} lineHeight='34px'>
              {i.title}
            </Text>
            <NextLink href={`news/${i.id}`} passHref>
              <Link fontWeight='500' color='gcu.100' fontSize={{ xl: 'sm' }}>
                READ MORE
              </Link>
            </NextLink>
          </GridItem>
        ))}
      </Grid>
    </Container>
  )
}
