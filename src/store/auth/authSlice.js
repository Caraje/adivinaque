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
