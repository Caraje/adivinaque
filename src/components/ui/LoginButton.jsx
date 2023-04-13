import { loginIcon } from '@/utils/icons'
import Link from 'next/link'

const LoginButton = () => {
  return (
    <Link
      className='flex items-center justify-center gap-2 hover:text-adivinaGreen hover:shadow-adivinaGreen '
      href='/auth/login'
    >
      <h2 className='font-semibold text-lg'>Login</h2>
      <picture className=''>
        {loginIcon}
      </picture>
      {/* <img src='/icons/user-icon.svg' alt='Icono de usuario' width={30} height={30} /> */}
    </Link>
  )
}

export default LoginButton
