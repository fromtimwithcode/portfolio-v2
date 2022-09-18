import React from 'react'
import { useSelector } from 'react-redux'
import EarnedCoinsPopup from '../features/popups/EarnedCoinsPopup'

function Popups() {
    const showEarnedCoinsPopUp = useSelector(
        (state) => state.popups.earnedCoinsInfo
    )
    return showEarnedCoinsPopUp && <EarnedCoinsPopup />
}

export default Popups
