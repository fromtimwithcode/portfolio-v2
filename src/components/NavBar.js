import React from 'react'
import styled from 'styled-components'

function NavBar() {
    const links = [
        { id: 1, display: 'github', url: 'https://github.com/fromtimwithcode' },
        {
            id: 2,
            display: 'twitter',
            url: 'https://twitter.com/timbo_btc',
        },
        {
            id: 3,
            display: 'linkedin',
            url: 'https://linkedin.com/in/fromtimwithcode',
        },
    ]
    return (
        <Container>
            <Left onClick={() => window.location.reload()}>TIM MARCHANT</Left>
            <Right>
                {links.map((link) => {
                    return (
                        <StyledLink key={link.id} href={link.url}>
                            {link.display}
                        </StyledLink>
                    )
                })}
            </Right>
        </Container>
    )
}

const StyledLink = styled.a`
    text-transform: uppercase;
    letter-spacing: 3px;
    font-weight: 600;
    color: #fff;
    text-decoration: none;
    padding-left: 20px;
    &:hover {
        cursor: pointer;
        color: #bb86fc;
    }
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
    padding: 40px 0;
    @media (max-width: 500px) {
        flex-direction: column;
        padding: 0;
        padding-top: 30px;
    }
`

export default NavBar
