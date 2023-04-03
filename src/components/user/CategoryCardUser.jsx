import Link from 'next/link'
import Atropos from 'atropos/react'

const CategoryCardUser = ({ category, image, name, score }) => {
  return (
    <Atropos className='my-atropos w-full max-w-3xl' href={`/${category}`}>
      <Link href={`/${category}`}>
        <article className='relative w-full max-w-3xl  h-60 rounded-xl overflow-hidden border border-adivinaGreen/50'>
          <header className='absolute h-full'>
            <h2 className='absolute top-4 left-8 z-10 font-bold text-3xl' data-atropos-offset='25'>{name}</h2>
            <img className='w-full h-full object-cover' data-atropos-offset='0' src={image} alt='' width={600} height={600} />
          </header>
          <footer className='absolute w-full flex justify-center items-center gap-4 bottom-4  z-50' data-atropos-offset='15'>
            <div className='bg-adivinaDark/75 p-2 flex flex-col justify-center items-center gap-2 rounded-xl'>
              <img src='/icons/correct-icon.svg' alt='icono de ' width={35} height={35} />
              <h3>{score.corrects}</h3>
            </div>
            <div className='bg-adivinaDark/75 p-2 flex flex-col justify-center items-center gap-2 rounded-xl'>
              <img src='/icons/error-icon.svg' alt='icono de ' width={35} height={35} />
              <h3>{score.errors}</h3>
            </div>
            <div className='bg-adivinaDark/75 p-2 flex flex-col justify-center items-center gap-2 rounded-xl'>
              <img src='/icons/points-icon.svg' alt='icono de ' width={35} height={35} />
              <h3>{score.totalPoints}</h3>
            </div>
            <div className='bg-adivinaDark/75 p-2 flex flex-col justify-center items-center gap-2 rounded-xl'>
              <img src='/icons/rank-icon.svg' alt='icono de ' width={35} height={35} />
              <h3>{score.positionRank}</h3>
            </div>
          </footer>
        </article>
      </Link>
    </Atropos>
  )
}

export default CategoryCardUser
