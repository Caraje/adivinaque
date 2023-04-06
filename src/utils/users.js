
export const getPositionUserRank = (usersList, id) => {
  const orderList = usersList.sort((a, b) => {
    return (b.user_metadata.categories.cinema.totalPoints - a.user_metadata.categories.cinema.totalPoints)
  })

  const userPosition = orderList.findIndex(function (objeto) {
    return objeto.id === id
  })
  return userPosition
}
