
import CategoryCard from '../ui/CategoryCard'
import CategoryCardMobile from '../ui/categoryCardMobile'

const SelectCategory = ({ isMobile }) => {
  return (
    <section className=' w-full flex flex-col gap-8  border border-adivinaGreen/50 rounded-xl p-8 bg-adivinaBlack/25'>
      <h1 className='font-extrabold text-3xl text-adivinaGreen'>
        Selecciona una categoria
      </h1>
      <div className='flex flex-col gap-8 justify-center items-center '>

        <div className='flex justify-center max-w-2xl w-full'>

          {!isMobile
            ? <CategoryCard
                category='cinema'
                name='Cine'
                image='./imgs/cinema.webp'
                wide
              />
            : <CategoryCardMobile
                category='cinema'
                name='Cine'
                image='./imgs/cinema.webp'
                wide={false}
              />}
        </div>

        <div className='flex flex-col sm:flex-row gap-8 justify-center sm:justify-between max-w-2xl w-full'>
          {!isMobile
            ? <CategoryCard
                category='series'
                name='Series'
                image='./imgs/series.webp'
                wide={false}
              />
            : <CategoryCardMobile
                category='series'
                name='Series'
                image='./imgs/series.webp'
                wide={false}
              />}
          {!isMobile
            ? <CategoryCard
                category='videogames'
                name='Juegos'
                image='./imgs/game.webp'
                wide={false}
              />
            : <CategoryCardMobile
                category='videogames'
                name='Juegos'
                image='./imgs/game.webp'
                wide={false}
              />}

        </div>
      </div>
    </section>
  )
}

export default SelectCategory
