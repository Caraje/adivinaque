
import CorrectAnswer from './CorrectAnswer'
import ErrorAnswer from './ErrorAnswer'

const CanvasCategory = ({ level, isCorrect, isError, turn }) => {
  console.log({ turn })
  return (
    <div className='relative w-4/5 bg-slate-500 rounded-2xl overflow-hidden border border-adivinaGreen/50 '>
      {isCorrect
        ? (
          <>
            <CorrectAnswer />
            <img src={`https://res.cloudinary.com/caraje/image/upload/v1679936239${level.answer.answerImg}`} alt='imagen de parque jurasico' width={650} height={400} />
          </>

          )
        : (
          <>
            {
        isError && <ErrorAnswer />
      }
            <img src={`https://res.cloudinary.com/caraje/image/upload/v1679936239${level.clues[turn].img}`} alt='imagen de parque jurasico' width={650} height={400} />
          </>
          )}
    </div>
  )
}

export default CanvasCategory
