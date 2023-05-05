import { combineReducers ,configureStore } from '@reduxjs/toolkit'
import languageReducer from './language.js'

const rootReducer = combineReducers({
    language: languageReducer
})

export const store = configureStore({
    reducer: rootReducer
})