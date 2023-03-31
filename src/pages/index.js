
import NewsCard from '@/components/home/NewsCard'
import SelectCategory from '@/components/home/SelectCategory'
import CategoryCard from '@/components/ui/CategoryCard'
import UserCard from '@/components/ui/UserCard'
import Link from 'next/link'

export default function Home () {
  return (
    <>
      <div className='w-screen min-h-screen  flex flex-col items-center justify-betwee text-white font-montserrat  bg-slate-950'>
        {/* BARRA DE MENU_ */}
        <div className='w-full  max-w-6xl'>
          <div className='w-full flex items-center justify-between p-4'>
            <Link href='/'>
              <img src='./imgs/logo.webp' alt='Logotipo de Adivina Que' height={100} width={100} />

            </Link>
            <nav className='flex gap-8 font-semibold px-20 py-1 rounded-full border border-adivinaGreen/40  text-2xl'>
              <Link className='hover:scale-110 hover:text-adivinaGreen hover:shadow-adivinaGreen transition-all' href='/cinema'>Cine</Link>
              <Link className='hover:scale-110 hover:text-adivinaGreen hover:shadow-adivinaGreen transition-all' href='/series'>series</Link>
              <Link className='hover:scale-110 hover:text-adivinaGreen hover:shadow-adivinaGreen transition-all' href='/videogames'>Juegos</Link>
            </nav>

            <Link href='/auth/login' className='flex items-center gap-4 hover:text-adivinaGreen hover:shadow-adivinaGreen '>
              <h5 className='font-semibold text-lg' href='/caraje'>Caraje</h5>
              <img className='rounded-full' src='./imgs/avatar_caraje.webp' alt='Imagen de avatar de Caraje' width={40} height={40} />
            </Link>
          </div>
        </div>

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
      </div>
    </>

  )
}
