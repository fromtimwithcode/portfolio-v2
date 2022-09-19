import React from 'react'
import { useSelector } from 'react-redux'
import EarnedCoinsPopup from '../features/popups/EarnedCoinsPopup'
import NotEnoughCoinsPopup from '../features/popups/NotEnoughCoinsPopup'
import InfoPopup from '../features/popups/InfoPopup'

function Popups() {
    const showEarnedCoinsPopUp = useSelector(
        (state) => state.popups.earnedCoinsInfo
    )
    const showNotEnoughCoinsPopUp = useSelector(
        (state) => state.popups.notEnoughCoinsInfo
    )
    const showGameInfoPopUp = useSelector((state) => state.popups.gameInfo)
    return (
        <>
            {showEarnedCoinsPopUp && <EarnedCoinsPopup />}
            {showGameInfoPopUp && <InfoPopup />}
            {showNotEnoughCoinsPopUp && <NotEnoughCoinsPopup />}
        </>
    )
}

export default Popups
