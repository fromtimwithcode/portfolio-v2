import React from 'react'
import styled from 'styled-components'
import coin from './../../images/coin.png'
import { useSelector, useDispatch } from 'react-redux'
import { showSpendInfo, showGameInfo } from './../popups/popupsSlice'

function CoinsBar() {
    const coins = useSelector((state) => state.coins.coins)
    const dispatch = useDispatch()
    return (
        <Container>
            <Bar>
                <CoinInfo>
                    <StyledCoin src={coin} alt="coin" />
                    <Paragraph>{coins} coins</Paragraph>
                </CoinInfo>
                <Right>
                    <SpendButton
                        onClick={() => dispatch(showSpendInfo())}
                        style={{ marginRight: '5px' }}
                    >
                        spend
                    </SpendButton>
                    <SpendButton onClick={() => dispatch(showGameInfo())}>
                        ?
                    </SpendButton>
                </Right>
            </Bar>
        </Container>
    )
}

const SpendButton = styled.div`
    border: 1px solid #fff;
    border-radius: 3px;
    display: flex;
    padding: 2px 10px;
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
    }
    @media (min-width: 501px) {
        &:hover {
            border: 1px solid #000;
        }
    }
`

const Right = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding-right: 10px;
`

const Paragraph = styled.p`
    padding-left: 8px;
    font-size: 1.2rem;
    font-weight: 600;
    color: #fff;
`

const StyledCoin = styled.img`
    width: 16%;
`

const CoinInfo = styled.div`
    display: flex;
    align-items: center;
    padding-left: 10px;
`

const Bar = styled.div`
    position: fixed;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 3px solid #fff;
    border-left: 3px solid #fff;
    border-right: 3px solid #fff;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    bottom: 0;
    width: 300px;
    height: 40px;
    background-color: #bb86fc;
    @media (min-width: 501px) {
        right: 40px;
    }
`

const Container = styled.div`
    box-sizing: border-box;
    font-family: Helvetica;
    position: fixed;
    display: flex;
    justify-content: flex-end;
    bottom: 0;
    width: 100%;
    max-width: 1400px;
    height: 40px;
    @media (max-width: 500px) {
        justify-content: center;
    }
`

export default CoinsBar
