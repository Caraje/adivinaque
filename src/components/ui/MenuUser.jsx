import { logoutState } from '@/store/auth/thunks'
import { logoutIcon, settingsIcon } from '@/utils/icons'
import Link from 'next/link'
import { useDispatch } from 'react-redux'

const MenuUser = ({ user }) => {
  const dispatch = useDispatch()
  const handleLogout = () => {
    dispatch(logoutState())
  }
  return (
    <ol className='absolute right-0 sm:right-auto z-50 bg-adivinaDark/50 backdrop-blur-xl border border-adivinaGreen p-4 rounded-xl mt-2 font-semibold flex flex-col gap-2'>
      <li>
        <Link className='flex items-center gap-2 hover:scale-110 hover:text-adivinaGreen transition-all ' href={`/users/${user.userName}`}>
          {settingsIcon}
          Configuración
        </Link>
      </li>
      <div className='w-full h-[1px] m-0 bg-adivinaGreen/50' />
      <li>
        <button
          className='flex items-center gap-2 hover:scale-110 hover:text-adivinaGreen transition-all'
          onClick={handleLogout}
        >
          {logoutIcon}
          Cerrar Sesión
        </button>
      </li>
    </ol>
  )
}

export default MenuUser
