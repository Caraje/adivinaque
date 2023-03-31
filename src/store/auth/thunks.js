import { login } from './authSlice'

export const loginState = (user) => {
  return async (dispatch) => {
    dispatch(login(user))
  }
}
