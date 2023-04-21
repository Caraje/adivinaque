import { useState } from 'react'
import MenuUser from './MenuUser'

const UserAutenticated = ({ user }) => {
  const [isHidden, setIsHidden] = useState(false)
  return (
    <div>
      <button
        onClick={() => setIsHidden(!isHidden)}
        className='flex items-center justify-center gap-4 hover:text-adivinaGreen hover:shadow-adivinaGreen '
      >
        <h5 className='font-semibold text-lg' href={`/users/${user.userName}`}>{user.userName}</h5>
        <img className='rounded-full' src={user.avatar ? `https://res.cloudinary.com/caraje/image/upload/v1679717935/${user.avatar}` : 'https://res.cloudinary.com/caraje/image/upload/v1682092834/AdivinaQue/akxmwc0cpoffp1avtg8h.webp'} alt='Imagen de avatar de Caraje' width={40} height={40} />
      </button>
      {
        isHidden && <MenuUser user={user} setIsHidden={setIsHidden} />
      }
    </div>
  )
}

export default UserAutenticated
