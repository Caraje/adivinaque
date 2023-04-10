import { logoutState } from '@/store/auth/thunks'
import Link from 'next/link'
import { useDispatch } from 'react-redux'

const MenuUser = ({ user }) => {
  const dispatch = useDispatch()
  const handleLogout = () => {
    dispatch(logoutState())
  }
  return (
    <ol className='absolute z-50 bg-adivinaDark/50 backdrop-blur-xl border border-adivinaGreen p-4 rounded-xl mt-2 font-semibold flex flex-col gap-2'>
      <li>
        <Link className='flex items-center gap-2 hover:scale-110 transition-all' href={`/users/${user.userName}`}>
          <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='w-6 h-6'>
            <path strokeLinecap='round' strokeLinejoin='round' d='M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75' />
          </svg>
          Configuración
        </Link>
      </li>
      <div className='w-full h-[1px] m-0 bg-adivinaGreen/50' />
      <li>
        <button
          className='flex items-center gap-2 hover:scale-110 transition-all'
          onClick={handleLogout}
        >
          <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='w-6 h-6'>
            <path strokeLinecap='round' strokeLinejoin='round' d='M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75' />
          </svg>
          Cerrar Sesión
        </button>
      </li>
    </ol>
  )
}

export default MenuUser
