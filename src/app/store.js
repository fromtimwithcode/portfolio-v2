import { configureStore } from '@reduxjs/toolkit'
import pointsReducer from './../features/points/pointsSlice'

export const store = configureStore({
    reducer: { points: pointsReducer },
})
