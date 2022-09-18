import { configureStore } from '@reduxjs/toolkit'
import coinsReducer from '../features/coins/coinsSlice'
import popupsReducer from '../features/popups/popupsSlice'

export const store = configureStore({
    reducer: { coins: coinsReducer, popups: popupsReducer },
})
