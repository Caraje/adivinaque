
import { useState } from 'react'

export const useUpdateScoreUser = (scoreUser, userPosition, levelList) => {
  const [totalPoints, setTotalPoints] = useState(0) // Almacena los puntos del nivel
  const [errorsCount, setErrorsCount] = useState(0) // Almacena los errores del nivel
  const [corrects, setCorrects] = useState(0) //

  const pointsUser = {
    cinema: {
      corrects: corrects + scoreUser.cinema?.corrects,
      errors: errorsCount + scoreUser.cinema?.errors,
      levels_completed: [],
      // levels_completed: scoreUser.cinema?.levels_completed.concat(levelList.id),
      positionRank: userPosition + 1,
      totalPoints: totalPoints + scoreUser.cinema?.totalPoints
    },
    series: {
      corrects: scoreUser.series?.corrects,
      errors: scoreUser.series?.errors,
      levels_completed: scoreUser.series?.levels_completed,
      positionRank: scoreUser.series?.positionRank,
      totalPoints: scoreUser.series?.totalPoints
    },
    videogames: {
      corrects: scoreUser.videogames?.corrects,
      errors: scoreUser.videogames?.errors,
      levels_completed: scoreUser.videogames?.levels_completed,
      positionRank: scoreUser.videogames?.positionRank,
      totalPoints: scoreUser.videogames?.totalPoints
    }
  }
  return {
    pointsUser,
    setTotalPoints,
    totalPoints,
    setErrorsCount,
    errorsCount,
    setCorrects,
    corrects
  }
}
