import Link from 'next/link'
import React from 'react'

const NewsCard = ({ posts }) => {
  console.log({ posts })
  return (
    <section className=' flex  flex-col gap-4 justify-center   overflow-hidden border border-adivinaGreen/50 rounded-xl p-4 bg-adivinaBlack/25'>
      <h2 className=' text-xl text-adivinaGreen font-semibold'>
        Últimas noticias
      </h2>

      {
        posts
          .sort((a, b) => b.id - a.id)
          .slice(0, 2)
          .map(post => (
            <Link className='hover:scale-105 transition-all  hover:contrast-125 hover:brightness-110 hover:text-adivinaGreen' href={`./news/${post.url}`} key={post.id}>
              <article className='relative  flex flex-col w-full  rounded-xl border border-adivinaGreen/75 overflow-hidden '>
                <img className='w-full object-cover' src={`https://res.cloudinary.com/caraje/image/upload/c_fill,g_auto,h_100,w_200/f_webp/q_auto:eco/v1682415704/AdivinaQue/news/${post.img}`} alt='' width={100} height={100} />
                <h2 className=' bottom-2 left-2 m-2 font-semibold text-lg z-20'>{post.title}</h2>
                <div className=' w-full h-full bg-gradient-to-t from-black/30 from-30% to-transparent to-45% z-400' />
              </article>
            </Link>
          ))
      }

    </section>
  )
}

export default NewsCard
