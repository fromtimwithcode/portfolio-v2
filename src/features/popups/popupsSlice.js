import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    earnedCoinsInfo: false,
}

export const popupsSlice = createSlice({
    name: 'popups',
    initialState,
    reducers: {
        showEarnedCoinsInfo: (state, action) => {
            if (!state.earnedCoinsInfo) {
                state.earnedCoinsInfo = true
                document.body.style.position = 'fixed'
                document.body.style.top = `-${window.scrollY}px`
            } else {
                state.earnedCoinsInfo = false
                const scrollY = document.body.style.top
                document.body.style.position = ''
                document.body.style.top = ''
                window.scrollTo(0, parseInt(scrollY || '0') * -1)
            }
        },
    },
})

// Action creators are generated for each case reducer function
export const { showEarnedCoinsInfo } = popupsSlice.actions

export default popupsSlice.reducer