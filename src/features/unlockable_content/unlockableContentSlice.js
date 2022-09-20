import { createSlice } from '@reduxjs/toolkit'
import github from './../../images/github.png'
import resume from './../../images/resume.png'
import phone from './../../images/phone.png'

const initialState = {
    unlockableItemsList: [
        {
            id: 0,
            image: github,
            alt: 'github',
            info: 'View repo',
            url: 'https://github.com/fromtimwithcode/portfolio-v2',
            unlockText: `You've unlocked my Github repo.`,
            unlocked: false,
            cost: 5,
        },
        {
            id: 1,
            image: resume,
            alt: 'resume',
            info: 'View resume',
            url: 'https://docs.google.com/document/d/1mjjZFdtvZRNZ4BPqsWNDAQJrMkHTREKJKaEXOXqtClY/edit',
            unlockText: `You've unlocked my resume.`,
            unlocked: false,
            cost: 10,
        },
        {
            id: 2,
            image: phone,
            alt: 'phone',
            info: 'Call me',
            unlockText: `You've unlocked my phone number: 414-775-4333.`,
            unlocked: false,
            cost: 35,
        },
    ],
    currentlyUnlocked: {},
}

export const unlockableItemsSlice = createSlice({
    name: 'unlockableItems',
    initialState,
    reducers: {
        unlockItem: (state, action) => {
            let id = action.payload
            state.unlockableItemsList[id].unlocked = true
            state.currentlyUnlocked = state.unlockableItemsList[id]
        },
    },
})

export const { unlockItem } = unlockableItemsSlice.actions

export default unlockableItemsSlice.reducer
