
import NewsCard from '@/components/home/NewsCard'
import SelectCategory from '@/components/home/SelectCategory'
import MainLayout from '@/components/layout/MainLayout'
import Footer from '@/components/ui/Footer'
import UserCard from '@/components/ui/UserCard'
import { getUserList } from '@/services/supabase'
import { useSelector } from 'react-redux'

export default function Home ({ usersList }) {
  const { status } = useSelector(store => store.auth)

  return (
    <>
      <div className='w-screen min-h-screen  flex flex-col items-center justify-betwee text-white font-montserrat  bg-slate-950'>
        {/* BARRA DE MENU_ */}
        <MainLayout>

          {/* CONTENIDO */}
          <main className='w-full flex gap-10 p-4 max-w-6xl'>
            <SelectCategory />
            <aside className='w-80 flex flex-col gap-10  '>
              {/* USER CARD */}
              {
                status && <UserCard />
              }
              {/* NEWS CARD */}
              <NewsCard />
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

  return {
    props: {
      usersList
    }
  }
}
