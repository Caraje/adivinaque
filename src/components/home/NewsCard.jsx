import Link from 'next/link'
import React from 'react'

const NewsCard = () => {
  return (
    <section className=' flex  flex-col gap-4 justify-center   overflow-hidden border border-adivinaGreen/50 rounded-xl p-4 bg-adivinaBlack/25'>
      <h2 className=' text-xl text-adivinaGreen font-semibold'>
        Últimas noticias
      </h2>
      <Link className='hover:scale-105 transition-all  hover:contrast-125 hover:brightness-110 hover:text-adivinaGreen' href='/#'>
        <article className='relative w-full  rounded-xl border border-adivinaGreen/75 overflow-hidden '>
          <h2 className='absolute bottom-2 left-2 m-2 font-semibold text-lg z-20'>Nuevas Secciones </h2>
          <div className='absolute w-full h-full bg-gradient-to-t from-black/30 from-30% to-transparent to-45% z-400' />
          <img className='w-full object-cover' src='./imgs/superman.webp' alt='' width={200} height={50} />
        </article>
      </Link>
      <Link className='hover:scale-105 transition-all  hover:contrast-125 hover:brightness-110 hover:text-adivinaGreen' href='/#'>
        <article className='relative w-full  rounded-xl border border-adivinaGreen/75 overflow-hidden '>
          <h2 className='absolute bottom-2 left-2 m-2 font-semibold text-lg z-20'>Cierre por mantenimiento </h2>
          <div className='absolute w-full h-full bg-gradient-to-t from-black/30 from-30% to-transparent to-45% z-400' />
          <img className='w-full object-cover' src='./imgs/superman.webp' alt='' width={200} height={50} />
        </article>
      </Link>

    </section>
  )
}

export default NewsCard
