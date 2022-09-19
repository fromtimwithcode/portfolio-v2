import { createSlice } from '@reduxjs/toolkit'
import github from './../../images/github.png'
import resume from './../../images/resume.png'
import phone from './../../images/phone.png'

const initialState = {
    unlockableItemsList: [
        {
            id: 0,
            image: github,
            alt: 'coin stack',
            info: 'View repo',
            unlocked: false,
            cost: 5,
        },
        {
            id: 1,
            image: resume,
            alt: 'coin stack',
            info: 'View resume',
            unlocked: false,
            cost: 10,
        },
        {
            id: 2,
            image: phone,
            alt: 'coin stack',
            info: 'Call me',
            unlocked: false,
            cost: 35,
        },
    ],
}

export const unlockableItemsSlice = createSlice({
    name: 'unlockableItems',
    initialState,
    reducers: {
        unlockItem: (state, action) => {
            state.unlockableItemsList[action.payload].unlocked = true
        },
    },
})

// Action creators are generated for each case reducer function
export const { unlockItem } = unlockableItemsSlice.actions

export default unlockableItemsSlice.reducer
