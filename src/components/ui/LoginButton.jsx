import Link from 'next/link'

const LoginButton = () => {
  return (
    <Link
      className='flex items-center gap-4 hover:text-adivinaGreen hover:shadow-adivinaGreen '
      href='/auth/login'
    >
      <h2 className='font-semibold text-lg'>Login</h2>
      <img src='/icons/user-icon.svg' alt='Icono de usuario' width={30} height={30} />
    </Link>
  )
}

export default LoginButton
