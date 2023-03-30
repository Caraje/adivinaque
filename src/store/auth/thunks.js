import { login } from './authSlice'

export const loginState = (user) => {
  console.log(user.data.user)
  return async (dispatch) => {
    dispatch(login(user.data.user))
  }
}
