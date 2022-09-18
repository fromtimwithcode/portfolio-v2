import React from 'react'
import styled from 'styled-components'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import Portfolio from './components/Portfolio'
import Footer from './components/Footer'
import CoinsBar from './features/coins/CoinsBar'
import Popups from './components/Popups'

function App() {
    return (
        <Container>
            <NavBar />
            <Hero />
            <Portfolio />
            <Footer />
            <CoinsBar />
            <Popups />
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
