import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  status: '',
  id: '',
  userName: '',
  errorMessage: null
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      state.status = action.payload.aud
      state.id = action.payload.id
      state.userName = action.payload.user_metadata.userName
    }
  }
})

export const { login } = authSlice.actions

export default authSlice.reducer
// login: (state, action) => {
//   state.status = action.payload.aud
//   state.user = [
//     state.uid = action.payload.id,
//     state.email = action.payload.email,
//     state.userName = action.payload.user_metadata.userName,
//     state.avatar = action.payload.user_metadata.avatar,
//     state.completed = action.payload.user_metadata.completed,
//     state.points = action.payload.user_metadata.points,
//     state.socials = action.payload.user_metadata.socials,
//     state.url = action.payload.user_metadata.url
//   ]
// },
