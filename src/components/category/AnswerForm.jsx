
import { userScoreState } from '@/store/user/thunks'
import { previusLevel } from '@/utils/listLevels'
import { useDispatch } from 'react-redux'

const AnswerForm = ({ handleAnswer, formAnswer, setFormAnswer, isCorrect, isError, actualLevel, setActualLevel, levelList, pointsUser, status, setIsAutenticated }) => {
  const dispatch = useDispatch()
  const handleResetLevel = async () => {
    if (status !== 'authenticated') {
      console.log('No esta autenticado')
      setIsAutenticated(true)
      return
    }
    await dispatch(userScoreState(pointsUser))
    previusLevel(setActualLevel, actualLevel, levelList)
  }
  return (
    <form
      className='w-4/5 flex gap-4 h-12'
      onSubmit={handleAnswer}
    >
      <input
        className='w-4/5 rounded-lg p-4 bg-adivinaBlack/25 border border-adivinaGreen'
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
                          className='w-1/5 bg-yellow-400 border border-adivinaGreen text-adivinaBlack font-bold rounded-lg hover:scale-105 hover:contrast-200 transition-all '
                        >
                          Nivel anterior
                        </button>
                        )
                      : (
                        <button
                          className='w-1/5 bg-adivinaGreen border border-adivinaGreen text-adivinaBlack font-bold rounded-lg hover:scale-105 hover:contrast-200 transition-all '
                        >
                          Enviar
                        </button>
                        )
                  }
    </form>
  )
}

export default AnswerForm
