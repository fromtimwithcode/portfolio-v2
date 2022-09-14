import React from 'react'
import styled from 'styled-components'

function Hero() {
    return (
        <Header>
            I build <Purple>beautiful</Purple> experiences all over the web
        </Header>
    )
}

const Purple = styled.span`
    color: #bb86fc;
`

const Header = styled.h1`
    font-family: Helvetica;
    font-size: 6.4rem;
    color: #fff;
    margin-top: 0 100px;
    padding: 0 150px;
    @media (max-width: 1285px) {
        padding: 0 75px;
    }
    @media (max-width: 900px) {
        font-size: 4.4rem;
    }
    @media (max-width: 768px) {
        font-size: 3.4rem;
        padding: 0 25px;
    }
    @media (max-width: 500px) {
        text-align: center;
        font-size: 2.4rem;
        padding: 0 15px;
    }
`

export default Hero
