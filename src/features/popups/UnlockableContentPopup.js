import React from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import { showUnlockableInfo } from './popupsSlice'

function UnlockableContentPopup() {
    const unlocked = useSelector(
        (state) => state.unlockableItems.currentlyUnlocked
    )
    const dispatch = useDispatch()
    return (
        <NotEnoughCoinsModal>
            <NotEnoughCoinsContainer>
                <Left>
                    <StyledCoinStack src={unlocked.image} alt={unlocked.alt} />
                </Left>
                <Right>
                    <Header>Congrats! {unlocked.unlockText}</Header>
                    <a
                        href={unlocked.url}
                        target={unlocked.url ? '_blank' : null}
                        rel="noreferrer"
                        style={{ textDecoration: 'none' }}
                    >
                        <Button onClick={() => dispatch(showUnlockableInfo())}>
                            {unlocked.url ? 'follow link' : 'awesome!'}
                        </Button>
                    </a>
                </Right>
            </NotEnoughCoinsContainer>
        </NotEnoughCoinsModal>
    )
}

const Button = styled.div`
    border: 2px solid #fff;
    border-radius: 3px;
    display: flex;
    margin-top: 12px;
    padding: 3px 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 0.8rem;
    letter-spacing: 1px;
    color: #000;
    background-color: #fff;
    &:hover {
        cursor: pointer;
        color: #bb86fc;
        border: 2px solid #bb86fc;
    }
`

const Header = styled.p`
    font-size: 1.6rem;
    margin: 0;
    text-align: center;
`

const StyledCoinStack = styled.img`
    width: 60%;
`

const Left = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 20%;
`

const Right = styled.div`
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 80%;
`

const NotEnoughCoinsContainer = styled.div`
    font-family: Helvetica;
    border: 3px solid #fff;
    border-radius: 8px;
    display: flex;
    background-color: black;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 550px;
    padding: 25px 10px;
    @media (max-width: 768px) {
        width: 75%;
    }
`

const NotEnoughCoinsModal = styled.div`
    position: fixed;
    z-index: 2;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    background-color: rgb(0, 0, 0);
    background-color: rgba(0, 0, 0, 0.9);
    overflow: auto;
    overflow-x: hidden;
`

export default UnlockableContentPopup
