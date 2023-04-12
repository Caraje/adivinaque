
import { useState } from 'react'
import { getLevelsList } from '@/utils/listLevels'

export const useScoreGame = (categoryDB, scoreUser, userPosition) => {
  const [actualLevel, setActualLevel] = useState(0) // Estado con el level actual
  const [turn, setTurn] = useState(0) // estado con el turno del nivel actual
  const [isCorrect, setIsCorrect] = useState(false) // establece si la respuesta es correcta o no
  const [isError, setIsError] = useState(false) // Estado para ver cuando la partida es marcada como error del nivel
  const [multiplyPoints, setMultiplyPoints] = useState(5) // Establece el multiplicador de puntos
  let levelNumber = 0
  const level = getLevelsList(categoryDB)[levelNumber]
  const levelList = getLevelsList(categoryDB)

  const isAnswerCorrect = async (setTotalPoints, setCorrects, corrects) => {
    setIsCorrect(true)
    setTotalPoints(5 * multiplyPoints)
    setCorrects(corrects + 1)
    levelNumber = levelNumber + 1
  }

  const isAnswerIncorrect = async (setErrorsCount, errorsCount) => {
    setTurn(turn + 1)
    setMultiplyPoints(multiplyPoints - 1)
    setErrorsCount(errorsCount + 1)
  }

  const isAnswerFail = async (setErrorsCount, errorsCount) => {
    setIsError(true)
    setErrorsCount(errorsCount + 1)
    levelNumber = levelNumber + 1
  }

  const resetScore = async (setTotalPoints, setErrorsCount, setCorrects, setFormAnswer) => {
    setTurn(0)
    setIsError(false)
    setIsCorrect(false)
    setTotalPoints(0)
    setErrorsCount(0)
    setCorrects(0)
    setFormAnswer('')
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
    level,
    levelList,
    resetScore
  }
}
