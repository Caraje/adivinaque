
import CategoryCard from '../ui/CategoryCard'

const SelectCategory = () => {
  return (
    <section className=' w-full flex flex-col gap-8  border border-adivinaGreen/50 rounded-xl p-8 bg-adivinaBlack/25'>
      <h1 className='font-extrabold text-3xl text-adivinaGreen'>
        Selecciona una categoria
      </h1>
      <div className='flex flex-col gap-8 justify-center items-center '>

        <div className='flex justify-center max-w-2xl w-full'>

          <CategoryCard
            category='cinema'
            name='Cine'
            image='./imgs/cinema.webp'
            wide
          />
        </div>

        <div className='flex justify-between max-w-2xl w-full'>
          <CategoryCard
            category='series'
            name='Series'
            image='./imgs/series.webp'
            wide={false}
          />
          <CategoryCard
            category='videogames'
            name='Juegos'
            image='./imgs/game.webp'
            wide={false}
          />

        </div>
      </div>
    </section>
  )
}

export default SelectCategory
