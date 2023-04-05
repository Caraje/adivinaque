
import { updateUserScore } from '@/services/supabase'
import { getUser, updateUser, userScore } from './userSlice'

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

export const userScoreState = (userPoints) => {
  updateUserScore(userPoints)
  return async (dispatch) => {
    dispatch(userScore(userPoints))
  }
}
