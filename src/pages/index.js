
import NewsCard from '@/components/home/NewsCard'
import SelectCategory from '@/components/home/SelectCategory'
import MainLayout from '@/components/layout/MainLayout'
import Footer from '@/components/ui/Footer'
import UserCard from '@/components/ui/UserCard'
import { getAllFilesMetadata } from '@/services/mdx'
import { getUserList } from '@/services/supabase'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

export default function Home ({ usersList, posts }) {
  const { status } = useSelector(store => store.auth)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    if (/Mobi|Android/i.test(navigator.userAgent)) {
      setIsMobile(true)
    }
  }, [])

  return (
    <>
      <div className='w-screen min-h-screen   flex flex-col  items-center justify-between text-white font-montserrat  bg-slate-950'>
        {/* BARRA DE MENU_ */}
        <MainLayout>

          {/* CONTENIDO */}
          <main className='w-full flex flex-col sm:flex-row justify-center items-center sm:items-stretch gap-10 p-8 max-w-6xl'>
            <SelectCategory isMobile={isMobile} />
            <aside className='w-80 flex flex-col gap-10  '>
              {/* USER CARD */}
              {
                status && <UserCard />
              }
              {/* NEWS CARD */}
              <NewsCard posts={posts} />
            </aside>

          </main>

          {/* FOOTER */}
          <Footer />
        </MainLayout>
      </div>
    </>

  )
}

export const getStaticProps = async (ctx) => {
  const usersList = await getUserList()
  const posts = await getAllFilesMetadata()
  return {
    props: {
      usersList,
      posts
    }
  }
}
