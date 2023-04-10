import MainLayout from '@/components/layout/MainLayout'
import UserCard from '@/components/ui/UserCard'
import { useSelector } from 'react-redux'
import { useState, useEffect } from 'react'
import CanvasCategory from '@/components/category/CanvasCategory'
import AnswerForm from '@/components/category/AnswerForm'
import CluesCategory from '@/components/category/CluesCategory'
import { getUserList, logoutUser } from '@/services/supabase'
import RankList from '@/components/ui/RankList'
// import { getLevelsList } from '@/utils/listLevels'
import { getPositionUserRank } from '@/utils/users'
import { useUpdateScoreUser } from '@/hooks/useUpdateScoreUser'
import { useScoreGame } from '@/hooks/useScoreGame'
import NoLevels from '@/components/category/NoLevels'

export default function CinemaPage ({ usersList }) {
  const [formAnswer, setFormAnswer] = useState('')
  const { status } = useSelector(store => store.auth)
  const user = useSelector(store => store.user)

  const { id } = user
  const scoreUser = user.categories
  const userPosition = getPositionUserRank(usersList, id)

  const { actualLevel, setActualLevel, turn, isCorrect, isError, isAnswerCorrect, isAnswerIncorrect, isAnswerFail, level, resetScoreLevel, levelList } = useScoreGame(scoreUser, userPosition)
  const { pointsUser, setTotalPoints, setErrorsCount, errorsCount, setCorrects, corrects } = useUpdateScoreUser(scoreUser, userPosition, level)

  useEffect(() => {
    resetScoreLevel()
    setFormAnswer('')
  }, [actualLevel])
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
            <section className='relative w-full flex flex-col gap-8  border border-adivinaGreen/50 rounded-xl p-4 bg-adivinaBlack/25'>
              <h1 className='font-black text-3xl text-adivinaGreen ml-8 mt-8'>
                Cine
              </h1>
              {
                (level)
                  ? (
                    <div className='w-full flex flex-col gap-4  items-center overflow-hidden'>
                      <CanvasCategory level={level} isCorrect={isCorrect} isError={isError} turn={turn} />
                      <div className='w-4/5  font-montserrat font-semibold text-adivinaGreen text-xs'>
                        <span className='text-white text-base font-normal'>Dia: </span>{level.publishDay}
                      </div>
                      <AnswerForm
                        handleAnswer={handleAnswer}
                        formAnswer={formAnswer}
                        setFormAnswer={setFormAnswer}
                        isCorrect={isCorrect}
                        isError={isError}
                        actualLevel={actualLevel}
                        setActualLevel={setActualLevel}
                        levelList={levelList}
                        pointsUser={pointsUser}
                      />
                      {turn >= 1 && <CluesCategory level={level} turn={turn} />}
                    </div>
                    )
                  : <NoLevels />
                  }
              <p className=' absolute bottom-1 w-4/5 font-thin '>* Se debe introducir el titulo en su version original</p>
            </section>
            <aside className='w-80 flex flex-col gap-10  '>
              {status && <UserCard />}
              <section className='w-full flex  flex-col gap-4 justify-center   overflow-hidden border border-adivinaGreen/50 rounded-xl p-4 bg-adivinaBlack/25'>
                <h2 className=' text-xl text-adivinaGreen font-semibold'>
                  Classificación
                </h2>
                <RankList usersList={usersList} />
              </section>
            </aside>
          </main>
          <footer className='w-full mt-auto flex items-center  justify-around bg-adivinaBlack'>
            <button onClick={() => { logoutUser() }}>X</button>
            Aqui va el pie de pagina
          </footer>
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
