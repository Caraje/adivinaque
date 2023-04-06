import MainLayout from '@/components/layout/MainLayout'
import UserCard from '@/components/ui/UserCard'
import { useDispatch, useSelector } from 'react-redux'
import { useState, useEffect } from 'react'
import CanvasCategory from '@/components/category/CanvasCategory'
import AnswerForm from '@/components/category/AnswerForm'
import CluesCategory from '@/components/category/CluesCategory'
import { getUserList } from '@/services/supabase'
import RankList from '@/components/ui/RankList'
import { userScoreState } from '@/store/user/thunks'
import { getLevelsList } from '@/utils/listLevels'
import { getPositionUserRank } from '@/utils/users'
import { useUpdateScoreUser } from '@/hooks/useUpdateScoreUser'
import { useScoreGame } from '@/hooks/useScoreGame'

export default function CinemaPage ({ usersList }) {
  const dispatch = useDispatch()
  const { status } = useSelector(store => store.auth)
  const user = useSelector(store => store.user)

  const [formAnswer, setFormAnswer] = useState('') // recibe la respuesta del usuario
  const { id } = user
  const scoreUser = user.categories
  const userPosition = getPositionUserRank(usersList, id)
  const levelList = getLevelsList(scoreUser)

  const {
    pointsUser,
    setTotalPoints,
    totalPoints,
    setErrorsCount,
    errorsCount,
    setCorrects,
    corrects
  } = useUpdateScoreUser(scoreUser, userPosition, levelList)

  const {
    actualLevel,
    setActualLevel,
    turn,
    setTurn,
    isCorrect,
    setIsCorrect,
    isError,
    setIsError,
    check,
    isAnswerCorrect,
    isAnswerIncorrect,
    isAnswerFail
  } = useScoreGame(scoreUser, userPosition)

  const level = getLevelsList(scoreUser)[actualLevel]
  const arrayLevels = []

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

    if (answerForm.length < 2) return
    (answerForm === CorrectTitle)
      ? isAnswerCorrect(setTotalPoints, setCorrects, corrects)
      : (turn < 4)
          ? isAnswerIncorrect(setErrorsCount, errorsCount)
          : isAnswerFail(setErrorsCount, errorsCount)
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
                  actualLevel={actualLevel}
                  setActualLevel={setActualLevel}
                  levelList={levelList}
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
