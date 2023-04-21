import Link from 'next/link'

const RegisterConfirmation = () => {
  return (
    <div className='absolute w-screen h-screen flex flex-col items-center justify-center backdrop-blur-lg'>
      <div className='bg-adivinaDark rounded-3xl border border-adivinaGreen font-montserrat text-white p-4 flex items-center justify-center'>
        <img src='https://res.cloudinary.com/caraje/image/upload/v1682094851/AdivinaQue/ttjisb14ljocjycesbns.webp' alt='Imagen de palomitas saludando' width={200} height={700} />
        <div className='flex flex-col items-center justify-center gap-4 max-w-md'>
          <h2 className='font-extrabold text-adivinaGreen text-4xl'>Gracias por Registrarte</h2>
          <h3 className=' text-center max-w-xs'>Hemos enviado un correo a tu email para que confirmes la dirección</h3>
          <Link className='rounded-lg bg-adivinaGreen py-2 px-4 text-[#333] font-bold hover:scale-105 hover:brightness-110 hover:shadow-adivinaGreen hover:shadow-2xl' href='/'>Volver a Inicio</Link>
        </div>

      </div>
    </div>
  )
}

export default RegisterConfirmation
