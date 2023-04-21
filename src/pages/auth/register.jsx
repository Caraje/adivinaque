import { useForm } from 'react-hook-form'
import Link from 'next/link'
import { createUserWithEmail, getUserList, loginWithEmail } from '@/services/supabase'
import { useDispatch } from 'react-redux'
import { loginState } from '@/store/auth/thunks'
import { useState } from 'react'
import { backIcon } from '@/utils/icons'
import RegisterConfirmation from '@/components/user/RegisterConfirmation'

export default function RegisterPage ({ usersList }) {
  const dispatch = useDispatch()
  const { register, handleSubmit, formState } = useForm()

  const errors = formState
  const [nameError, setNameError] = useState(false)
  const [emailError, setEmailError] = useState(false)
  const [passError, setPassError] = useState(false)
  const [isRegister, setIsRegister] = useState(true)

  const namesUserList = usersList.map(user => user.user_metadata.userName)
  const emailUserList = usersList.map(user => user.email
  )

  const handleForm = async (data) => {
    const { name, email, password } = data
    // console.log(password)
    if (namesUserList.includes(name)) {
      setNameError(true)
      return
    }
    if (emailUserList.includes(email)) {
      setEmailError(true)
      return
    }
    if (password.length < 6) {
      setPassError(true)
      // console.log({ passError })
      return
    }
    await createUserWithEmail(name, email, password)
    const user = await loginWithEmail(email, password)
    dispatch(loginState(user.data.user))
    setIsRegister(true)
  }

  return (
    <>
      {isRegister && <RegisterConfirmation />}
      <main className='w-screen h-screen flex flex-col-reverse sm:flex-row justify-end gap-4 sm:justify-center items-center bg-adivinaDark text-white font-montserrat'>
        <Link
          className='absolute top-4 right-4 text-adivinaGreen hover:scale-125 transition-all '
          href='/'
        >{backIcon}
        </Link>
        <section className='w-1/2 h-1/2 flex flex-col justify-center items-center'>
          <h1 className='font-montserrat font-extrabold text-4xl text-adivinaGreen'>Registro
          </h1>
          <form
            onSubmit={handleSubmit(handleForm)}
            className='flex flex-col gap-4'
          >
            <label className='flex flex-col text-xs gap-2'>
              Nombre:
              <input
                className='w-80 p-2 border-2 border-adivinaGreen rounded-lg bg-transparent text-white text-base font-normal'
                type='text'
                placeholder='nombre de usuario'
                {...register('name', {
                  required: 'El campo es requerido'
                })}
              />
              {errors.name?.type === 'required' && <p role='alert'>El nombre de usuario es requerido</p>}
              {nameError && <h2>El usuario ya existe</h2>}
            </label>

            <label className='flex flex-col text-xs gap-2'>
              Email:
              <input
                className='
            w-80 p-2
            border-2 border-adivinaGreen rounded-lg bg-transparent text-white  text-base font-normal'
                type='email'
                placeholder='user@advinaque.com'
                {...register('email', {
                  required: 'Introduce un email Valido'
                })}
              />
              {errors.email?.type === 'required' && <p role='alert'>Introduce un email Valido</p>}
              {emailError && <h2>El usuario ya existe</h2>}
            </label>

            <label className='flex flex-col text-xs gap-2'>
              Password:
              <input
                className='
            w-80 p-2
            border-2 border-adivinaGreen rounded-lg bg-transparent
            text-white text-base font-normal'
                type='password'
                placeholder='Password'
                {...register('password', {
                  required: 'Este campo es obligatorio',
                  minLength: { value: 6, message: 'Minimo debe contener 6 caracteres' }
                })}
              />

              {passError && <h2>Minimo debe contener 6 caracteres</h2>}
            </label>

            <button
              className='
          rounded-lg bg-adivinaGreen py-2
          text-[#333] font-bold
          hover:scale-105 hover:brightness-110 hover:shadow-adivinaGreen hover:shadow-2xl
          '
            >
              Enviar
            </button>
          </form>
          <nav className='absolute bottom-4 flex flex-col items-center justify-center'>
            <p>¿Ya tienes cuenta?</p>
            <Link
              href='/auth/login'
              className='font-bold text-adivinaGreen'
            >Logeate
            </Link>
          </nav>
        </section>
        <section className='w-full sm:w-1/2 h-1/3 sm:h-full flex justify-center items-center '>
          <img
            className='w-full h-full object-cover object-top sm:object-top border-b-2 sm:border-b-0 sm:border-l-2 border-adivinaGreen'
            src='/imgs/last.webp'
            alt='imagen de The mandalorian'
          />
        </section>
      </main>
    </>
  )
}

export const getStaticProps = async (ctx) => {
  const usersList = await getUserList()

  return {
    props: {
      usersList
    }
  }
}
