import MainLayout from '@/components/layout/MainLayout'
import SlugComponent from '@/components/news/SlugComponent'
import Footer from '@/components/ui/Footer'
import UserCard from '@/components/ui/UserCard'
import { getAllFilesMetadata, getFileBySlug, getFiles } from '@/services/mdx'
import { useSelector } from 'react-redux'

const UserPage = ({ source, frontmatter, posts }) => {
  const { status } = useSelector(store => store.auth)
  console.log({ status })
  return (
    <MainLayout>
      <main className='w-full flex flex-col items-center sm:items-stretch sm:flex-row gap-10 p-4 max-w-6xl'>
        <section className='relative w-full flex flex-col gap-8  border border-adivinaGreen/50 rounded-xl p-10 bg-adivinaBlack/25'>
          <SlugComponent frontmatter={frontmatter} source={source} posts={posts} />
        </section>
        <aside className='w-80 flex flex-col gap-10  '>
          {
            status && <UserCard />
          }
        </aside>
      </main>
      <Footer />
    </MainLayout>
  )
}

export const getStaticPaths = async () => {
  const posts = await getFiles()
  const paths = posts.map((post) => ({
    params: {
      slug: post.replace(/\.mdx/, '')
    }
  }))
  return {
    paths,
    fallback: false
  }
}

export const getStaticProps = async ({ params }) => {
  const { slug } = params
  const posts = await getAllFilesMetadata()
  const { source, content, frontmatter } = await getFileBySlug(slug)

  return {
    props: {
      source,
      frontmatter,
      content,
      posts
    }
  }
}

export default UserPage
