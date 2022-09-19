import React from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { showSpendInfo } from './popupsSlice'

function SpendPopup() {
    const dispatch = useDispatch()
    return (
        <EarnedCoinsModal>
            <EarnedCoinsContainer>
                <Top>
                    <Header>Spend functionality coming soon!</Header>
                </Top>
                {/* <Middle></Middle> */}
                <Bottom>
                    <Button onClick={() => dispatch(showSpendInfo())}>
                        awesome!
                    </Button>
                </Bottom>
            </EarnedCoinsContainer>
        </EarnedCoinsModal>
    )
}

const Button = styled.div`
    border: 2px solid #fff;
    border-radius: 3px;
    display: flex;
    margin-top: 20px;
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
    @media (max-width: 500px) {
        font-size: 1.2rem;
    }
`

const Top = styled.div`
    display: flex;
    justify-content: center;
`

// const Middle = styled.div`
//     display: flex;
//     justify-content: center;
//     margin-top: 25px;
//     font-size: 0.8rem;
// `

const Bottom = styled.div`
    display: flex;
    justify-content: center;
`

const EarnedCoinsContainer = styled.div`
    font-family: Helvetica;
    border: 3px solid #fff;
    border-radius: 8px;
    color: #fff;
    display: flex;
    flex-direction: column;
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

export default SpendPopup
