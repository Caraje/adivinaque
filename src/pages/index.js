
import NewsCard from '@/components/home/NewsCard'
import SelectCategory from '@/components/home/SelectCategory'
import MainLayout from '@/components/layout/MainLayout'
import UserCard from '@/components/ui/UserCard'

export default function Home () {
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
              <UserCard />
              {/* NEWS CARD */}
              <NewsCard />
            </aside>

          </main>

          {/* FOOTER */}
          <footer className='w-full mt-auto flex items-center  justify-around bg-adivinaBlack'>Aqui va el pie de pagina</footer>
        </MainLayout>
      </div>
    </>

  )
}
