import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  id: '',
  userName: '',
  avatar: '',
  url: '',
  categories: '',
  socials: '',
  errorMessage: null
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    getUser: (state, action) => {
      const { payload } = action
      state.id = payload.id
      state.userName = payload.user_metadata.userName
      state.avatar = payload.user_metadata.imgAvatar
      state.url = payload.user_metadata.url
      state.categories = payload.user_metadata.categories
      state.socials = payload.user_metadata.socials
    },
    updateUser: (state, action) => {
      const { payload } = action
      state.socials = payload.socials
    },
    userScore: (state, action) => {
      state.categories = action.payload
    }

  }
})

export const { getUser, updateUser, userScore } = userSlice.actions

export default userSlice.reducer
