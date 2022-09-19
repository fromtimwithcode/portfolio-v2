import { configureStore } from '@reduxjs/toolkit'
import coinsReducer from '../features/coins/coinsSlice'
import popupsReducer from '../features/popups/popupsSlice'
import unlockableItemsReducer from '../features/unlockable_content/unlockableContentSlice'

export const store = configureStore({
    reducer: {
        coins: coinsReducer,
        popups: popupsReducer,
        unlockableItems: unlockableItemsReducer,
    },
})
