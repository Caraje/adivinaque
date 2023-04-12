
const date = new Date()
export const actualDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`

// Get Actual Day
export const getLevelOfDay = (categoryDataBase) => {
  const LevelDay = categoryDataBase.filter(lvl => {
    return lvl.publishDay === actualDate
  })
  return LevelDay
}

// Get filtered List of Valid Levels
export const getLevelsList = (categoryDB) => {
  const { categoryDataBase, userScore } = categoryDB
  const levelsList = categoryDataBase
    .filter(lvl => lvl.id <= getLevelOfDay(categoryDataBase)[0]?.id)
    .filter(lvl => !userScore?.levels_completed
      .includes(lvl.id))
    .sort((a, b) => b.id - a.id)

  return levelsList
}

export const previusLevel = (setActualLevel, actualLevel, levelList) => {
  if (actualLevel <= levelList.length) {
    setActualLevel(actualLevel + 1)
  }
}
