import React from 'react'
import { useSelector } from 'react-redux'
import EarnedCoinsPopup from '../features/popups/EarnedCoinsPopup'
import SpendPopup from './../features/popups/SpendPopup'
import InfoPopup from '../features/popups/InfoPopup'

function Popups() {
    const showEarnedCoinsPopUp = useSelector(
        (state) => state.popups.earnedCoinsInfo
    )
    const showSpendInfoPopUp = useSelector((state) => state.popups.spendInfo)
    const showGameInfoPopUp = useSelector((state) => state.popups.gameInfo)
    return (
        <>
            {showEarnedCoinsPopUp && <EarnedCoinsPopup />}
            {showSpendInfoPopUp && <SpendPopup />}
            {showGameInfoPopUp && <InfoPopup />}
        </>
    )
}

export default Popups
