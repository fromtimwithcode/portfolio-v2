import React from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import { unlockItem } from '../features/unlockable_content/unlockableContentSlice'
import { subtractCoins } from '../features/coins/coinsSlice'
import { showNotEnoughCoinsInfo } from '../features/popups/popupsSlice'
import lock from './../images/lock.png'
import unlock from './../images/unlock.png'

function UnlockableContent() {
    const items = useSelector(
        (state) => state.unlockableItems.unlockableItemsList
    )
    const coins = useSelector((state) => state.coins.coins)
    const dispatch = useDispatch()
    const handleUnlock = (id, cost) => {
        if (items[id].unlocked) {
            // TODO show unlocked item info
        } else if (coins >= cost) {
            dispatch(subtractCoins(cost))
            dispatch(unlockItem(id))
        } else {
            dispatch(showNotEnoughCoinsInfo())
        }
    }
    return (
        <Container id="unlockable-content">
            <UnlockableContentContainer>
                <StyledLegend>Unlockable content</StyledLegend>
                {items.map((item, index) => {
                    return (
                        <UnlockableContentItem
                            key={index}
                            onClick={() => handleUnlock(item.id, item.cost)}
                        >
                            <LockContainer>
                                <LockIcon
                                    src={item.unlocked ? unlock : lock}
                                    alt={item.unlocked ? 'unlocked' : 'locked'}
                                />
                            </LockContainer>
                            <Top>
                                <StyledIcon src={item.image} alt={item.alt} />
                            </Top>
                            <Bottom>{item.info}</Bottom>
                            <Bottom>
                                <CostSpan>({item.cost} coins)</CostSpan>
                            </Bottom>
                        </UnlockableContentItem>
                    )
                })}
            </UnlockableContentContainer>
        </Container>
    )
}

const LockContainer = styled.div`
    position: relative;
    display: flex;
    justify-content: flex-start;
    top: 0;
    left: 0;
`

const LockIcon = styled.img`
    width: 35x;
    height: 35px;
    margin-top: -5px;
`

const CostSpan = styled.span`
    font-size: 0.7rem;
    color: #bb86fc;
`

const StyledIcon = styled.img`
    width: 35%;
    padding-bottom: 3px;
`

const Top = styled.div`
    height: 60%;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Bottom = styled.div`
    height: 20%;
    display: flex;
`

const UnlockableContentItem = styled.div`
    border: 1px solid #000;
    border-radius: 3px;
    width: 33.3%;
    height: auto;
    margin: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 0.7rem;
    padding: 8px;
    padding-bottom: 8px;
    @media (min-width: 501px) {
        &:hover {
            border: 1px solid #fff;
        }
    }
    &:hover {
        cursor: pointer;
    }
`

const StyledLegend = styled.legend`
    padding: 0 10px;
    font-size: 1rem;
`

const UnlockableContentContainer = styled.fieldset`
    box-sizing: border-box;
    border: 3px solid #bb86fc;
    border-radius: 3px;
    color: #fff;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    background-color: black;
    width: 50%;
    height: 200px;
    margin: 20px 60px;
    @media (max-width: 768px) {
        width: 80%;
    }
    @media (max-width: 500px) {
        font-size: 0.8rem;
        margin: 5px 20px;
        margin-bottom: 20px;
        width: 100%;
        height: 150px;
    }
`

const Container = styled.div`
    box-sizing: border-box;
    width: 100%;
    max-width: 1400px;
    display: flex;
    flex-wrap: no-wrap;
    justify-content: center;
    align-items: center;
    font-family: Helvetica;
`

export default UnlockableContent
