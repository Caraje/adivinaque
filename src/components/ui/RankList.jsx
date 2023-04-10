import Link from 'next/link'
import React from 'react'

const RankList = ({ usersList }) => {
  const orderList = usersList.sort((a, b) => {
    return (b.user_metadata.categories.cinema.totalPoints - a.user_metadata.categories.cinema.totalPoints)
  })

  return (
    <div className='h-60 overflow-x-hidden scrollbar scrollbar-track-rounded-xl scrollbar-w-[3px] scrollbar-thumb-[#03fea4] scrollbar-track-[#333] '>
      {orderList.slice(0, 10).map((user, idx) => {
        const newUser = user.user_metadata

        return (
          <Link
            href={`/users/${newUser.userName.toLowerCase().trim()}`}
            target='_blank'
            key={idx}
            className='w-full h-12 flex justify-between items-center gap-4 p-2 rounded-xl hover:bg-adivinaGreen/25 hover:scale-105 transition-all'
          >
            <img
              className='rounded-full w-8 h-8 object-cover border border-adivinaGreen'
              src={newUser.imgAvatar
                ? `https://res.cloudinary.com/caraje/image/upload/v1679717935/${newUser.imgAvatar}`
                : '/imgs/no-avatar.webp'} alt={`Imagen de ${newUser.userName}`} width={50} height={50}
            />
            <h2 className='w-3/5 font-montserrat font-semibold'>{newUser.userName}</h2>
            <h2 className='pr-2'>{newUser.categories.cinema.totalPoints}</h2>
          </Link>
        )
      })}
    </div>
  )
}

export default RankList
