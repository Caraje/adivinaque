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
      console.log({ payload })
      // state.avatar = payload.avatarForm
      state.socials = payload.socials
    }
  }
})

export const { getUser, updateUser } = userSlice.actions

export default userSlice.reducer
