
import { useState } from 'react'
import CorrectAnswer from './CorrectAnswer'
import ErrorAnswer from './ErrorAnswer'
import Loader from './Loader'

const CanvasCategory = ({ level, isCorrect, isError, turn }) => {
  const [isloadding, setIsloadding] = useState(true)
  setTimeout(() => {
    setIsloadding(false)
  }, 500)

  return (
    <>{
      isloadding
        ? (<Loader />)
        : (
          <div className='relative w-4/5 bg-slate-500 rounded-2xl overflow-hidden border border-adivinaGreen/50 '>
            {isCorrect || isError
              ? (
                <>
                  {isCorrect ? <CorrectAnswer /> : <ErrorAnswer />}
                  <img src={`https://res.cloudinary.com/caraje/image/upload/c_fill,g_auto,h_562,w_1000/f_webp/q_auto:eco//v1679936239${level.answer.answerImg}`} alt='imagen de parque jurasico' width={650} height={400} />
                </>
                )
              : (
                <>

                  <img src={`https://res.cloudinary.com/caraje/image/upload/c_fill,g_auto,h_562,w_1000/f_webp/q_auto:eco//v1679936239${level.clues[turn].img}`} alt='imagen de parque jurasico' width={650} height={400} />
                </>
                )}
          </div>
          )
          }
    </>
  )
}

export default CanvasCategory
