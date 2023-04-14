import { instagramIcon, twitterIcon } from '@/utils/icons'
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
            Puedes seguirnos en:
          </h2>
          <div className='flex justify-center items-center gap-4'>

            <Link href='https://twitter.com/Adivina_Que_' className=' hover:scale-110 hover:brightness-110 hover:text-adivinaGreen transition-all '>
              {twitterIcon}
            </Link>
            <Link
              href='https://www.instagram.com/adivina_que_/'
              className=' hover:scale-110 hover:brightness-110 hover:text-adivinaGreen transition-all '
            >
              {instagramIcon}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
