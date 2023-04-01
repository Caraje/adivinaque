import MainLayout from '@/components/layout/MainLayout'
import CategoryCard from '@/components/ui/CategoryCard'
import { getUserList } from '@/services/supabase'

const UserPage = ({ user }) => {
  const actualUser = user[0].user_metadata

  console.log({ actualUser })
  return (
    <MainLayout>
      <div className='flex flex-col w-full gap-10 p-4 max-w-6xl '>
        <div className='flex w-full gap-8 '>
          <section className='w-2/6 max-w-xl '>
            <article className=' flex  flex-col gap-4 justify-center items-center overflow-hidden border border-adivinaGreen/50 rounded-xl p-4 bg-adivinaBlack/25'>
              <header>
                <img className='rounded-full' src={actualUser.imgAvatar || '/imgs/no-avatar.webp'} alt='Imagen de avatar de Caraje' width={100} height={100} />
              </header>
              <footer className='flex flex-col justify-center items-center gap-4  text-2xl'>
                <h2>{actualUser.userName}</h2>
                <section className='flex items-center justify-center gap-4 font-light text-lg '>
                  <div className='flex flex-col items-center justify-center gap-2'>
                    <img src='/icons/cinema-icon.svg' alt='' width={24} height={24} />
                    <p>{actualUser.categories.cinema.totalPoints}</p>
                  </div>
                  <div className='flex flex-col items-center justify-center gap-2'>
                    <img src='/icons/series-icon.svg' alt='' width={24} height={24} />
                    <p>{actualUser.categories.series.totalPoints}</p>
                  </div>
                  <div className='flex flex-col items-center justify-center gap-2'>
                    <img src='/icons/game-icon.svg' alt='' width={24} height={24} />
                    <p>{actualUser.categories.videogames.totalPoints}</p>
                  </div>
                </section>
              </footer>

            </article>
          </section>
          <section className='w-full '>
            <article className='flex  flex-col gap-4 justify-center items-center overflow-hidden border border-adivinaGreen/50 rounded-xl p-4 bg-adivinaBlack/25'>
              <form
                className='w-full grid grid-cols-2 gap-4'
              >
                <div className='flex flex-col gap-4'>
                  User name
                  <input
                    className='w-full rounded-xl bg-transparent border border-[#03fea4] p-2'
                    type='text'

                  />
                </div>

                <div className='flex flex-col gap-4'>
                  Sube imagen
                  <input
                    type='file'

                  />

                </div>

                <div className='flex flex-col gap-4'>
                  Twitter
                  <input
                    className='w-full rounded-xl bg-transparent border border-[#03fea4] p-2'
                    type='text'

                  />
                </div>

                <div className='flex flex-col gap-4'>
                  instagram
                  <input
                    className='w-full rounded-xl bg-transparent border border-[#03fea4] p-2'
                    type='text'

                  />
                </div>

                <div className='flex flex-col gap-4'>
                  twitch
                  <input
                    className='w-full rounded-xl bg-transparent border border-[#03fea4] p-2'
                    type='text'

                  />
                </div>

                <div className='flex flex-col gap-4'>
                  web
                  <input
                    className='w-full rounded-xl bg-transparent border border-[#03fea4] p-2'
                    type='text'
                    flex-col
                  />
                </div>

                <button className='w-fit px-8 justify-self-end  rounded-xl bg-[#03fea4] text-[#333] '>Actualizar</button>
              </form>
            </article>
          </section>
        </div>
        <section className='w-full flex gap-10 max-w-6xl'>
          <article className=' w-full flex  justify-evenly items-center overflow-hidden border border-adivinaGreen/50 rounded-xl p-4 bg-adivinaBlack/25'>

            <CategoryCard
              category='cinema'
              name='Cine'
              image='/imgs/cinema.webp'
              wide={false}
            />
            <CategoryCard
              category='series'
              name='Series'
              image='/imgs/series.webp'
              wide={false}
            />
            <CategoryCard
              category='videogames'
              name='Juegos'
              image='/imgs/game.webp'
              wide={false}
            />
          </article>
        </section>
      </div>
      <footer className='w-full mt-auto flex items-center  justify-around bg-adivinaBlack'>Aqui va el pie de pagina</footer>
    </MainLayout>
  )
}

export const getStaticPaths = async () => {
  const usersList = await getUserList()
  const users = usersList.map((user) => ({
    params: {
      user: user.user_metadata.userName
    }
  }))

  return {
    paths: users,
    fallback: false
  }
}

export const getStaticProps = async ({ params }) => {
  const { user: userName } = params
  const usersList = await getUserList()
  const actualUser = usersList.filter((user) => (user.user_metadata.userName === userName))
  return {
    props: {
      user: actualUser
    }
  }
}

export default UserPage
