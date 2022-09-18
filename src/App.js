import React from 'react'
import styled from 'styled-components'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import Portfolio from './components/Portfolio'
import Footer from './components/Footer'
import CoinsBar from './features/coins/CoinsBar'
import EarnedCoinsPopup from './features/popups/EarnedCoinsPopup'
import { useSelector } from 'react-redux'

function App() {
    const showEarnedCoinsPopUp = useSelector(
        (state) => state.popups.earnedCoinsInfo
    )
    return (
        <Container>
            <NavBar />
            <Hero />
            <Portfolio />
            <Footer />
            <CoinsBar />
            {showEarnedCoinsPopUp && <EarnedCoinsPopup />}
        </Container>
    )
}

const Container = styled.div`
    box-sizing: border-box;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export default App
