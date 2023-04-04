import MainLayout from '@/components/layout/MainLayout'
import UserCard from '@/components/ui/UserCard'
import Link from 'next/link'
import { useSelector } from 'react-redux'
import { useState, useEffect } from 'react'
import cinema from '@/db/levelsCategories/cinema.json'
import CanvasCategory from '@/components/category/CanvasCategory'
import AnswerForm from '@/components/category/AnswerForm'
import CluesCategory from '@/components/category/CluesCategory'
import { getUserList } from '@/services/supabase'

export default function CinemaPage ({ usersList }) {
  const { status } = useSelector(store => store.auth)
  const [isCorrect, setIsCorrect] = useState(false) // establece si la respuesta es correcta o no
  const [actualLevel, setActualLevel] = useState(0) // Estado con el level actual
  const [turn, setTurn] = useState(0) // estado con el turno del nivel actual
  const [formAnswer, setFormAnswer] = useState('')
  const [isError, setIsError] = useState(false)
  const [totalPoints, setTotalPoints] = useState(0)
  const [errorsCount, setErrorsCount] = useState(0)
  const [multiplyPoints, setMultiplyPoints] = useState(5)

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

    // La respuesta debe tener mas de 2 caeacteres
    if (answerForm.length < 2) {
      return
    }

    // LA RESPUESTA ES CORRECTA
    if (answerForm === CorrectTitle) {
      setIsCorrect(true)
      setTotalPoints(5 * multiplyPoints)
      return
    }
    // LA RESPUESTA ES INCORRECTA
    if (turn < 4) {
      setTurn(turn + 1)
      setMultiplyPoints(multiplyPoints - 1)
      setErrorsCount(errorsCount + 1)
      return
    }
    // SE PRODUCE ERROR EN EL NIVEL
    setIsError(true)
  }

  const prevLevel = () => {
    setActualLevel(actualLevel + 1)
  }

  console.log({ usersList })
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
              <section className='w-full flex  flex-col gap-4 justify-center   overflow-hidden border border-adivinaGreen/50 rounded-xl p-4 bg-adivinaBlack/25'>
                <h2 className=' text-xl text-adivinaGreen font-semibold'>
                  Classificación
                </h2>

                {usersList.slice(0, 10).map((user, idx) => {
                  const newUser = user.user_metadata
                  console.log({ newUser })
                  return (
                    <Link
                      href={`/users/${newUser.userName.toLowerCase().trim()}`}
                      target='_blank'
                      key={idx}
                      className='w-full h-12 flex justify-between items-center gap-4 p-2 rounded-xl hover:bg-adivinaGreen/25 hover:scale-105 transition-all'
                    >
                      <img className='rounded-full w-10 h-10 object-cover border-2 border-adivinaGreen' src={newUser.imgAvatar ? `https://res.cloudinary.com/caraje/image/upload/v1679717935/${newUser.imgAvatar}` : '/imgs/no-avatar.webp'} alt={`Imagen de ${newUser.userName}`} width={50} height={50} />
                      <h2 className='w-2/4 font-montserrat font-semibold'>{newUser.userName}</h2>
                      <h2 className=''>{newUser.categories.cinema.totalPoints}</h2>
                    </Link>
                  )
                })}
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

export const getStaticProps = async (ctx) => {
  const usersList = await getUserList()

  return {
    props: {
      usersList
    }
  }
}
