import React from 'react'
import styled from 'styled-components'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import Portfolio from './components/Portfolio'
import Footer from './components/Footer'
import PointsBar from './features/points/PointsBar'

function App() {
    return (
        <Container>
            <NavBar />
            <Hero />
            <Portfolio />
            <Footer />
            <PointsBar />
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
