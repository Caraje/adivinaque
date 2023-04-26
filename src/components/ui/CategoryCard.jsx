import Link from 'next/link'
import Atropos from 'atropos/react'

const CategoryCard = ({ category, image, wide, name, disabled }) => {
  return (
    disabled
      ? (
        <Atropos className={`my-atropos w-full ${wide ? 'max-w-3xl' : 'max-w-xs'} saturate-0`} href={`/${category}`}>
          {/* <Link className={`my-atropos w-full ${wide ? 'max-w-3xl' : 'max-w-xs'}`} href={`/${category}`}> */}
          <article className={`relative w-full ${wide ? 'max-w-3xl' : 'max-w-xs'}  h-60 rounded-xl overflow-hidden border border-adivinaGreen/50`}>
            <h2 className='absolute bottom-4 left-8 z-10 font-bold text-3xl' data-atropos-offset='25'>{name}</h2>
            <img className='w-full h-full object-cover' data-atropos-offset='0' src={image} alt='' width={600} height={600} />
          </article>
          {/* </Link> */}
        </Atropos>
        )
      : (

        <Atropos className={`my-atropos w-full ${wide ? 'max-w-3xl' : 'max-w-xs'}`} href={`/${category}`}>
          <Link className={`my-atropos w-full ${wide ? 'max-w-3xl' : 'max-w-xs'}`} href={`/${category}`}>
            <article className={`relative w-full ${wide ? 'max-w-3xl' : 'max-w-xs'}  h-60 rounded-xl overflow-hidden border border-adivinaGreen/50`}>
              <h2 className='absolute bottom-4 left-8 z-10 font-bold text-3xl' data-atropos-offset='25'>{name}</h2>
              <img className='w-full h-full object-cover' data-atropos-offset='0' src={image} alt='' width={600} height={600} />
            </article>
          </Link>
        </Atropos>
        )
  )
}

export default CategoryCard
