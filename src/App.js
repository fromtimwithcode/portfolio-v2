import React from 'react'
import styled from 'styled-components'
import NavBar from './components/NavBar'
import Hero from './components/Hero'

function App() {
    return (
        <Container>
            <NavBar />
            <Hero />
        </Container>
    )
}

const Container = styled.div`
    box-sizing: border-box;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

export default App
