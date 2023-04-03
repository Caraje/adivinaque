import { deleteUser, logoutUser } from '@/services/supabase'
import { logout } from '@/store/auth/authSlice'
import React from 'react'
import { useDispatch } from 'react-redux'

const DeleteConfirm = ({ back }) => {
  const dispatch = useDispatch()
  const confirmDelete = async () => {
    dispatch(logout())
    await deleteUser()
    await logoutUser()
  }
  return (
    <div className='absolute w-full h-full top-0 bottom-0 left-0 right-0  z-50 flex items-center justify-center backdrop-blur-lg'>
      <div className=' flex flex-col gap-8 justify-center items-center bg-adivinaDark border border-adivinaGreen p-10 rounded-3xl'>
        <img src='/imgs/Logo.webp' alt='logo de adivina que' width={300} height={300} />
        <div className='font-montserrat flex flex-col items-center justify-center'>
          <p className='font-semibold text-2xl'>¿esta seguro que desea eliminar su usuario?</p>
          <p>Si borra el usuario perdera toda su puntuación</p>
        </div>
        <div className='flex gap-8'>
          <button
            onClick={confirmDelete}
            className='bg-red-700 font-montserrat font-bold text-xl px-4 py-2 rounded-xl hover:scale-110 transition-all hover:brightness-125'
          >Si, Eliminar
          </button>
          <button
            onClick={() => { back(false) }}
            className='bg-red-700 font-montserrat font-bold text-xl px-4 py-2 rounded-xl hover:scale-110 transition-all hover:brightness-125'
          >Volver
          </button>
        </div>
      </div>
    </div>
  )
}

export default DeleteConfirm
