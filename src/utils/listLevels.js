import cinema from '@/db/levelsCategories/cinema.json'

const date = new Date()
export const actualDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`

// Get Actual Day
export const getLevelOfDay = () => {
  const LevelDay = cinema.cinema.filter(lvl => {
    return lvl.publishDay === actualDate
  })
  return LevelDay
}

// Get filtered List of Valid Levels
export const getLevelsList = (scoreUser) => {
  const levelsList = cinema.cinema
    .filter(lvl => lvl.id <= getLevelOfDay()[0]?.id)
    .filter(lvl => !scoreUser?.cinema?.levels_completed
      .includes(lvl.id))
    .sort((a, b) => b.id - a.id)

  return levelsList
}

export const previusLevel = (setActualLevel, actualLevel, levelList) => {
  if (actualLevel <= levelList.length) {
    setActualLevel(actualLevel + 1)
  }
}
