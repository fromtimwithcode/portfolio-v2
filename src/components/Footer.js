import React, { useState } from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { addCoins } from '../features/coins/coinsSlice'
import { showEarnedCoinsInfo } from '../features/popups/popupsSlice'

function Footer() {
    const dispatch = useDispatch()
    const [earned, setEarned] = useState(false)
    const handleEarnedCoins = () => {
        dispatch(addCoins(22))
        dispatch(showEarnedCoinsInfo())
        setEarned(true)
    }
    return (
        <Container>
            from{' '}
            <Link
                href="https://github.com/fromtimwithcode"
                target="_blank"
                onClick={earned ? null : () => handleEarnedCoins()}
            >
                tim
            </Link>{' '}
            <Purple>♥</Purple> with{' '}
            <Link href="https://reactjs.org" target="_blank">
                react
            </Link>{' '}
            and{' '}
            <Link href="https://redux.js.org/" target="_blank">
                redux
            </Link>
        </Container>
    )
}

const Link = styled.a`
    color: #fff;
    text-decoration: none;
    padding-left: 5px;
    padding-right: 5px;
    &:hover {
        cursor: pointer;
        color: #bb86fc;
    }
`

const Purple = styled.span`
    color: #bb86fc;
    padding-right: 5px;
`

const Container = styled.div`
    box-sizing: border-box;
    width: 100%;
    margin: 80px 0;
    padding: 25px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: Helvetica;
    font-size: 0.8rem;
    letter-spacing: 1px;
    color: #fff;
    @media (max-width: 1450px) {
        margin-top: 40px;
    }
    @media (max-width: 500px) {
        margin-top: 15px;
    }
`

export default Footer
