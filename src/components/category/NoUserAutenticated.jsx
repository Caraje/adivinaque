import Link from 'next/link'
import React from 'react'

const NoUserAutenticated = () => {
  return (
    <div className=' absolute z-40 w-screen h-screen  flex  items-center justify-center backdrop-blur-xl backdrop-brightness-50 '>
      <div className='w-full sm:w-1/2  flex flex-col sm:flex-row items-center justify-center  '>
        <img className='object-cover w-1/3' src='https://res.cloudinary.com/caraje/image/upload/v1682073684/AdivinaQue/wq9zrs4vjekqdj2pxomz.webp' alt='Illustration popcorn' width gap-8={250} height={300} />
        <div className='w-1/2 flex flex-col  items-center justify-center font-montserrat'>
          <h2 className='font-extrabold text-5xl text-center text-adivinaGreen mb-4'>Oh, no estas registrado</h2>
          <h3 className=' text-base font-medium text-center w-[40ch]'>Si quieres, puedes acceder a más niveles registrandote o haciendo login con tu cuenta</h3>
          <div className='flex items-center justify-center gap-8'>
            <Link
              className='mt-8 bg-adivinaGreen px-4 py-2 text-adivinaDark font-bold rounded-xl hover:scale-110 transition-all hover:bri'
              href='/auth/register'
            >Registrate
            </Link>
            <Link
              className='mt-8 bg-adivinaGreen px-4 py-2 text-adivinaDark font-bold rounded-xl hover:scale-110 transition-all hover:bri'
              href='/'
            >Inicio
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NoUserAutenticated
