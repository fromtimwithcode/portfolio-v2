import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    points: 0,
}

export const pointsSlice = createSlice({
    name: 'points',
    initialState,
    reducers: {
        addPoints: (state, action) => {
            state.value += action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const { addPoints } = pointsSlice.actions

export default pointsSlice.reducer
