import { getUser, updateUser } from './userSlice'

export const userState = (user) => {
  return async (dispatch) => {
    dispatch(getUser(user))
  }
}
export const userUpdateState = (dataUser) => {
  return async (dispatch) => {
    dispatch(updateUser(dataUser))
  }
}
