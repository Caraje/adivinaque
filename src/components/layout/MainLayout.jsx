import Head from 'next/head'
import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux'
import UserAutenticated from '../ui/UserAutenticated'
import LoginButton from '../ui/LoginButton'
import { useEffect } from 'react'
import { getUser, getUserList } from '@/services/supabase'
import { loginState } from '@/store/auth/thunks'
import { userState } from '@/store/user/thunks'
import { useRouter } from 'next/router'

const MainLayout = ({ children }) => {
  const dispatch = useDispatch()
  const path = useRouter().pathname

  // LOGIN USER
  useEffect(() => {
    const isLogin = async () => {
      const activeUser = await getUser()
      const userList = await getUserList()
      activeUser && dispatch(loginState(activeUser))
      if (activeUser) {
        const isActiveUser = userList.filter(user => user.id === activeUser.id)
        dispatch(userState(isActiveUser[0]))
      }
    }
    isLogin()
  }, [])
  const user = useSelector(store => store.user)
  return (
    <>

      <Head>

        <link rel='icon' href='/img_static/favicon.ico' />
        <meta name='keywords' content='HTML, CSS, JavaScript' />
        <title>AdivinaQue</title>
        <meta name='description' content='Todos los dias un nuevo nivel en cada una de nuestras categorias para que adivines si eres capaz, la pelicula o serie y asi demostrar que eres el que mas sabe' />

        {/* Facebook Meta Tags */}
        <meta property='og:url' content='https://adivinaque.vercel.app/' />
        <meta property='og:type' content='website' />
        <meta property='og:title' content='AdivinaQue: adivina la pelicula o la serie del dia' />
        <meta property='og:description' content='Todos los dias un nuevo nivel en cada una de nuestras categorias para que adivines si eres capaz, la pelicula o serie y asi demostrar que eres el que mas sabe' />
        <meta property='og:image' content='https://res.cloudinary.com/caraje/image/upload/v1681721021/AdivinaQue/hkjhddrltoboan0procv.webp' />

        {/* Twitter Meta Tags */}
        <meta name='twitter:card' content='summary' />
        <meta property='twitter:domain' content='@caraje_' />
        <meta name='twitter:site' content='https://adivinaque.vercel.app/' />
        <meta name='twitter:creator' content='Autor SEO' />
        <meta property='twitter:url' content='https://adivinaque.vercel.app/' />
        <meta name='twitter:title' content='AdivinaQue: adivina la pelicula o la serie del dia' />
        <meta name='twitter:description' content='Todos los dias un nuevo nivel en cada una de nuestras categorias para que adivines si eres capaz, la pelicula o serie y asi demostrar que eres el que mas sabe' />
        <meta name='twitter:image' content='https://res.cloudinary.com/caraje/image/upload/v1681721021/AdivinaQue/hkjhddrltoboan0procv.webp' />
      </Head>
      <div className='w-screen min-h-screen  flex flex-col items-center justify-betwee text-white font-montserrat  bg-slate-950'>
        <div className='w-full  max-w-6xl'>
          <div className='w-full flex items-center justify-between p-4'>
            <Link href='/'>
              <img src='https://res.cloudinary.com/caraje/image/upload/v1681721021/AdivinaQue/hkjhddrltoboan0procv.webp' alt='Logotipo de Adivina Que' height={100} width={100} />

            </Link>
            <nav className='hidden sm:flex gap-8 font-semibold px-20 py-1 rounded-full border border-adivinaGreen/40  text-2xl'>
              <Link className={`hover:scale-110 hover:text-adivinaGreen hover:shadow-adivinaGreen transition-all ${path === '/cinema' ? 'text-adivinaGreen' : ''}`} href='/cinema'>Cine</Link>
              <Link className={`hover:scale-110 hover:text-adivinaGreen hover:shadow-adivinaGreen transition-all ${path === '/series' ? 'text-adivinaGreen' : ''}`} href='/series'>series</Link>
              {/* <Link className={`hover:scale-110 hover:text-adivinaGreen hover:shadow-adivinaGreen transition-all ${path === '/videogames' ? 'text-adivinaGreen' : ''}`} href='/videogames'>Juegos</Link> */}
            </nav>
            {
              user.id
                ? <UserAutenticated user={user} />
                : <LoginButton />
            }
          </div>
        </div>
        {children}
      </div>
    </>
  )
}

export default MainLayout
