import Link from 'next/link'

export default function CinemaPage () {
  return (
    <>
      <div className='w-screen min-h-screen  flex flex-col items-center justify-betwee text-white font-montserrat  bg-slate-950'>
        {/* BARRA DE MENU_ */}
        <div className='w-full  max-w-6xl'>
          <div className='w-full flex items-center justify-between p-4'>
            <Link href='/'>
              <img src='./imgs/logo.webp' alt='Logotipo de Adivina Que' height={100} width={100} />

            </Link>
            <nav className='flex gap-8 font-semibold px-20 py-1 rounded-full border border-adivinaGreen/40  text-2xl'>
              <Link className='hover:scale-110 hover:text-adivinaGreen hover:shadow-adivinaGreen transition-all' href='/cinema'>Cine</Link>
              <Link className='hover:scale-110 hover:text-adivinaGreen hover:shadow-adivinaGreen transition-all' href='/series'>series</Link>
              <Link className='hover:scale-110 hover:text-adivinaGreen hover:shadow-adivinaGreen transition-all' href='/videogames'>Juegos</Link>
            </nav>

            <Link href='/auth/login' className='flex items-center gap-4 hover:text-adivinaGreen hover:shadow-adivinaGreen '>
              <h5 className='font-semibold text-lg' href='/caraje'>Caraje</h5>
              <img className='rounded-full' src='./imgs/avatar_caraje.webp' alt='Imagen de avatar de Caraje' width={40} height={40} />
            </Link>
          </div>
        </div>

        {/* CONTENIDO */}
        <main className='w-full flex gap-10 p-4 max-w-6xl'>

          <section className=' w-full flex flex-col gap-8  border border-adivinaGreen/50 rounded-xl p-4 bg-adivinaBlack/25'>
            <h1
              className='font-black text-3xl text-adivinaGreen ml-8 mt-8'
            >
              Cine
            </h1>
            <div className=' w-full flex flex-col gap-8  items-center overflow-hidden'>

              <div className='relative w-4/5 bg-slate-500 rounded-2xl overflow-hidden border border-adivinaGreen/50 '>
                <h3
                  className='absolute bottom-4 w-full bg-adivinaGreen/40 ext-adivinaBlack font-bold  flex items-center justify-center text-3xl p-4'
                >
                  ¡¡¡Respuesta Correcta!!!
                </h3>

                <img src='./imgs/dino.webp' alt='imagen de parque jurasico' width={650} height={400} />
              </div>
              <form className='w-4/5 flex gap-4 h-12'>
                <input
                  className='w-4/5 rounded-lg p-4 bg-adivinaBlack/25 border border-adivinaGreen'
                  type='text'
                  placeholder='Jurassic Park'
                />
                <button
                  className='w-1/5 bg-adivinaGreen border border-adivinaGreen text-adivinaBlack font-bold rounded-lg hover:scale-105 hover:contrast-200 transition-all '
                >
                  Enviar
                </button>
              </form>

              <section className='w-4/5'>
                <h2 className='text-adivinaGreen font-extrabold text-2xl'>
                  Pistas:
                </h2>
                <ol className='p-8 font-semibold flex flex-col gap-2'>
                  <li className='list-disc'>Primera pista</li>
                  <li className='list-disc'>Segunda Pista pista</li>
                  <li className='list-disc'>Tercera pista</li>
                  <li className='list-disc'>Cuarta pista</li>
                </ol>
              </section>
            </div>
          </section>
          <aside className='w-80 flex flex-col gap-10  '>
            {/* USER CARD */}
            <Link className='hover:scale-105 transition-all' href='/caraje'>
              <article className=' flex  flex-col gap-4 justify-center items-center overflow-hidden border border-adivinaGreen/50 rounded-xl p-4 bg-adivinaBlack/25'>
                <header>
                  <img className='rounded-full' src='./imgs/avatar_caraje.webp' alt='Imagen de avatar de Caraje' width={100} height={100} />
                </header>
                <footer className='flex flex-col justify-center items-center gap-4  text-2xl'>
                  <h2>Caraje</h2>
                  <section className='flex items-center justify-center gap-4 font-light text-lg '>
                    <div className='flex flex-col items-center justify-center gap-2'>
                      <img src='./icons/cinema-icon.svg' alt='' width={24} height={24} />
                      <p>999</p>
                    </div>
                    <div className='flex flex-col items-center justify-center gap-2'>
                      <img src='./icons/series-icon.svg' alt='' width={24} height={24} />
                      <p>999</p>
                    </div>
                    <div className='flex flex-col items-center justify-center gap-2'>
                      <img src='./icons/game-icon.svg' alt='' width={24} height={24} />
                      <p>999</p>
                    </div>
                  </section>
                </footer>

              </article>
            </Link>
            {/* RANK CARD */}
            {/* TODO: CAMBIAR */}
            <section className=' flex  flex-col gap-4 justify-center   overflow-hidden border border-adivinaGreen/50 rounded-xl p-4 bg-adivinaBlack/25'>
              <h2 className=' text-xl text-adivinaGreen font-semibold'>
                Últimas noticias
              </h2>
              <Link className='hover:scale-105 transition-all  hover:contrast-125 hover:brightness-110 hover:text-adivinaGreen' href='/#'>
                <article className='relative w-full  rounded-xl border border-adivinaGreen/75 overflow-hidden '>
                  <h2 className='absolute bottom-2 left-2 m-2 font-semibold text-lg z-20'>Nuevas Secciones </h2>
                  <div className='absolute w-full h-full bg-gradient-to-t from-black/30 from-30% to-transparent to-45% z-400' />
                  <img className='w-full object-cover' src='./imgs/superman.webp' alt='' width={200} height={50} />
                </article>
              </Link>
              <Link className='hover:scale-105 transition-all  hover:contrast-125 hover:brightness-110 hover:text-adivinaGreen' href='/#'>
                <article className='relative w-full  rounded-xl border border-adivinaGreen/75 overflow-hidden '>
                  <h2 className='absolute bottom-2 left-2 m-2 font-semibold text-lg z-20'>Cierre por mantenimiento </h2>
                  <div className='absolute w-full h-full bg-gradient-to-t from-black/30 from-30% to-transparent to-45% z-400' />
                  <img className='w-full object-cover' src='./imgs/superman.webp' alt='' width={200} height={50} />
                </article>
              </Link>

            </section>
          </aside>

        </main>

        {/* FOOTER */}
        <footer className='w-full mt-auto flex items-center  justify-around bg-adivinaBlack'>Aqui va el pie de pagina</footer>
      </div>
    </>
  )
}
