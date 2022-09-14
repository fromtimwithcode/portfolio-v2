import React from 'react'
import styled from 'styled-components'
import Hero from './components/Hero'

function App() {
    return (
        <Container>
            <Hero />
        </Container>
    )
}

const Container = styled.div`
    box-sizing: border-box;
    width: 100%;
    display: flex;
    justify-content: center;
`

export default App
