import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    coins: 0,
    lastEarned: 0,
}

export const coinsSlice = createSlice({
    name: 'coins',
    initialState,
    reducers: {
        addCoins: (state, action) => {
            state.coins += action.payload
            state.lastEarned = action.payload
        },
        subtractCoins: (state, action) => {
            state.coins -= action.payload
        },
    },
})

export const { addCoins, subtractCoins } = coinsSlice.actions

export default coinsSlice.reducer
