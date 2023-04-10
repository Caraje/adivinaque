import { logoutUser } from '@/services/supabase'
import { login, logout } from './authSlice'

export const loginState = (user) => {
  return async (dispatch) => {
    dispatch(login(user))
  }
}

export const logoutState = () => {
  logoutUser()
  return async (dispatch) => {
    dispatch(logout())
  }
}
