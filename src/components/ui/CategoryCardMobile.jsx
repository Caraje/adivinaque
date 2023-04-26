import Link from 'next/link'

const CategoryCardMobile = ({ category, image, wide, name, disabled = false }) => {
  return (

    !disabled
      ? (
        <div className={`w-full ${wide ? 'max-w-3xl' : 'max-w-xs'}`} href={`/${category}`}>
          <Link className={`w-full ${wide ? 'max-w-3xl' : 'max-w-xs'}`} href={`/${category}`}>
            <article className={`relative w-full ${wide ? 'max-w-3xl' : 'max-w-xs'}  h-60 rounded-xl overflow-hidden border border-adivinaGreen/50`}>
              <h2 className='absolute bottom-4 left-8 z-10 font-bold text-3xl'>{name}</h2>
              <img className='w-full h-full object-cover' src={image} alt='' width={600} height={600} />
            </article>
          </Link>
        </div>
        )
      : (
        <div className={`w-full ${wide ? 'max-w-3xl' : 'max-w-xs'} saturate-0`} href={`/${category}`}>

          <article className={`relative w-full ${wide ? 'max-w-3xl' : 'max-w-xs'}  h-60 rounded-xl overflow-hidden border border-adivinaGreen/50`}>
            <h2 className='absolute bottom-4 left-8 z-10 font-bold text-3xl'>{name}</h2>
            <img className='w-full h-full object-cover' src={image} alt='' width={600} height={600} />
          </article>

        </div>
        )

  )
}

export default CategoryCardMobile
