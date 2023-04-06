
import { useState } from 'react'

export const useScoreGame = (scoreUser, userPosition, levels) => {
  const [actualLevel, setActualLevel] = useState(0) // Estado con el level actual
  const [turn, setTurn] = useState(0) // estado con el turno del nivel actual
  const [isCorrect, setIsCorrect] = useState(false) // establece si la respuesta es correcta o no
  const [isError, setIsError] = useState(false) // Estado para ver cuando la partida es marcada como error del nivel
  const [multiplyPoints, setMultiplyPoints] = useState(5) // Establece el multiplicador de puntos
  const [check, setCheck] = useState(0)

  const isAnswerCorrect = (setTotalPoints, setCorrects, corrects) => {
    setIsCorrect(true)
    setTotalPoints(5 * multiplyPoints)
    setCorrects(corrects + 1)
    setCheck(check + 1)
  }

  const isAnswerIncorrect = (setErrorsCount, errorsCount) => {
    setTurn(turn + 1)
    setMultiplyPoints(multiplyPoints - 1)
    setErrorsCount(errorsCount + 1)
  }

  const isAnswerFail = () => {

  }

  return {
    actualLevel,
    setActualLevel,
    turn,
    setTurn,
    isCorrect,
    setIsCorrect,
    isError,
    setIsError,
    multiplyPoints,
    setMultiplyPoints,
    check,
    setCheck,
    isAnswerCorrect,
    isAnswerIncorrect

  }
}
