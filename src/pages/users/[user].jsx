import MainLayout from '@/components/layout/MainLayout'
import Footer from '@/components/ui/Footer'
import CategoryCardUser from '@/components/user/CategoryCardUser'
import FormUpdateSocial from '@/components/user/FormUpdateSocial'
import { UserCardSocial } from '@/components/user/UserCardSocial'
import { getUserList } from '@/services/supabase'
import { useSelector } from 'react-redux'

const UserPage = ({ user }) => {
  const { id } = useSelector(state => state.auth)
  const userId = user[0].id
  const actualUser = user[0].user_metadata
  const category = Object.keys(actualUser.categories)

  return (
    <MainLayout>
      <div className='flex flex-col w-full gap-10 p-4 max-w-6xl '>
        <div className='flex w-full gap-8 '>
          <section className='w-2/6 max-w-xl '>
            <UserCardSocial social={actualUser.socials} user={actualUser} />

          </section>
          <section className='w-full '>

            {
              (id === userId) &&
                <article className='flex  flex-col gap-4 justify-center items-center overflow-hidden border border-adivinaGreen/50 rounded-xl p-4 bg-adivinaBlack/25'>
                  <FormUpdateSocial user={actualUser} />
                </article>
            }
          </section>
        </div>
        <section className='w-full flex gap-10 max-w-6xl'>
          <article className=' w-full flex  gap-8 justify-evenly items-center overflow-hidden border border-adivinaGreen/50 rounded-xl p-4 bg-adivinaBlack/25'>
            <CategoryCardUser
              category={category[0]}
              name='Cine'
              image='/imgs/cinema.webp'
              score={actualUser.categories.cinema}
            />
            <CategoryCardUser
              category={category[1]}
              name='Series'
              image='/imgs/series.webp'
              score={actualUser.categories.series}
            />
            <CategoryCardUser
              category={category[2]}
              name='Juegos'
              image='/imgs/game.webp'
              score={actualUser.categories.videogames}
            />

          </article>
        </section>
      </div>
      <Footer />
    </MainLayout>
  )
}

export async function getServerSideProps ({ params }) {
  const { user: userName } = params

  const usersList = await getUserList()
  const actualUser = usersList.filter((user) => (user.user_metadata.userName.toLowerCase().trim() === userName.toLowerCase().trim()))
  return {
    props: {
      user: actualUser
    }
  }
}

export default UserPage
