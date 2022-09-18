import React from 'react'
import { useSelector } from 'react-redux'
import EarnedCoinsPopup from '../features/popups/EarnedCoinsPopup'
import InfoPopup from '../features/popups/InfoPopup'

function Popups() {
    const showEarnedCoinsPopUp = useSelector(
        (state) => state.popups.earnedCoinsInfo
    )
    const showGameInfoPopUp = useSelector((state) => state.popups.gameInfo)
    return (
        <>
            {showEarnedCoinsPopUp && <EarnedCoinsPopup />}
            {showGameInfoPopUp && <InfoPopup />}
        </>
    )
}

export default Popups
