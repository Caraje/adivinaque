
import { useState } from 'react'

export const useUpdateScoreUser = (categoryDB, scoreUser, userPosition, level) => {
  const [totalPoints, setTotalPoints] = useState(0) // Almacena los puntos del nivel
  const [errorsCount, setErrorsCount] = useState(0) // Almacena los errores del nivel
  const [corrects, setCorrects] = useState(0) //
  const idLevel = level && level.id
  const { cinema, series, videogames } = categoryDB.userScoreAll
  const category = categoryDB.category

  // console.log({ totalPoints, errorsCount, corrects })

  const pointsUser = {
    cinema: {
      corrects: (category === 'cinema') ? cinema?.corrects + corrects : cinema?.corrects,
      errors: (category === 'cinema') ? cinema?.errors + errorsCount : cinema?.errors,
      levels_completed: (category === 'cinema') ? cinema?.levels_completed.concat(idLevel) : cinema?.levels_completed,
      positionRank: (category === 'cinema') ? userPosition + 1 : cinema?.positionRank,
      totalPoints: (category === 'cinema') ? cinema?.totalPoints + totalPoints : cinema?.totalPoints
    },
    series: {
      corrects: (category === 'series') ? series?.corrects + corrects : series?.corrects,
      // corrects: 0,
      errors: (category === 'series') ? series?.errors + errorsCount : series?.errors,
      // errors: 0,
      levels_completed: (category === 'series') ? series?.levels_completed.concat(idLevel) : series?.levels_completed,
      // levels_completed: [],
      positionRank: (category === 'series') ? userPosition + 1 : series?.positionRank,
      totalPoints: (category === 'series') ? series?.totalPoints + totalPoints : series?.totalPoints
      // totalPoints: 0
    },
    videogames: {
      corrects: (category === 'videogames') ? videogames?.corrects + corrects : videogames?.corrects,
      errors: (category === 'videogames') ? videogames?.errors + errorsCount : videogames?.errors,
      levels_completed: (category === 'videogames') ? videogames?.levels_completed.concat(idLevel) : videogames?.levels_completed,
      positionRank: (category === 'videogames') ? userPosition + 1 : videogames?.positionRank,
      totalPoints: (category === 'videogames') ? videogames?.totalPoints + totalPoints : videogames?.totalPoints
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
