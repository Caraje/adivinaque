import Head from 'next/head'
import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux'
import UserAutenticated from '../ui/UserAutenticated'
import LoginButton from '../ui/LoginButton'
import { useEffect } from 'react'
import { getUser, getUserList } from '@/services/supabase'
import { loginState } from '@/store/auth/thunks'
import { userState } from '@/store/user/thunks'

const MainLayout = ({ children }) => {
  const dispatch = useDispatch()

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
        <meta name='description' content='Aqui hay que poner descripción' />

        {/* Facebook Meta Tags */}
        <meta property='og:url' content='Url del seo' />
        <meta property='og:type' content='website' />
        <meta property='og:title' content='titulo del seo' />
        <meta property='og:description' content='Descripcion Seo' />
        <meta property='og:image' content='Imagen Seo' />

        {/* Twitter Meta Tags */}
        <meta name='twitter:card' content='summary' />
        <meta property='twitter:domain' content='www.carlosajenjo.es' />
        <meta name='twitter:site' content='@caraje_' />
        <meta name='twitter:creator' content='Autor SEO' />
        <meta property='twitter:url' content='Url del seo' />
        <meta name='twitter:title' content='titulo del seo' />
        <meta name='twitter:description' content='Descripcion Seo' />
        <meta name='twitter:image' content='Imagen Seo' />
      </Head>
      <div className='w-screen min-h-screen  flex flex-col items-center justify-betwee text-white font-montserrat  bg-slate-950'>
        <div className='w-full  max-w-6xl'>
          <div className='w-full flex items-center justify-between p-4'>
            <Link href='/'>
              <img src='/imgs/logo.webp' alt='Logotipo de Adivina Que' height={100} width={100} />

            </Link>
            <nav className='flex gap-8 font-semibold px-20 py-1 rounded-full border border-adivinaGreen/40  text-2xl'>
              <Link className='hover:scale-110 hover:text-adivinaGreen hover:shadow-adivinaGreen transition-all' href='/cinema'>Cine</Link>
              <Link className='hover:scale-110 hover:text-adivinaGreen hover:shadow-adivinaGreen transition-all' href='/series'>series</Link>
              <Link className='hover:scale-110 hover:text-adivinaGreen hover:shadow-adivinaGreen transition-all' href='/videogames'>Juegos</Link>
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
