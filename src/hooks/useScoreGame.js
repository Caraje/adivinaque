
import { useState } from 'react'
import { useUpdateScoreUser } from './useUpdateScoreUser'
import { getLevelsList } from '@/utils/listLevels'

export const useScoreGame = (scoreUser, userPosition) => {
  const { setTotalPoints, setErrorsCount, setCorrects } = useUpdateScoreUser(scoreUser, userPosition)

  const [actualLevel, setActualLevel] = useState(0) // Estado con el level actual
  const [turn, setTurn] = useState(0) // estado con el turno del nivel actual
  const [isCorrect, setIsCorrect] = useState(false) // establece si la respuesta es correcta o no
  const [isError, setIsError] = useState(false) // Estado para ver cuando la partida es marcada como error del nivel
  const [multiplyPoints, setMultiplyPoints] = useState(5) // Establece el multiplicador de puntos
  let levelNumber = 0
  const level = getLevelsList(scoreUser)[levelNumber]
  const levelList = getLevelsList(scoreUser)

  const isAnswerCorrect = (setTotalPoints, setCorrects, corrects) => {
    setIsCorrect(true)
    setTotalPoints(5 * multiplyPoints)
    setCorrects(corrects + 1)
    levelNumber = levelNumber + 1
  }

  const isAnswerIncorrect = (setErrorsCount, errorsCount) => {
    setTurn(turn + 1)
    setMultiplyPoints(multiplyPoints - 1)
    setErrorsCount(errorsCount + 1)
  }

  const isAnswerFail = (setErrorsCount, errorsCount) => {
    setIsError(true)
    setErrorsCount(errorsCount + 1)
    levelNumber = levelNumber + 1
  }

  const resetScoreLevel = (setFormAnswer) => {
    setTurn(0)
    setIsError(false)
    setIsCorrect(false)
    // setFormAnswer('')
    setTotalPoints(0)
    setErrorsCount(0)
    setCorrects(0)
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
    isAnswerCorrect,
    isAnswerIncorrect,
    isAnswerFail,
    resetScoreLevel,
    level,
    levelList,
    levelNumber

  }
}
