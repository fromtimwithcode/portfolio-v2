import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    earnedCoinsInfo: false,
    notEnoughCoinsInfo: false,
    spendInfo: false,
    gameInfo: false,
}

const handleModalOpen = () => {
    document.body.style.position = 'fixed'
    document.body.style.top = `-${window.scrollY}px`
}

const handleModalClose = () => {
    const scrollY = document.body.style.top
    document.body.style.position = ''
    document.body.style.top = ''
    window.scrollTo(0, parseInt(scrollY || '0') * -1)
}

export const popupsSlice = createSlice({
    name: 'popups',
    initialState,
    reducers: {
        showEarnedCoinsInfo: (state, action) => {
            if (!state.earnedCoinsInfo) {
                state.earnedCoinsInfo = true
                handleModalOpen()
            } else {
                state.earnedCoinsInfo = false
                handleModalClose()
            }
        },
        showNotEnoughCoinsInfo: (state, action) => {
            if (!state.notEnoughCoinsInfo) {
                state.notEnoughCoinsInfo = true
                handleModalOpen()
            } else {
                state.notEnoughCoinsInfo = false
                handleModalClose()
            }
        },
        showSpendInfo: (state, action) => {
            if (!state.spendInfo) {
                state.spendInfo = true
                handleModalOpen()
            } else {
                state.spendInfo = false
                handleModalClose()
            }
        },
        showGameInfo: (state, action) => {
            if (!state.gameInfo) {
                state.gameInfo = true
                handleModalOpen()
            } else {
                state.gameInfo = false
                handleModalClose()
            }
        },
    },
})

// Action creators are generated for each case reducer function
export const {
    showEarnedCoinsInfo,
    showNotEnoughCoinsInfo,
    showSpendInfo,
    showGameInfo,
} = popupsSlice.actions

export default popupsSlice.reducer
