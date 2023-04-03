
export const UserCardSocial = ({ user }) => {
  const validSocials = user.socials.filter(soc => soc.user !== true)
  return (
    <article className=' flex  flex-col gap-4 justify-center items-center overflow-hidden border border-adivinaGreen/50 rounded-xl p-8 bg-adivinaBlack/25'>
      <header className='flex flex-col justify-center items-center gap-2'>
        <img
          className='rounded-full'
          src={user.imgAvatar || '/imgs/no-avatar.webp'}
          alt='Imagen del avatar de Caraje'
          width={125}
          height={125}
        />
        <h2 className='font-montserrat font-bold text-2xl'>
          {user.userName}
        </h2>
      </header>
      <footer>
        <div className='flex gap-2 flex-wrap justify-center items-center'>
          {
            validSocials.map(soc => (
              <a
                className='hover:scale-125 transition-all hover:bg-adivinaGreen rounded-full p-1'
                href={soc.user}
                target='_blank'
                rel='noreferrer'
                key={soc.name}
              >
                <img src={`/icons/${soc.name}-icon.svg`} alt={`Imagen del icono de ${soc.name}`} width={30} height={30} />
              </a>

            ))
          }
        </div>
      </footer>
    </article>
  )
}
