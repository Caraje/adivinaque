
import { userScoreState } from '@/store/user/thunks'
import { previusLevel } from '@/utils/listLevels'
import { useDispatch } from 'react-redux'

const AnswerForm = ({
  handleAnswer,
  formAnswer,
  setFormAnswer,
  isCorrect,
  isError,
  actualLevel,
  setActualLevel,
  levelList,
  pointsUser,
  status,
  setIsAutenticated,
  resetScore,
  setTotalPoints,
  setErrorsCount,
  setCorrects
}) => {
  const dispatch = useDispatch()
  const handleResetLevel = async () => {
    if (status !== 'authenticated') {
      console.log('No esta autenticado')
      setIsAutenticated(true)
      return
    }
    previusLevel(setActualLevel, actualLevel, levelList)
    dispatch(userScoreState(pointsUser))
    setTimeout(() => {
      resetScore(setTotalPoints, setErrorsCount, setCorrects, setFormAnswer)
    }, 10)
  }
  return (
    <form
      className='w-4/5 flex flex-col  sm:flex-row mb-4 gap-4 '
      onSubmit={handleAnswer}
    >
      <input
        className='w-full sm:w-4/5 rounded-lg p-4 bg-adivinaBlack/25 border border-adivinaGreen'
        type='text'
        placeholder='Tu respuesta'
        name='answer'
        value={formAnswer}
        onChange={(e) => setFormAnswer(e.target.value)}
      />

      {
        (isCorrect || isError)
          ? (
            <button
              type='button'
              onClick={handleResetLevel}
              className='w-full sm:w-1/5 py-2 bg-yellow-400 border border-adivinaGreen text-adivinaBlack font-bold rounded-lg   hover:scale-105 hover:contrast-200 transition-all '
            >
              Nivel anterior
            </button>
            )
          : (
            <button
              className='w-full sm:w-1/5 py-2 bg-adivinaGreen border border-adivinaGreen text-adivinaBlack font-bold rounded-lg   hover:scale-105 hover:contrast-200 transition-all '
            >
              Enviar
            </button>
            )
                  }
    </form>
  )
}

export default AnswerForm
