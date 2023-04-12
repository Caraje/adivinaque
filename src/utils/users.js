
// export const getPositionUserRank = (categoryDB, usersList, id) => {
//   const orderList = usersList.sort((a, b) => {
//     return (b.user_metadata.categories.cinema.totalPoints - a.user_metadata.categories.cinema.totalPoints)
//   })

//   const userPosition = orderList.findIndex(function (objeto) {
//     return objeto.id === id
//   })
//   return userPosition
// }

export const getPositionUserRank = (categoryDB, usersList, id) => {
  const orderList = usersList.sort((a, b) => {
    return (categoryDB.category === 'cinema')
      ? (b.user_metadata.categories.cinema.totalPoints - a.user_metadata.categories.cinema.totalPoints)
      : (categoryDB.category === 'series')
          ? (b.user_metadata.categories.series.totalPoints - a.user_metadata.categories.series.totalPoints)
          : (b.user_metadata.categories.videogames.totalPoints - a.user_metadata.categories.videogames.totalPoints)
  })

  const userPosition = orderList.findIndex(function (user) {
    return user.id === id
  })
  return userPosition
}

export const getOrderedRank = (categoryDB, usersList) => {
  const orderList = usersList.sort((a, b) => {
    return (categoryDB.category === 'cinema')
      ? (b.user_metadata.categories.cinema.totalPoints - a.user_metadata.categories.cinema.totalPoints)
      : (categoryDB.category === 'series')
          ? (b.user_metadata.categories.series.totalPoints - a.user_metadata.categories.series.totalPoints)
          : (b.user_metadata.categories.videogames.totalPoints - a.user_metadata.categories.videogames.totalPoints)
  })

  return orderList
}
