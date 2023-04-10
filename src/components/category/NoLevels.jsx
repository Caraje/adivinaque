import React from 'react'

const NoLevels = () => {
  return (
    <div className='w-full h-full  flex items-center justify-center  '>
      <img className='object-cover w-1/3' src='/imgs/popcorn.svg' alt='Illustration popcorn' width gap-8={250} height={300} />
      <div className='w-1/2 flex flex-col  items-center justify-center font-montserrat'>
        <h2 className='font-extrabold text-4xl text-center text-adivinaGreen mb-4'>¡¡¡Ya has completado todos los niveles!!!</h2>
        <h3 className=' text-base font-medium'>Vuelve mañana para poder ver nuevos niveles</h3>
        <h3 className=' text-base font-medium'>O participa en las otras categorias</h3>
      </div>
    </div>
  )
}

export default NoLevels
