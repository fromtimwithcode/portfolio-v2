import React from 'react'
import { useSelector } from 'react-redux'
import EarnedCoinsPopup from '../features/popups/EarnedCoinsPopup'
import NotEnoughCoinsPopup from '../features/popups/NotEnoughCoinsPopup'
import InfoPopup from '../features/popups/InfoPopup'
import UnlockableContentPopup from '../features/popups/UnlockableContentPopup'

function Popups() {
    const showEarnedCoinsPopUp = useSelector(
        (state) => state.popups.earnedCoinsInfo
    )
    const showNotEnoughCoinsPopUp = useSelector(
        (state) => state.popups.notEnoughCoinsInfo
    )
    const showUnlockableContentPopUp = useSelector(
        (state) => state.popups.unlockableInfo
    )
    const showGameInfoPopUp = useSelector((state) => state.popups.gameInfo)
    return (
        <>
            {showEarnedCoinsPopUp && <EarnedCoinsPopup />}
            {showGameInfoPopUp && <InfoPopup />}
            {showNotEnoughCoinsPopUp && <NotEnoughCoinsPopup />}
            {showUnlockableContentPopUp && <UnlockableContentPopup />}
        </>
    )
}

export default Popups
