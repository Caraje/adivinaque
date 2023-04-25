import NewsCard from '@/components/home/NewsCard'
import MainLayout from '@/components/layout/MainLayout'
import SlugComponent from '@/components/news/SlugComponent'
import Footer from '@/components/ui/Footer'
import UserCard from '@/components/ui/UserCard'
import { getAllFilesMetadata, getFileBySlug, getFiles } from '@/services/mdx'

const UserPage = ({ source, frontmatter, posts }) => {
  const { title, url, article, img, twitter, tags } = frontmatter

  console.log({ img })
  return (
    <MainLayout>
      <main className='w-full flex flex-col items-center sm:items-stretch sm:flex-row gap-10 p-4 max-w-6xl'>
        <section className='relative w-full flex flex-col gap-8  border border-adivinaGreen/50 rounded-xl p-10 bg-adivinaBlack/25'>
          <img
            src={`https://res.cloudinary.com/caraje/image/upload/c_fill,g_faces,h_300,w_1000/f_webp/q_auto:eco/v1682415704/AdivinaQue/news/${img}`}
            alt='cosas'
            width={900}
            height={500}
            className='rounded-2xl '
          />
          <h1 className='font-black text-3xl text-adivinaGreen'>
            {title}
          </h1>
          <div className='article_body font-montserrat '>
            <SlugComponent frontmatter={frontmatter} source={source} posts={posts} />
          </div>
        </section>
        <aside className='w-80 flex flex-col gap-10  '>
          <UserCard />
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
