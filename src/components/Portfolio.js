import React from 'react'
import styled from 'styled-components'

function Portfolio() {
    return (
        <>
            <Container>
                <Card>lorem ipsum</Card>
                <Card>lorem ipsum</Card>
            </Container>
            <Container>
                <Card>lorem ipsum</Card>
                <Card>lorem ipsum</Card>
            </Container>
        </>
    )
}

const Card = styled.div`
    background: #242424;
    width: 500px;
    height: 200px;
    margin: 20px 60px;
    background: #000;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    background-size: 102%;
    background-position: 49%;
    box-sizing: border-box;
    border: 3px solid #fff;
    border-radius: 3px;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    @media (max-width: 1450px) {
        width: 400px;
    }
    @media (max-width: 1060px) {
        margin: 20px 30px;
    }
    @media (max-width: 500px) {
        margin: 5px 20px;
        height: 150px;
    }
    &:hover {
        cursor: pointer;
        border: 3px solid #bb86fc;
    }
`

const Container = styled.div`
    max-width: 1400px;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
`

export default Portfolio
