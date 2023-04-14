import { useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'
import Link from 'next/link'
import { loginWithEmail } from '@/services/supabase'
import { loginState } from '@/store/auth/thunks'
import { backIcon } from '@/utils/icons'

export default function LoginPage () {
  const { register, handleSubmit, formState: { errors } } = useForm()
  const dispatch = useDispatch()
  const handleLoginForm = async (data) => {
    const { email, password } = data
    const user = await loginWithEmail(email, password)
    dispatch(loginState(user.data.user))
  }

  return (
    <main className='w-screen h-screen flex flex-col sm:flex-row justify-start sm:justify-center items-center bg-adivinaDark text-white font-montserrat'>
      <Link
        className='absolute top-4 right-4 text-adivinaGreen hover:scale-125 transition-all '
        href='/'
      >{backIcon}
      </Link>
      <section className='w-full sm:w-1/2 h-1/3 sm:h-full flex justify-center items-center '>
        <img
          className='w-full h-full object-cover object-top sm:object-top border-b-2 sm:border-b-0 sm:border-r-2 border-adivinaGreen'
          src='/imgs/mando.webp'
          alt='imagen de The mandalorian'
        />
      </section>
      <section className='w-1/2 h-1/2 flex flex-col justify-center items-center '>
        <h1 className='
        font-montserrat font-extrabold text-4xl text-adivinaGreen
        '
        >Login
        </h1>
        <form
          onSubmit={handleSubmit(handleLoginForm)}
          className='flex flex-col gap-4'
        >
          <label className='flex flex-col text-xs gap-2'>
            Email:
            <input
              className='
              w-80 p-2
              border-2 border-[#03fea4] rounded-lg bg-transparent
              text-white text-base font-normal'
              type='email'
              placeholder='carlos@carlos.com'
              {...register('email', {
                required: 'Introduce un email Valido'
              })}
            />
            {errors.email?.type === 'required' && <p role='alert'>Introduce un email Valido</p>}
          </label>
          <label className='flex flex-col text-xs gap-2'>
            Password:
            <input
              className='
              w-80 p-2
              border-2 border-[#03fea4] rounded-lg bg-transparent
              text-white text-base font-normal'
              type='password'
              placeholder='Password'
              {...register('password', {
                required: 'Este campo es obligatorio',
                minLength: { value: 6, message: 'Minimo debe contener 6 caracteres' }
              })}
            />
            {(errors.pass?.type === 'required' || errors.pass?.type === 'minLength') && <p role='alert'>Debe contener al menos 6 caracteres</p>}
          </label>
          <button
            className='
            rounded-lg bg-[#03fea4] py-2
            text-[#333] font-bold
            hover:scale-105 hover:brightness-110 hover:shadow-adivinaGreen hover:shadow-2xl
            '
          >
            Enviar
          </button>
        </form>
        <nav className='absolute bottom-4 flex flex-col items-center justify-center'>
          <p>¿Aun no tienes cuenta?</p>
          <Link
            href='/auth/register'
            className='font-bold text-adivinaGreen'
          >Registrate
          </Link>
        </nav>
      </section>
    </main>
  )
}
