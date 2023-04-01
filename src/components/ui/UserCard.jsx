import Link from 'next/link'
import { useSelector } from 'react-redux'

const UserCard = () => {
  const user = useSelector(store => store.user)
  console.log(user)
  return (
    <Link className='hover:scale-105 transition-all' href={user.url}>
      <article className=' flex  flex-col gap-4 justify-center items-center overflow-hidden border border-adivinaGreen/50 rounded-xl p-4 bg-adivinaBlack/25'>
        <header>
          <img className='rounded-full' src={user.avatar || './imgs/no-avatar.webp'} alt='Imagen de avatar de Caraje' width={100} height={100} />
        </header>
        <footer className='flex flex-col justify-center items-center gap-4  text-2xl'>
          <h2>{user.userName}</h2>
          <section className='flex items-center justify-center gap-4 font-light text-lg '>
            <div className='flex flex-col items-center justify-center gap-2'>
              <img src='./icons/cinema-icon.svg' alt='' width={24} height={24} />
              <p>{user.categories.cinema.totalPoints}</p>
            </div>
            <div className='flex flex-col items-center justify-center gap-2'>
              <img src='./icons/series-icon.svg' alt='' width={24} height={24} />
              <p>{user.categories.series.totalPoints}</p>
            </div>
            <div className='flex flex-col items-center justify-center gap-2'>
              <img src='./icons/game-icon.svg' alt='' width={24} height={24} />
              <p>{user.categories.videogames.totalPoints}</p>
            </div>
          </section>
        </footer>

      </article>
    </Link>
  )
}

export default UserCard