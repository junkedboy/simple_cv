import { createSlice } from '@reduxjs/toolkit'

export const language = createSlice({
    name: 'language',
    initialState: {
      value: 'eng',
    },
    reducers: {
      setLanguage: (state, action) => {
        state.value = action.payload
      }
    }
})

export const { setLanguage } = language.actions

export default language.reducer