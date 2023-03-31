import { getUser } from './userSlice'

export const userState = (user) => {
  return async (dispatch) => {
    dispatch(getUser(user))
  }
}
