import React from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { showEarnedCoinsInfo } from './popupsSlice'
import coin_stack from './../../images/coin_stack.png'

function EarnedCoinsPopup() {
    const dispatch = useDispatch()
    return (
        <EarnedCoinsModal>
            <EarnedCoinsContainer>
                <Left>
                    <StyledCoinStack src={coin_stack} alt="coin stack" />
                </Left>
                <Right>
                    <Header>You earned 5 coins!</Header>
                    <Button onClick={() => dispatch(showEarnedCoinsInfo())}>
                        awesome!
                    </Button>
                </Right>
            </EarnedCoinsContainer>
        </EarnedCoinsModal>
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
    // @media (max-width: 768px) {
    //     margin-top: 2px;
    // }
    &:hover {
        cursor: pointer;
        color: #bb86fc;
        border: 2px solid #bb86fc;
    }
`

const Header = styled.p`
    font-size: 1.6rem;
    margin: 0;
`

const StyledCoinStack = styled.img`
    width: 100%;
`

const Left = styled.div`
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

const EarnedCoinsContainer = styled.div`
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

const EarnedCoinsModal = styled.div`
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

export default EarnedCoinsPopup
