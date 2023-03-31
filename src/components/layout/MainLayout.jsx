import Head from 'next/head'
import Link from 'next/link'

const MainLayout = ({ children }) => {
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
        {children}
      </div>

    </>
  )
}

export default MainLayout
