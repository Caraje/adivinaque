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
import { getLevelsList } from '@/utils/listLevels'
import { getPositionUserRank } from '@/utils/users'
import { useUpdateScoreUser } from '@/hooks/useUpdateScoreUser'

export default function CinemaPage ({ usersList }) {
  const dispatch = useDispatch()
  const { status } = useSelector(store => store.auth)
  const user = useSelector(store => store.user)

  const [isCorrect, setIsCorrect] = useState(false) // establece si la respuesta es correcta o no
  const [actualLevel, setActualLevel] = useState(0) // Estado con el level actual
  const [turn, setTurn] = useState(0) // estado con el turno del nivel actual
  const [formAnswer, setFormAnswer] = useState('') // recibe la respuesta del usuario
  const [isError, setIsError] = useState(false) // Estado para ver cuando la partida es marcada como error del nivel
  // const [totalPoints, setTotalPoints] = useState(0) // Almacena los puntos del nivel
  // const [errorsCount, setErrorsCount] = useState(0) // Almacena los errores del nivel
  // const [corrects, setCorrects] = useState(0) // Almacena los errores del nivel
  const [multiplyPoints, setMultiplyPoints] = useState(5) // Establece el multiplicador de puntos
  const [check, setCheck] = useState(0)

  const scoreUser = user.categories
  const level = getLevelsList(scoreUser)[actualLevel]
  const levelList = getLevelsList(scoreUser)
  const arrayLevels = []
  const { id } = user
  const userPosition = getPositionUserRank(usersList, id)
  const {
    pointsUser,
    setTotalPoints,
    totalPoints,
    setErrorsCount,
    errorsCount,
    setCorrects,
    corrects
  } = useUpdateScoreUser(scoreUser, userPosition, levelList)

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
    console.log(actualLevel + 1, finalList.length - 1)
    if (actualLevel + 1 <= finalList.length - 1) {
      setActualLevel(actualLevel + 1)
      return
    }

    // TODO: poner pantalla de no hay mas niveles
    console.log('no hay mas')
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
