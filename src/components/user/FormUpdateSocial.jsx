
const FormUpdateSocial = () => {
  return (
    <form
      className='w-full grid grid-cols-2 gap-4'
    >
      <label className='flex flex-col text-xs gap-2'>
        Nombre:
        <input
          className='w-full p-2 border-2 border-adivinaGreen rounded-lg bg-transparent text-white text-base font-normal'
          type='text'
          placeholder='carlos@carlos.com'
        />
        {/* {errors.email?.type === 'required' && <p role='alert'>Introduce un email Valido</p>} */}
      </label>
      <label className='flex flex-col text-xs gap-2'>
        Twitter:
        <input
          className='w-full p-2 border-2 border-adivinaGreen rounded-lg bg-transparent text-white text-base font-normal'
          type='text'
          placeholder='carlos@carlos.com'
        />
        {/* {errors.email?.type === 'required' && <p role='alert'>Introduce un email Valido</p>} */}
      </label>
      <label className='flex flex-col text-xs gap-2'>
        Instagram:
        <input
          className='w-full p-2 border-2 border-adivinaGreen rounded-lg bg-transparent text-white text-base font-normal'
          type='text'
          placeholder='carlos@carlos.com'
        />
        {/* {errors.email?.type === 'required' && <p role='alert'>Introduce un email Valido</p>} */}
      </label>
      <label className='flex flex-col text-xs gap-2'>
        Twitch:
        <input
          className='w-full p-2 border-2 border-adivinaGreen rounded-lg bg-transparent text-white text-base font-normal'
          type='text'
          placeholder='carlos@carlos.com'
        />
        {/* {errors.email?.type === 'required' && <p role='alert'>Introduce un email Valido</p>} */}
      </label>
      <label className='flex flex-col text-xs gap-2'>
        Youtube:
        <input
          className='w-full p-2 border-2 border-adivinaGreen rounded-lg bg-transparent text-white text-base font-normal'
          type='text'
          placeholder='carlos@carlos.com'
        />
        {/* {errors.email?.type === 'required' && <p role='alert'>Introduce un email Valido</p>} */}
      </label>
      <label className='flex flex-col text-xs gap-2'>
        Web:
        <input
          className='w-full p-2 border-2 border-adivinaGreen rounded-lg bg-transparent text-white text-base font-normal'
          type='text'
          placeholder='carlos@carlos.com'
        />
      </label>
      {/* {errors.email?.type === 'required' && <p role='alert'>Introduce un email Valido</p>} */}
      <label className='flex flex-col text-xs gap-2'>

        <input
          className='w-full p-2 border-2 border-adivinaGreen rounded-lg bg-transparent text-white text-base font-normal'
          type='file'
          placeholder='carlos@carlos.com'
        />
        {/* {errors.email?.type === 'required' && <p role='alert'>Introduce un email Valido</p>} */}
      </label>
      <div className=' flex  gap-4'>
        <button
          className='w-1/2 rounded-lg bg-adivinaGreen py-2 text-[#333] font-bold hover:scale-105 hover:brightness-110 transition-all '
        >
          Actualizar
        </button>
        <button
          className='w-1/2 rounded-lg bg-red-700 py-2 text-white font-bold hover:scale-105 hover:brightness-110 transition-all '
        >
          Eliminar Usuario
        </button>
      </div>
    </form>
  )
}

export default FormUpdateSocial
