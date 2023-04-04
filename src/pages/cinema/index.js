import MainLayout from '@/components/layout/MainLayout'
import UserCard from '@/components/ui/UserCard'
import Link from 'next/link'
import { useSelector } from 'react-redux'
import { useState, useEffect } from 'react'
import cinema from '@/db/levelsCategories/cinema.json'
import CanvasCategory from '@/components/category/CanvasCategory'
import AnswerForm from '@/components/category/AnswerForm'
import CluesCategory from '@/components/category/CluesCategory'

export default function CinemaPage () {
  const { status } = useSelector(store => store.auth)
  const [isCorrect, setIsCorrect] = useState(false) // establece si la respuesta es correcta o no
  const [actualLevel, setActualLevel] = useState(0) // Estado con el level actual
  const [turn, setTurn] = useState(0) // estado con el turno del nivel actual
  const [formAnswer, setFormAnswer] = useState('')
  const [isError, setIsError] = useState(false)

  const level = cinema.cinema[actualLevel]

  useEffect(() => {
    setTurn(0)
    setIsError(false)
    setIsCorrect(false)
    setFormAnswer('')
  }, [actualLevel])

  const handleAnswer = (event) => {
    event.preventDefault()
    const answerForm = event.target.answer.value.toLowerCase()
    const CorrectTitle = level.answer.title.toLowerCase()

    console.log('answerForm.lenght=>', answerForm.length)
    if (answerForm.length < 2) {
      return
    }
    if (answerForm === CorrectTitle) {
      setIsCorrect(true)
      return
    }
    if (turn < 4) {
      setTurn(turn + 1)
      return
    }
    setIsError(true)
  }

  const prevLevel = () => {
    setActualLevel(actualLevel + 1)
  }

  return (
    <>
      <div className='w-screen min-h-screen  flex flex-col items-center justify-betwee text-white font-montserrat  bg-slate-950'>
        <MainLayout>

          {/* CONTENIDO */}
          <main className='w-full flex gap-10 p-4 max-w-6xl'>

            <section className=' w-full flex flex-col gap-8  border border-adivinaGreen/50 rounded-xl p-4 bg-adivinaBlack/25'>
              <h1
                className='font-black text-3xl text-adivinaGreen ml-8 mt-8'
              >
                Cine
              </h1>
              <div className=' w-full flex flex-col gap-8  items-center overflow-hidden'>

                {/* ESTO ES LA IMAGEN */}
                <CanvasCategory level={level} isCorrect={isCorrect} isError={isError} turn={turn} />
                {/* ESTO ES EL FORMULARIO */}
                <AnswerForm
                  handleAnswer={handleAnswer}
                  formAnswer={formAnswer}
                  setFormAnswer={setFormAnswer}
                  isCorrect={isCorrect}
                  isError={isError}
                  prevLevel={prevLevel}
                />

                {/* ESTO Son las pistas */}
                {
                  turn >= 1 &&
                    <CluesCategory level={level} turn={turn} />
                }

              </div>
            </section>

            {/* Esto es la barra lateral */}
            <aside className='w-80 flex flex-col gap-10  '>
              {/* USER CARD */}
              {
                status && <UserCard />

              }
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
        </MainLayout>
      </div>
    </>
  )
}
