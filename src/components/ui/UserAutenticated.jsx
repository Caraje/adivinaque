import Link from 'next/link'

const UserAutenticated = ({ user }) => {
  return (
    <Link href='/auth/login' className='flex items-center gap-4 hover:text-adivinaGreen hover:shadow-adivinaGreen '>
      <h5 className='font-semibold text-lg' href={`/users/${user.userName}`}>{user.userName}</h5>
      <img className='rounded-full' src={user.avatar || '/imgs/no-avatar.webp'} alt='Imagen de avatar de Caraje' width={40} height={40} />
    </Link>
  )
}

export default UserAutenticated
