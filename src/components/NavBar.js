import React from 'react'
import styled from 'styled-components'

function NavBar() {
    const links = ['link', 'link', 'link']
    return (
        <Container>
            <Left>TIM MARCHANT</Left>
            <Right>
                {links.map((link) => {
                    return <StyledLink>{link}</StyledLink>
                })}
            </Right>
        </Container>
    )
}

const StyledLink = styled.p`
    text-transform: uppercase;
    letter-spacing: 3px;
    font-weight: 600;
    padding-left: 20px;
`

const Left = styled.div`
    font-size: 1.2rem;
    letter-spacing: 5px;
    padding-left: 30px;
    @media (max-width: 500px) {
        padding-left: 0;
        font-size: 0.8rem;
    }
    &:hover {
        cursor: pointer;
    }
`

const Right = styled.div`
    display: flex;
    padding-right: 30px;
    @media (max-width: 768px) {
        display: none;
    }
    @media (max-width: 500px) {
        padding-right: 0;
    }
`

const Container = styled.div`
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    font-family: Helvetica;
    color: #fff;
    padding: 30px 0;
    @media (max-width: 500px) {
        flex-direction: column;
        padding: 0;
        padding-top: 30px;
    }
`

export default NavBar
