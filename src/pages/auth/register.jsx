import { useForm } from 'react-hook-form'
import Link from 'next/link'
import { createUserWithEmail } from '@/services/supabase'

export default function RegisterPage () {
  const { register, handleSubmit, formState: { errors } } = useForm()

  const handleForm = async (data) => {
    const { name, email, password } = data
    await createUserWithEmail(name, email, password)
  }

  return (
    <main className='w-screen h-screen flex justify-center items-center bg-adivinaDark text-white font-montserrat'>
      <section className='w-1/2 h-full flex flex-col justify-center items-center '>
        <h1 className='font-montserrat font-extrabold text-4xl text-adivinaGreen'>Registro
        </h1>
        <form
          onSubmit={handleSubmit(handleForm)}
          className='flex flex-col gap-4'
        >
          <label className='flex flex-col text-xs gap-2'>
            Nombre:
            <input
              className='w-80 p-2 border-2 border-[#03fea4] rounded-lg bg-transparent text-white text-base font-normal'
              type='text'
              placeholder='nombre de usuario'
              {...register('name', {
                required: 'El campo es requerido'
              })}
            />
            {errors.name?.type === 'required' && <p role='alert'>El nombre de usuario es requerido</p>}
          </label>

          <label className='flex flex-col text-xs gap-2'>
            Email:
            <input
              className='
            w-80 p-2
            border-2 border-[#03fea4] rounded-lg bg-transparent text-white  text-base font-normal'
              type='email'
              placeholder='user@advinaque.com'
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
          <p>¿Ya tienes cuenta?</p>
          <Link
            href='/auth/login'
            className='font-bold text-adivinaGreen'
          >Logeate
          </Link>
        </nav>
      </section>
      <section className='w-1/2 h-full flex justify-center items-center '>
        <img
          className='w-full h-full object-cover object-top border-l-2 border-adivinaGreen'
          src='/imgs/last.webp'
          alt='imagen de The mandalorian'
        />
      </section>
    </main>
  )
}
