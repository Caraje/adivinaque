import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className='w-full mt-auto flex items-center justify-around border-t-2 border-adivinaGreen'>
      <div className='w-full flex flex-col sm:flex-row gap-4 items-center justify-between max-w-6xl py-4'>
        <div className='flex flex-col items-center gap-2'>
          <h2 className='font-extrabold text-lg text-adivinaGreen'>
            AdivinaQue ha sido creado por:
          </h2>
          <Link className=' hover:scale-110 hover:brightness-110 transition-all ' href='https://www.carlosajenjo.es'>
            <img src='/imgs/Logo_negativo_oscuro.webp' alt='imagen del logo de carlosajenjo.es' width={200} h={100} />
          </Link>
        </div>
        <div className='flex flex-col items-center gap-2'>
          <h2 className='font-extrabold text-lg text-adivinaGreen'>
            Si ves errores o tienes sugerencias manda un correo a:
          </h2>
          <a className='font-montserrat font-semibold text-lg hover:text-adivinaGreen hover:scale-110 transition-all' href='mailto:info.adivinaque@gmail.com'>info.adivinaque@gmail.com</a>
          <div className='flex justify-center items-center gap-4' />
        </div>
      </div>
    </footer>
  )
}

export default Footer
