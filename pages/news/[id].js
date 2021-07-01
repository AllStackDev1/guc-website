import React from 'react'
import PropTypes from 'prop-types'
import { Box, Flex, Text, IconButton, Divider } from '@chakra-ui/react'
import marked from 'marked'
import sanitizeHtml from 'sanitize-html'

import Layout from '@components/Layout'
import Footer from '@components/Home/Footer'

import HeroDetails from '@components/News/HeroDetails'
import Search from '@components/News/Search'
import RecentPost from '@components/News/RecentPost'
import { fetchStrapiContent } from 'mics'
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs'
import { useRouter } from 'next/router'

export default function NewsDetail({ prev, next, posts, details }) {
  const router = useRouter()
  return (
    <Layout
      name='News Detail'
      link='new/1'
      image_url='https://gcu.sch.ng/images/logo.svg'
      description='So much of what makes Winchester exceptional is the people who are a part of the school. Also, its beauty - the buildings, the grounds, the setting. Our heritage and archives provide insight into the past, while our community partnerships prepare boys for a future of compassionate leadership.'
    >
      <HeroDetails title={details.title} url={details.hero_bg_img?.[0].url} />

      <Flex
        w='full'
        my={{ xl: 16 }}
        pl={{ xl: 32, '2xl': 44 }}
        pr={{ xl: 14, '2xl': 20 }}
        justify='space-between'
      >
        <Box pb={5} w={{ xl: '65%' }}>
          <Box
            fontSize={{ base: 'sm', xl: 'lg' }}
            className='blog-post-content'
            dangerouslySetInnerHTML={{
              __html: sanitizeHtml(marked(details?.content))
            }}
          />
          <Flex my={10} align='center'>
            <Text fontWeight='500' fontSize='lg'>
              Tagged:
            </Text>
            <Flex align='center' ml={4} sx={{ gap: 8 }}>
              {details?.tags.split(',').map(tag => (
                <Flex
                  key={tag}
                  py={3}
                  px={5}
                  border='1px'
                  justify='center'
                  borderColor='gray.100'
                >
                  <Text as='span' fontWeight='500' fontSize='15px'>
                    {tag}
                  </Text>
                </Flex>
              ))}
            </Flex>
          </Flex>
          <Divider borderBottomColor='gray.300' />
          {(next || prev) && (
            <Flex mt={8} align='center' justify='space-between'>
              {prev && (
                <Flex align='center'>
                  <IconButton
                    size='lg'
                    fontSize='25px'
                    borderRadius='1'
                    bgColor='gcu.100'
                    _hover={{ bgColor: 'gcu.100' }}
                    _active={{ bgColor: 'gcu.100' }}
                    icon={<BsArrowLeft color='white' />}
                    onClick={() => router.push(`/news/${prev.id}`)}
                  />
                  <Box ml={3}>
                    <Text fontWeight={600} fontSize='17px'>
                      Previous Post
                    </Text>
                    <Text fontWeight={600} fontSize='21px'>
                      {prev.title.slice(0, 18)}...
                    </Text>
                  </Box>
                </Flex>
              )}
              {next && (
                <Flex align='center' textAlign='right'>
                  <Box mr={3}>
                    <Text fontWeight={600} fontSize='17px'>
                      Next Post
                    </Text>
                    <Text fontWeight={600} fontSize='21px'>
                      {next.title.slice(0, 18)}...
                    </Text>
                  </Box>
                  <IconButton
                    size='lg'
                    fontSize='25px'
                    borderRadius='1'
                    bgColor='gcu.100'
                    _hover={{ bgColor: 'gcu.100' }}
                    _active={{ bgColor: 'gcu.100' }}
                    icon={<BsArrowRight color='white' />}
                    onClick={() => router.push(`/news/${next.id}`)}
                  />
                </Flex>
              )}
            </Flex>
          )}
        </Box>
        <Flex w={{ xl: '30%' }} align='center' direction='column'>
          <Search posts={posts} />
          <RecentPost posts={[...posts].splice(0, 3)} />
        </Flex>
      </Flex>
      <Footer />
    </Layout>
  )
}

NewsDetail.propTypes = {
  next: PropTypes.object,
  prev: PropTypes.object,
  posts: PropTypes.array.isRequired,
  details: PropTypes.object.isRequired
}

export async function getStaticPaths() {
  const news = await fetchStrapiContent('blog-posts')

  const paths = news.map(({ id }) => ({ params: { id } }))

  return { paths, fallback: false }
}

export const getStaticProps = async ({ params: { id } }) => {
  const posts = await fetchStrapiContent('blog-posts')
  const details = await fetchStrapiContent(`blog-posts/${id}`)
  const index = posts.findIndex(({ id: _ }) => _ === id)

  return {
    props: {
      next: posts[index + 1] || null,
      prev: posts[index - 1] || null,
      posts,
      details
    }
  }
}
