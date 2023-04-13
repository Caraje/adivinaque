import { instagramIcon, twitchIcon, twitterIcon, webIcon, youtubeIcon } from '@/utils/icons'
import Link from 'next/link'

export const UserCardSocial = ({ user }) => {
  const validSocials = user.socials.filter(soc => soc.user !== '')

  const SOCIAL_NETWORKS = {
    twitter: twitterIcon,
    instagram: instagramIcon,
    twitch: twitchIcon,
    youtube: youtubeIcon,
    web: webIcon
  }

  console.log({ validSocials })
  return (
    <article className='h-full flex  flex-col gap-4 justify-center items-center overflow-hidden border border-adivinaGreen/50 rounded-xl p-8 bg-adivinaBlack/25'>
      <header className='flex flex-col justify-center items-center gap-2'>
        <img
          className='rounded-full w-[7rem] h-[7rem] object-cover border-2 border-adivinaGreen'
          src={user.imgAvatar ? `https://res.cloudinary.com/caraje/image/upload/v1679717935/${user.imgAvatar}` : '/imgs/no-avatar.webp'}
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
            validSocials.map(soc => {
              let icon
              for (const [social, value] of Object.entries(SOCIAL_NETWORKS)) {
                if (soc.name === social) {
                  icon = value
                }
              }
              return (
                <Link
                  className=' scale-75 hover:scale-125 transition-all text-adivinaGreen hover:bg-adivinaGreen hover:text-adivinaDark rounded-full p-1'
                  href={(soc.name === 'web') ? `${soc.url}` : `${soc.url}${soc.user}`}
                  target='_blank'
                  rel='noreferrer'
                  key={soc.name}
                >
                  {icon}
                </Link>

              )
            })
          }
        </div>
      </footer>
    </article>
  )
}
