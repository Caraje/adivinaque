import MainLayout from '@/components/layout/MainLayout'
import UserCard from '@/components/ui/UserCard'
import { useDispatch, useSelector } from 'react-redux'
import { useState, useEffect } from 'react'
import cinema from '@/db/levelsCategories/cinema.json'
import CanvasCategory from '@/components/category/CanvasCategory'
import AnswerForm from '@/components/category/AnswerForm'
import CluesCategory from '@/components/category/CluesCategory'
import { getUserList } from '@/services/supabase'
import RankList from '@/components/ui/RankList'
import { userScoreState } from '@/store/user/thunks'

export default function CinemaPage ({ usersList }) {
  const { status } = useSelector(store => store.auth)
  const user = useSelector(store => store.user)
  const { id } = user

  const date = new Date()
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const actualDate = `${day}/${month}/${year}`

  const getLevel = cinema.cinema.filter(lvl => {
    return lvl.publishDay === actualDate
  })

  const [isCorrect, setIsCorrect] = useState(false) // establece si la respuesta es correcta o no
  const [actualLevel, setActualLevel] = useState(getLevel[0].id - 1) // Estado con el level actual
  const [turn, setTurn] = useState(0) // estado con el turno del nivel actual
  const [formAnswer, setFormAnswer] = useState('') // recibe la respuesta del usuario
  const [isError, setIsError] = useState(false) // Estado para ver cuando la partida es marcada como error del nivel
  const [totalPoints, setTotalPoints] = useState(0) // Almacena los puntos del nivel
  const [errorsCount, setErrorsCount] = useState(0) // Almacena los errores del nivel
  const [corrects, setCorrects] = useState(0) // Almacena los errores del nivel
  const [multiplyPoints, setMultiplyPoints] = useState(5) // Establece el multiplicador de puntos
  const [check, setCheck] = useState(0)

  const dispatch = useDispatch()
  const arrayLevels = []
  const scoreUser = user.categories

  // const arrayFiltrado = arrayObjetos.filter(objeto => !arrayNumeros.includes(objeto.id));

  const levelsList = cinema.cinema
  const finalList = levelsList.filter(lvl => !scoreUser.cinema?.levels_completed.includes(lvl.id))
  const level = finalList[actualLevel]
  useEffect(() => {
    setTurn(0)
    setIsError(false)
    setIsCorrect(false)
    setFormAnswer('')
    setTotalPoints(0)
    setErrorsCount(0)
    setCorrects(0)
  }, [actualLevel])

  useEffect(() => {
    if (!totalPoints && !errorsCount) {
      return
    }

    dispatch(userScoreState(pointsUser))
    arrayLevels.push(scoreUser.cinema?.levels_completed)
  }, [check])

  const orderList = usersList.sort((a, b) => {
    return (b.user_metadata.categories.cinema.totalPoints - a.user_metadata.categories.cinema.totalPoints)
  })

  const userPosition = orderList.findIndex(function (objeto) {
    return objeto.id === id
  })

  console.log(arrayLevels)
  const pointsUser = {
    cinema: {
      corrects: corrects + scoreUser.cinema?.corrects,
      errors: errorsCount + scoreUser.cinema?.errors,
      levels_completed: scoreUser.cinema?.levels_completed.concat(level.id),
      positionRank: userPosition + 1,
      totalPoints: totalPoints + scoreUser.cinema?.totalPoints
    },
    series: {
      corrects: scoreUser.series?.corrects,
      errors: scoreUser.series?.errors,
      levels_completed: scoreUser.series?.levels_completed,
      positionRank: scoreUser.series?.positionRank,
      totalPoints: scoreUser.series?.totalPoints
    },
    videogames: {
      corrects: scoreUser.videogames?.corrects,
      errors: scoreUser.videogames?.errors,
      levels_completed: scoreUser.videogames?.levels_completed,
      positionRank: scoreUser.videogames?.positionRank,
      totalPoints: scoreUser.videogames?.totalPoints
    }
  }

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
      setCorrects(corrects + 1)
      setCheck(check + 1)
      // updateUserScore(pointsUser)
      return
    }
    // LA RESPUESTA ES INCORRECTA
    if (turn < 4) {
      setTurn(turn + 1)
      setMultiplyPoints(multiplyPoints - 1)
      setErrorsCount(errorsCount + 1)
      // setTest(test + 1)

      return
    }
    // SE PRODUCE ERROR EN EL NIVEL
    setIsError(true)
    setErrorsCount(errorsCount + 1)

    setCheck(check + 1)
  }

  const prevLevel = () => {
    setActualLevel(actualLevel - 1)
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
              <section className='w-full flex  flex-col gap-4 justify-center   overflow-hidden border border-adivinaGreen/50 rounded-xl p-4 bg-adivinaBlack/25'>
                <h2 className=' text-xl text-adivinaGreen font-semibold'>
                  Classificación
                </h2>

                <RankList usersList={usersList} />
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
